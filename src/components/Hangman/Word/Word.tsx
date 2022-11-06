import React, { FC } from 'react';
import PropTypes from 'prop-types';

import './Word.css';

interface Props {
  value: string[];
  selectedLetters: string[];
}
export const Word: FC<Props> = ({
  value,
  selectedLetters,
}) => (
  <div className="word">
    {value.map((letter, index) => (
      <div key={index}>
        {selectedLetters.includes(letter) && letter}
      </div>
    ))}
  </div>
);

Word.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedLetters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
