import React, { useState } from "react";
import styles from "./rightSection.module.css";
import details from "../jsonData/unitSold.json";

function RightSection({ show }) {
  const [showOrders, setShowOrders] = useState(true);
  const changeData = () => {
    setShowOrders((prevState) => !prevState);
  };
  return (
    <div>
      {
        show ? 
        <div className={styles.rightSection}>
      <div className={styles.rightMainContent}>
        <h2>Product Details</h2>
        <div className={styles.subHeading}>
          <div>Units Sold</div>
          <div>100</div>
        </div>
        <div className = {`${showOrders ? styles.description : styles.descriptionHide}`}>
          <h5>Description</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem earum asperiores iusto. Corrupti laudantium commodi dolore optio sit sed nemo fugiat obcaecati laboriosam rem dolor nobis fugit consequuntur explicabo, suscipit tempore. Optio atque id iste fugit velit fuga dolorum amet impedit, dolorem magni tenetur. Veritatis facilis libero numquam saepe harum.</p>
        </div>
        <div className={styles.heading}>
          <div></div>
          <div>Orders</div>
          <div>Status:Active</div>
        </div>
        {
          details.map((item)=>{
            return(
              <div className={styles.items}>
                <li>{item.quantity}</li>
                <li>{item.product}</li>
                <li>{item.description}</li>
                <li>{item.stock}</li>
                <li>{item.price}</li>
              </div>
            )
          })
        }
      </div>
      <footer>
        <div className={styles.itemTotal}>
          <div>Item Total</div>
          <div>--------------------------------------------------------------</div>
          <div>$49640</div>
        </div>
        <div className={styles.orderBtn}>
          <button className={styles.approveBtn}>Approve Order</button>
          <button className={styles.disapproveBtn}>Disapprove Order</button>
        </div>
        <div className={styles.inventoryBtn}>
          <button className={styles.checkBtn}
          onClick={changeData}>
            {showOrders ? "Check Inventory" : "Back"}
            </button>
        </div>
      </footer>
    </div> 
     : null
     }
    </div>
  );
}

export default RightSection;
