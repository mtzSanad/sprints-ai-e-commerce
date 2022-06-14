import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";

//components
import ProductCard from "../../components/ProdcutCard";

//reducer
import { getProducts} from "../../store/productSlice";
import { getAdminData} from "../../store/adminSlice";

//style
import './../../App.css';
import styles from "./AdminPage.module.css";

const initProduct = {
    title: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
    thumb: "",
    description:"",
};

const AdminPage = () => {

    const { isLoading,productsData} = useSelector(state => state.product);
    const { isLoading:load,adminData} = useSelector(state => state.admin);
    const dispatch = useDispatch();

    const [addedProduct, setAddedProduct] = useState(initProduct);

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getAdminData());
    }, [dispatch]);

    const handleAddProduct = (e) => {
        setAddedProduct(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        });
    };

    const addProduct = () => {
        console.log(addedProduct);
        setAddedProduct(initProduct)
    }
    return (
        <div className="container">
            <h1 className={styles["admin-page-title"]}>Dashboard</h1>
            <div className={styles["admin-page"]}>
                <aside className={styles["admin-sidebar"]}>
                    {load && <p>Loading...</p>}
                    {!load && Object.keys(adminData).length > 0 &&
                        <>
                            <div className={styles["profile-img"]}>
                                <img src={adminData.image} alt="profile-img" />
                            </div>
                            <div className={styles["profile-info"]}>
                                <h4>{adminData.firstName}</h4>
                                <p>{adminData.email}</p>
                            </div>
                        </>
                    }
                </aside>
                <section className={styles['admin-products']}>
                    <article className={styles['add-products']}>
                        <div className={styles["add-product"]}>
                            <h4>Add product</h4>
                            <form
                                className={styles["add-product-form"]}
                                onSubmit={e => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder="title"
                                    name="title"
                                    value={addedProduct.title}
                                    onChange={(e) => handleAddProduct(e)}
                                />
                                <input
                                    type="text"
                                    placeholder="brand"
                                    name="brand"
                                    value={addedProduct.brand}
                                    onChange={(e) => handleAddProduct(e)}
                                />
                                <select
                                    name="category"
                                    onChange={(e) => handleAddProduct(e)}
                                >
                                    <option value="smartphone">smartphone</option>
                                    <option value="laptop">laptop</option>
                                    <option value="furniture">furniture</option>
                                    <option value="sunglasses">sunglasses</option>
                                </select>
                                <input
                                    type="number"
                                    placeholder="price"
                                    name="price"
                                    value={addedProduct.price}
                                    onChange={(e) => handleAddProduct(e)}
                                    />
                                <input
                                    type="number"
                                    placeholder="stock"
                                    name="stock"
                                    value={addedProduct.stock}
                                    onChange={(e) => handleAddProduct(e)}
                                    />
                                <input
                                    type="text"
                                    placeholder="thumbnail-link"
                                    name="thumb"
                                    value={addedProduct.thumb}
                                    onChange={(e) => handleAddProduct(e)}
                                />
                                <textarea
                                    placeholder="description"
                                    name="description"
                                    value={addedProduct.description}
                                    onChange={(e) => handleAddProduct(e)}
                                >
                                </textarea>
                            </form>
                        </div>
                        <button
                            onClick={addProduct}
                        >
                            Add
                        </button>
                    </article>
                    <article className={styles['products-section']}>
                        {isLoading && <p>Loading...</p>}
                        {!isLoading && productsData?.map(product => {
                            const { id } = product;
                            return <ProductCard key={id} product={product} admin={true} />
                        })}
                    </article>
                </section>
            </div>
        </div>
    );
}
 
export default AdminPage;