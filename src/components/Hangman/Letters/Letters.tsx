import React, { FC } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getLetters } from '../../../helpers/getLetters';

import { Letter } from './Letter';

import './Letters.css';

const letters = getLetters();

interface Props {
  selectedLetters: string[];
  wordLetters: string[];
  selectLetter: (letters: string) => void;
  isDisabled: boolean;
}
export const Letters: FC<Props> = ({
  selectedLetters,
  wordLetters,
  selectLetter,
  isDisabled,
}) => (
  <div className={classNames('letters', { isDisabled })}>
    {letters.map((letter, index) => (
      <Letter
        key={index}
        value={letter}
        isSelected={selectedLetters.includes(letter)}
        isInWord={wordLetters.includes(letter)}
        isDisabled={isDisabled}
        onClick={() => selectLetter(letter)}
      />
    ))}
  </div>
);

Letters.propTypes = {
  selectedLetters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  wordLetters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectLetter: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
