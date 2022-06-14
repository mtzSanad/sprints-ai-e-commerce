import image from "./../../assets/product-4.jpg";
import styles from "./CartItem.module.css";

const CartItem = ({product}) => {
    const {
        price,
        quantity,
        title,
    } = product;
    return (
        <div className={`${styles["cart-item"]} ${styles["grid"]}`}>
            <div className={styles["product-image"]}>
                <img src={image} alt="product" />
            </div>
            <div className={styles["product-title"]}>
                <p>{title}</p>
            </div>
            <div className={styles["product-quantity"]}>
                <button className={styles["minus"]}>-</button>
                <span>{quantity}</span>
                <button className={styles["plus"]}>+</button>
            </div>
            <div className={styles["product-price"]}>
                <p>${price}</p>
            </div>
            <div className={styles["product-remove"]}>
                <button>x</button>
            </div>
        </div>
    );
}
 
export default CartItem;