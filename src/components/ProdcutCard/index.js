//react-router-dom
import { Link } from "react-router-dom";

import StarsRating from "./../StarsRating";
//style
import styles from "./ProductCard.module.css";


const ProductCard = ({product,badge="",admin=false}) => {
    const { brand, category, id, price, rating, stock, thumbnail, title } = product;
    const badgeStyle = {backgroundColor: badge=== "Hot" ? "crimson" : badge === "New" ? "green" : "orange", display: badge === "" ? "none" : "block" }

    return (
        <div className={styles["product-card"]}>
            <div className={styles["badge"]} style={badgeStyle}>
                {badge}
            </div>
            <div className={styles["product-img"]}>
                <Link to={`/product/${id}`}>
                    <img src={thumbnail} alt="product-img" />
                </Link>
            </div>
            <div className={styles["product-details"]}>
                <div className={styles["product-category"]}>
                    <span className={styles["span"]}>{category}</span>
                    <span className={styles["span"]}>{brand}</span>
                    <StarsRating rating={rating} />
                    <span className={styles["span"]} style={{color:"green"}}>{stock} remains</span>
                </div>
                <Link to={`/product/${id}`}>
                    <h4>{title}</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nostrum.</p>
                </Link>
                <div className={styles["product-btn-details"]}>
                    <div className={styles["product-price"]}>
                        <Link to={`/product/${id}`}>
                            ${price}
                        </Link>
                    </div>
                    <div className={styles["product-link product-add-cart"]}>
                        <button>
                            {!admin && 
                                <Link to="/cart">
                                Add to cart
                            </Link>
                            }
                            {admin && <span>Delete</span>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductCard;