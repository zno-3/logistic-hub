import React from 'react';
import styles from './Button.css';
var classNames = require('classnames');

const Button = ({text, type, size}) => {
  var btnClass = classNames(type, size);
  return (
    <button className={btnClass}>{text}</button>
  )
}

export default Button;