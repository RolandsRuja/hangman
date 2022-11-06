import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { GAME_STATUS } from '../Hangman';

interface Props {
  status: GAME_STATUS;
  word: string;
  onReset: () => void;
}
export const GameOver: FC<Props> = ({
  status,
  word,
  onReset,
}) => {
  if (status === GAME_STATUS.PLAYING) {
    return null;
  }

  return (
    <div>
      <div>
        {status === GAME_STATUS.WIN && 'Congrats you won!'}
        {status === GAME_STATUS.LOSE && `Sorry, you lost! The word was: ${word}`}
      </div>
      <div>
        <button
          type="button"
          onClick={() => onReset()}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};

GameOver.propTypes = {
  //status: PropTypes.oneOf(Object.values(GAME_STATUS).map((item) => item as GAME_STATUS)).isRequired,
  word: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};
