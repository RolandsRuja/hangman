import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

import './Construction.css';

interface Props {
  children: ReactNode;
}
export const Construction: FC<Props> = ({
  children,
}) => (
  <div className='construction'>
    <div className='top' />
    <div className='rope' />
    {children}
    <div className='pole' />
    <div className='base' />
  </div>
);

Construction.propTypes = {
  children: PropTypes.node.isRequired,
};
