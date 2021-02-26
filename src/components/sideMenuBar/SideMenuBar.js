import React from 'react';
import { FaHome, FaTh, FaRegEnvelope, FaRegFile, FaBoxes } from "react-icons/fa";
import styles from './sideMenuBar.module.css';

function SideMenuBar() {
  return (
    <>
    <div className={styles.sideMenu}>
      <h3>Product Portal</h3>
      <ul>
        <li><a href="#" className={styles.menuItems}> <span><FaHome /></span> <span>Home</span></a></li>
        <li><a href="#" className={styles.menuItems}> <span><FaTh /></span> <span>Dashboard</span></a></li>
        <li><a href="#" className={styles.menuItems}> <span><FaRegEnvelope /></span> <span>Inbox</span></a></li>
        <li><a href="#" className={styles.menuItems}> <span><FaRegFile /></span> <span>Invoices</span></a></li>
        <li><a href="#" className={styles.menuItems}> <span><FaBoxes /></span> <span>Products</span></a></li>
      </ul>
    </div>
    </>
  )
}

export default SideMenuBar;
