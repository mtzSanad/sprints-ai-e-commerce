import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/cartItem";
import { getCart } from "../../store/cartSlice";

import styles from "./CartPage.module.css";

const CartPage = () => {
    
    const { isLoading, cartData } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    console.log(cartData);
    return (
        <div className={`container ${styles["search-page"]}`}>
            <h1 className={styles["cart-title"]}>Cart Page</h1>
            {isLoading && <p>Loading...</p>}
            <div className={styles["cart-container"]}>
                <div className={`${styles["cart-header"]} ${styles["grid"]}`}>
                    <p>Product</p>
                    <p>Description</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Remove</p>
                </div>
                {!isLoading && Object.keys(cartData).length > 0 &&
                    cartData?.products.map(product => {
                        return (
                            <CartItem product={product} key={product.id}/>
                        )
                    })
                }
                <div className={styles["cart-footer"]}>
                    <p>Total</p>
                    <span>$ {cartData.total}</span>
                </div>
                <div className={styles["cart-control"]}>
                    <button>Continue Shopping</button>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    );
}
 
export default CartPage;