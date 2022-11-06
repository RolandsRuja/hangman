import React, { useEffect, useState, useMemo, useCallback } from 'react';

import { getLetters } from '../../helpers/getLetters';
import { getRandomNumber } from '../../helpers/getRandomNumber';

import { Construction } from './Construction/Construction';
import { Letters } from './Letters/Letters';
import { Human } from './Human/Human';
import { Word } from './Word/Word';
import { GameOver } from './GameOver/GameOver';

import wordList from './word_list.json'

import './Hangman.css';

const allowedLetters = getLetters();

const MAX_MISATKES = 6;

export enum GAME_STATUS {
  PLAYING,
  WIN,
  LOSE,
}

export const Hangman = () => {
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [word, setWord] = useState(wordList[getRandomNumber(wordList.length)].toUpperCase());
  const [mistakeCount, setMistakeCount] = useState(0);
  const [status, setStatus] = useState<GAME_STATUS>(GAME_STATUS.PLAYING);

  const wordLetters = useMemo(() => word.split(''), [word]);

  const handleLetterSelection = (letter: string) => {
    if (status !== GAME_STATUS.PLAYING) {
      return;
    }

    if (allowedLetters.includes(letter) && !selectedLetters.includes(letter)) {
      if (!wordLetters.includes(letter)) {
        setMistakeCount((prevState) => prevState + 1);
      }

      setSelectedLetters((prevState) => [...prevState, letter]);
    }
  }

  const handleReset = () => {
    setSelectedLetters([]);
    setWord(wordList[getRandomNumber(wordList.length)].toUpperCase());
    setMistakeCount(0);
    setStatus(GAME_STATUS.PLAYING);
  }

  const listenKeyPress = useCallback((event: KeyboardEvent) => {
    const letter = event.key.toUpperCase();
    if (allowedLetters.includes(letter)) {
      handleLetterSelection(letter);
    }
  }, [selectedLetters]);

  useEffect(() => {
    document.addEventListener('keydown', listenKeyPress);

    return () => {
      document.removeEventListener('keydown', listenKeyPress);
    }
  }, [listenKeyPress]);

  useEffect(() => {
    if (mistakeCount === MAX_MISATKES) {
      setStatus(GAME_STATUS.LOSE);
    }
  }, [mistakeCount]);

  useEffect(() => {
    const uniqueWordLetters = [...new Set(wordLetters)];

    const guessedLetters = selectedLetters.filter((letter) => uniqueWordLetters.includes(letter));

    if (guessedLetters.length === uniqueWordLetters.length) {
      setStatus(GAME_STATUS.WIN);
    }
  }, [selectedLetters]);

  return (
    <div className='root'>
      <Construction>
        <Human 
          mistakeCount={mistakeCount}
        />
      </Construction>
      <GameOver 
        status={status}
        word={word}
        onReset={handleReset}
      />
      <Word
        value={wordLetters}
        selectedLetters={selectedLetters}
      />
      <Letters 
        selectedLetters={selectedLetters}
        selectLetter={handleLetterSelection}
        wordLetters={wordLetters}
        isDisabled={status !== GAME_STATUS.PLAYING}
      />
    </div>
  );
};