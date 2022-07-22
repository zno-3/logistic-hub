import react from 'react';
import styles from './Input.css';
var classNames = require('classnames');

const Input = ({text, type, size}) => {
  var btnClass = classNames(type, size);
  return (
  <div class="form-label-group">
    <input type="text" id="tt2" className="form-control" placeholder="Floating Label" />
    <label for="tt2">Floating Label</label>
  </div>
  )
}

export default Input;