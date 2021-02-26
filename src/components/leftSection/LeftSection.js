import React from "react";
import styles from "./leftSection.module.css";
import data from '../jsonData/productSold.json';

function LeftSection({ itemToggleClicked }) {
  return (
    <div className={styles.leftSection}>
      <div className={styles.leftMainContent}>
        <div className={styles.heading}>
          <h5>Top Products</h5>
          <input type="text" placeholder="&#128269; Search Product Name" />
        </div>
        <div className={styles.productHeading}>
          <div>PRODUCT</div>
          <div className={styles.nestedDiv}>
            <div>AVAILABILITY</div>
            <div>TOTAL</div>
          </div>
        </div>
          {
            data.map((item) => {
              return(
                  <div className = {styles.items} onClick={ itemToggleClicked }>
                    <div className={styles.leftDiv}>
                      <li className={styles.productPic}>{item.productPic}</li>
                      <li>{item.product}</li>
                    </div>
                    <div className={styles.rightDiv}>
                      <li>{item.stock}</li>
                      <li>{item.price}</li>
                    </div>
                  </div>
              )
            })
          }
      </div>
      <footer>
        <a href="#">Show More</a>
      </footer>
    </div>
  );
}

export default LeftSection;
