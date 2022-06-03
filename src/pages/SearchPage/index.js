//components
import ProductCard from "../../components/ProdcutCard";
import Sidebar from "../../components/Sidebar";

import { useDispatch, useSelector } from "react-redux";

import './../../App.css';
import styles from "./SearchProduct.module.css";

import { useEffect } from "react";
import { getProducts,getProductCategories } from "../../store/productSlice";

const SearchPage = () => {
    const { isLoading,productsData, productCategories} = useSelector(state => state.product);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProducts());
        dispatch(getProductCategories());
    }, [dispatch]);
    



    return (
        <div className={`container ${styles["search-page"]}`}>
            <Sidebar categories={productCategories} loading={isLoading}/>
            <section className={styles["products-section"]}>
                {isLoading && <p>Loading...</p>}
                {!isLoading && productsData?.map(product => {
                    const { id } = product;
                    return <ProductCard key={id} product={product} />
                })}
            </section>
        </div>
    );
}
 
export default SearchPage;