import { useState } from "react";
import styles from "./Sidebar.module.css";

const initCat = ['All'];
const Sidebar = ({ categories, loading }) => {

    const [category, setCategory] = useState(initCat);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    
    const handleCategory = (e) => {
        // setCategory(prev => {
        //     return [...prev, e.target.value];
        // })
        if (e.target.checked) {
            setCategory(prev => {
            return [...prev, e.target.value];
        })
        } else {
            setCategory(prev => prev.filter(cat => cat !== e.target.value))
        }
    };

    const handlePriceRange = (e) => {
        e.preventDefault();
        
        console.log(`Range from $${min} to $${max}`);
    }

    return (
        <aside className={styles.sidebar}>
            <div className={styles.department}>
                <h4>Category</h4>
                {
                    category.map((cat,idx) => <span className={styles.category} key={idx}>{cat}</span>)
                }

            </div>

            {/* <div className={styles["customer-review-filter"]}>
                <h4>Customer Reviews</h4>
                <span>stars</span>
                <span>stars</span>
                <span>stars</span>
                <span>stars</span>
            </div> */}
            
            <div className={styles["brand-filter"]}>
                {loading && <p>Loading</p>}
                {categories.length > 0 &&
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className={styles["brand-check"]}>
                            <input
                                type="checkbox"
                                value="All"
                                defaultChecked
                                id="all"
                                onChange={handleCategory}
                                />
                            <label htmlFor="all">All</label>
                        </div>
                        {categories.map((category, idx) => {
                            return (
                                <div className={styles["brand-check"]} key={idx}>
                                    <input
                                        type="checkbox"
                                        value={category}
                                        id={category}
                                        onChange={handleCategory}
                                        />
                                    <label htmlFor={category}>{category}</label>
                                </div>
                            )
                        })}
                    </form>
                }
            </div>

            <div className={styles["price-filter"]}>
                <h4>Price</h4>
                <div className={styles["price-range"]}>
                    <p>Under $500</p>
                    <p>$500 to $600</p>
                    <p>$600 to $700</p>
                    <p>$700 to $800</p>
                    <p>$800 to $1000</p>
                    <p>$1000 & Above</p>
                </div>
                <form onSubmit={handlePriceRange}>
                    <input
                        type="number"
                        placeholder="$min"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="$max"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                    />
                    <input
                        type="submit" value="Go"
                    />
                </form>
            </div>
        </aside>
    );
}
 
export default Sidebar;