import React from 'react';
import PropTypes from 'prop-types';
import styles from './backdrop.module.css';

const Backdrop = ({ show, clicked }) =>
  show ? <div className={styles.Backdrop} onClick={clicked} /> : null;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired
};

export default Backdrop;