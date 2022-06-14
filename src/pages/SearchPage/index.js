import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

//components
import ProductCard from "../../components/ProdcutCard";
import Sidebar from "../../components/Sidebar";

//reducer
import { getProducts, getProductCategories, searchProduct } from "../../store/productSlice";

//styles
import './../../App.css';
import styles from "./SearchProduct.module.css";


const SearchPage = () => {
    const { isLoading,productsData, productCategories,searchData} = useSelector(state => state.product);
    const dispatch = useDispatch();
    
    const [searchParam, setSearchParam] = useState("");

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getProductCategories());
    }, [dispatch]);


    const handleSearch = () => {
        dispatch(searchProduct(searchParam));
    };

    const clearSearch = () => {
        setSearchParam("");
        dispatch(searchProduct(""));
    };

    return (
        <div className={`container ${styles["search-page"]}`}>
            <Sidebar categories={productCategories} loading={isLoading} />
            <section className={styles["products"]}>
                <form
                    onSubmit={e => e.preventDefault()}
                    className={styles["search-form"]}
                >
                    <input
                        type="text"
                        placeholder="search product"
                        onChange={e => setSearchParam(e.target.value)}
                        value={searchParam}
                    />
                    <input
                        type="submit"
                        value="search"
                        onClick={handleSearch}
                    />
                </form>
                <button
                    className={styles["clear-btn"]}
                    onClick={clearSearch}
                >
                    Clear
                </button>
                <section className={styles["products-section"]}>
                    {isLoading && <p>Loading...</p>}
                    {!isLoading && searchData.length > 0 &&
                        searchData.map(product => {
                            const { id } = product;
                        return <ProductCard key={id} product={product} />
                        })
                    }
                    {!isLoading && searchData.length === 0 && productsData?.map(product => {
                        const { id } = product;
                        return <ProductCard key={id} product={product} />
                    })}
                </section>
            </section>
        </div>
    );
}
 
export default SearchPage;