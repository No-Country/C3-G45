import React from 'react';

// import styles from './CartItem.module.scss';
const styles = {}

const CartItem = ({ item, removeFromCart }) => {
  const { id, title, price, count } = item;
  return (
    <div className={styles.cartItem}>
      <img src="https://images-na.ssl-images-amazon.com/images/I/71U0W%2BX6-0L._AC_SL1500_.jpg" alt="item" />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{title}</span>
        <span className={styles.price}>
          {price} x {count}
        </span>
      </div>
      <div className={styles.removeButton}>
        <button onClick={() => removeFromCart(id)}>&#10005;</button>
      </div>
    </div>
  );
}

export default CartItem;
