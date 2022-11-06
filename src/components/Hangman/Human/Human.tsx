import React, { FC, useMemo } from 'react';
import PropTypes from 'prop-types';

import './Human.css';

enum PARTS {
  HEAD = 1,
  BODY = 2,
  LEFT_ARM = 3,
  RIGHT_ARM = 4,
  LEFT_LEG = 5,
  RIGHT_LEG = 6,
}

interface ShowParts {
  head: boolean;
  body: boolean;
  leftArm: boolean;
  rightArm: boolean;
  leftLeg: boolean;
  rightLeg: boolean;
}

type GetPartsToShow = (mistakeCount: number) => ShowParts;
const getPartsToShow: GetPartsToShow = (mistakeCount) => ({
  head: PARTS.HEAD <= mistakeCount,
  body: PARTS.BODY <= mistakeCount,
  leftArm: PARTS.LEFT_ARM <= mistakeCount,
  rightArm: PARTS.RIGHT_ARM <= mistakeCount,
  leftLeg: PARTS.LEFT_LEG <= mistakeCount,
  rightLeg: PARTS.RIGHT_LEG <= mistakeCount,
});

interface Props {
  mistakeCount: number;
}
export const Human: FC<Props> = ({
  mistakeCount,
}) => {
  const show = useMemo(() => getPartsToShow(mistakeCount), [mistakeCount]);

  return (
    <div className='human'>
      {show.head && <div className='head' />}
      {show.body && <div className='body' />}
      <div className='arms'>
        {show.leftArm && <div className='left-arm' />}
        {show.rightArm && <div className='right-arm' />}
      </div>
      <div className='legs'>
      {show.leftLeg && <div className='left-leg' />}
        {show.rightLeg &&  <div className='right-leg' /> }
      </div>
    </div>
  );
};

Human.propTypes = {
  mistakeCount: PropTypes.number.isRequired,
};
