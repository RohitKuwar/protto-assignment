import React from 'react';
import PropTypes from 'prop-types';
import styles from'./navbar.module.css';
import { FaGlobe, FaBell, FaComments, FaUserCircle, FaAngleDown } from "react-icons/fa";

function Navbar({ drawerToggleClicked }) {
  return (
    <>
    <div className={styles.header}>
      <div className={styles.left}>
        <div
          className={styles.DrawerToggle}
          onClick={drawerToggleClicked}
          onKeyPress={drawerToggleClicked}>
          <span />
          <span />
          <span />
        </div>  
        <input type="text" className={styles.searchBox} 
        placeholder = "&#128269; Search transactions, invoices, booking ids, customer names" />
      </div>
      <div className={styles.right}>
        <ul>
          <li><a href="" className={styles.navLinks}><FaGlobe /></a></li>
          <li><a href="" className={styles.navLinks}><FaComments /></a></li>
          <li><a href="" className={styles.navLinks}><FaBell /></a></li>
          <li><a href="" className={styles.navLinks}>John Doe &#9662;</a></li>
          <li><a href="" className={styles.navLinks}><FaUserCircle /></a></li>
        </ul>
      </div>
    </div>
    </>
  )
}

Navbar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired
};

export default Navbar
