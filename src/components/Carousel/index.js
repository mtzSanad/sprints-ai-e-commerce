import React, { useState } from "react";


import styles from "./Carousel.module.css";

export const CarouselItem = ({ children, width,content }) => {
    const carouselContentClass = content === "image" ?  styles["img-container"] : styles["product-container"];
    return (
        <div className={styles["carousel-item"]} style={{ width: width }}>
            <div className={carouselContentClass}>
                {children}
            </div>
        </div>
    );
}
 
const Carousel = ({ children}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        };

        setActiveIndex(newIndex);
    };

    return (
        <div className={styles["carousel"]}>
            <div className={styles["inner"]} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"})
                })}
            </div>
            <div className={styles["indicators"]}>
                <button
                    className={styles["indicators-prev"]}
                    onClick={() => updateIndex(activeIndex - 1)}
                >
                    &lt;
                </button>
                <button
                    className={styles["indicators-next"]}
                    onClick={() => updateIndex(activeIndex + 1)}
                >
                    &gt;
                </button>
            </div>
        </div>
    )
}
export default Carousel;