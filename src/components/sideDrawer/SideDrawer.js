import React from 'react';
import PropTypes from 'prop-types';
import { FaHome, FaTh, FaRegEnvelope, FaRegFile, FaBoxes } from "react-icons/fa";
import styles from './sideDrawer.module.css';
import Backdrop from '../backdrop/Backdrop';

const SideDrawer = ({ open, close }) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <div>
      <Backdrop show={open} clicked={close} />
      <div className={attachedClasses.join(' ')}>
            <span
              className={styles.saltire}
              tabIndex={0}
              role="button"
              onKeyDown={close}
              onClick={close}>
              &times;
            </span>
        <nav>
          <h3 className={styles.heading}>Product Portal</h3>
          <ul>
            <li><a href="#"> <span><FaHome /></span> <span>Home</span></a></li>
            <li><a href="#"> <span><FaTh /></span> <span>Dashboard</span></a></li>
            <li><a href="#"> <span><FaRegEnvelope /></span> <span>Inbox</span></a></li>
            <li><a href="#"> <span><FaRegFile /></span> <span>Invoices</span></a></li>
            <li><a href="#"> <span><FaBoxes /></span> <span>Products</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default SideDrawer;
