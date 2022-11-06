import React, { FC } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Letters.css';

interface Props {
  value: string;
  isSelected: boolean;
  isInWord: boolean;
  isDisabled: boolean;
  onClick: () => void;
}
export const Letter: FC<Props> = ({
  value,
  isSelected,
  isInWord,
  isDisabled,
  onClick,
}) => (
  <button
    type="button"
    className={
      classNames(
        'letter',
        { isSelected },
        { isCorrect: isSelected && isInWord },
      )
    }
    onClick={onClick}
    disabled={isSelected || isDisabled}
  >
    {value}
  </button>
);

Letter.propTypes = {
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isInWord: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
