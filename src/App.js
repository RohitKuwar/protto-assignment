import { useState } from 'react';
import SideMenuBar from './components/sideMenuBar/SideMenuBar.js';
import Navbar from './components/navbar/Navbar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import LeftSection from './components/leftSection/LeftSection';
import RightSection from './components/rightSection/RightSection';
import styles from './App.module.css';

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [showRightSection, setShowRightSection] = useState(false)
  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => !prevState);
  };
  const rightSectionToggleHandler = () => {
    setShowRightSection((prevState) => !prevState);
  };
  return (    
    <div className={styles.mainBody}>
      <div className={styles.wrapper}>
        <div className={styles.sideBar}><SideMenuBar /></div>
        <div className = {styles.navbar}>
          <Navbar drawerToggleClicked = {sideDrawerToggleHandler}/>
          <SideDrawer open={showSideDrawer} close={sideDrawerToggleHandler} />
        </div>
        <div className={styles.mobileSearchBox}>
          <input type="text" className={styles.mobSearchBox} 
        placeholder = "&#128269; Search transactions, invoices, booking ids, customer names" />
        </div>
        <div className={styles.section}>
            <div className={styles.left}>
              <LeftSection itemToggleClicked = {rightSectionToggleHandler} />
            </div>
            <div className={styles.right}>
              <RightSection show={showRightSection} close={rightSectionToggleHandler} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
