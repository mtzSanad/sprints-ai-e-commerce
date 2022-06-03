//react
import { useState } from "react";
import { useSelector } from "react-redux";

//react-router-dom
import { useParams } from "react-router-dom";
import StartsRating from "../../components/StarsRating";

//styles
import './../../App.css';
import styles from "./Productpage.module.css";


const ProductPage = () => {
    const { isLoading, productsData } = useSelector(state => state.product);
    const { productId } = useParams();
    console.log(productsData);
    const { brand, category, description, discountPercentage, images, price, rating, stock, title } = productsData.find(item => item.id === parseInt(productId));
    const initImage = !isLoading ? images[0] : '';
    const [mainImage, setMainImage] = useState(initImage);
    const [quantity, setQuantity] = useState(0);

    const handleImage = (e) => {
        if (e.target.nodeName === "IMG") {
            setMainImage(e.target.getAttribute("src"))
        }
    };

    const incQuantity = () => {
        if (quantity < stock) {
            setQuantity(prev => prev += 1);
        }
    };

    const decQuantity = () => {
        if (quantity > 0) {
            setQuantity(prev => {
                if (prev > 0) {
                    return prev -= 1;
                }
            });
        }
    };

    return (
        <div className={styles["product-page"]}>
            <div className="container">
                {isLoading && <p>Loading...</p>}
                {!isLoading &&
                    <div className={styles.product}>
                        <div className={styles["images-container"]}>
                            <div className={styles.images}
                                onClick={(e) => handleImage(e)}
                            >
                                <div className={styles["sec-img"]}>
                                    <img src={images[0]} alt="product-img" />
                                </div>
                                <div className={styles["sec-img"]}>
                                    <img src={images[1]} alt="product-img" />
                                </div>
                                <div className={styles["sec-img"]}>
                                    <img src={images[2]} alt="product-img" />
                                </div>
                                <div className={styles["sec-img"]}>
                                    <img src={images[3]} alt="product-img" />
                                </div>
                                <div className={styles["sec-img"]}>
                                    <img src={images[4]} alt="product-img" />
                                </div>
                            </div>
                            <div className={styles["main-img"]}>
                                <img src={mainImage} alt="product-img" />
                            </div>
                        </div>

                        <div className={styles["info-container"]}>
                            <h1 className={styles.title}>{title}</h1>
                            <div className={styles["info-review"]}>
                                <StartsRating rating={rating}/>
                                <p className={styles.discount}>{discountPercentage} % off - use code F2F12</p>
                            </div>
                            <div className={styles.category}>
                                <p>{category}</p>
                                <p>{brand}</p>
                            </div>
                            <p className={styles.description}>{description}</p>
                            <p className={styles.price}>$ {price}</p>
                        </div>

                        <div className={styles["buy-info"]}>
                            <p className={styles.price}>${price}</p>
                            <p>Deliver to Egypt</p>
                            {stock > 0 ? <p style={{ color: "green" }}>In the stock</p> : <p style={{ color: "red" }}>out of stock</p>}
                            <p>Qty:
                                <button onClick={incQuantity} className={styles["qtn-btn"]}>+</button>
                                <span>{quantity}</span>
                                <button onClick={decQuantity} className={styles["qtn-btn"]}>-</button>
                            </p>
                            <button className={styles["add-to-cart-btn"]}>Add to cart</button>
                            <button className={styles["buy-btn"]}>Buy</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default ProductPage;