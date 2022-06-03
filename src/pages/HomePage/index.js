//components
import ProductCard from "../../components/ProdcutCard";
import Carousel,{ CarouselItem} from "../../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts,getProductCategories } from "../../store/productSlice";
//images
//images 
import image1 from "./../../assets/images-2.jpg"
import image2 from "./../../assets/images-4.jpg"

//styles
import './../../App.css';
import styles from "./Homepage.module.css";

const ViewCategoriesPage = () => {

    const { isLoading, productsData } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getProductCategories());
    }, [dispatch]);

    return (
        <div className={styles["view-category-page"]}>
            <Carousel>
                <CarouselItem content="image">
                        <img src={image1} alt="image1" />
                </CarouselItem>
                <CarouselItem content="image">
                        <img src={image2} alt="image2" />
                </CarouselItem>
            </Carousel>
            <div className="container">
                <h1>New Arrivals</h1>
                <div className={styles["product-section"]}>
                    <Carousel>
                        <CarouselItem>
                            <>
                                {isLoading && <p>Loading...</p>}
                                {!isLoading && productsData?.slice(0, 3).map(product => {
                                    const { id } = product;
                                    return <ProductCard key={id} product={product} badge="New"/>
                                })}
                            </>
                        </CarouselItem>
                        <CarouselItem>
                            <>
                                {!isLoading && productsData?.slice(3, 6).map(product => {
                                    const { id } = product;
                                    return <ProductCard key={id} product={product}  badge="New" />
                                })}
                            </>
                        </CarouselItem>
                        <CarouselItem>
                            <>
                                {!isLoading && productsData?.slice(6, 9).map(product => {
                                    const { id } = product;
                                    return <ProductCard key={id} product={product}  badge="New"/>
                                })}
                            </>
                        </CarouselItem>
                        <CarouselItem>
                            <>
                                {!isLoading && productsData?.slice(9).map(product => {
                                    const { id } = product;
                                    return <ProductCard key={id} product={product} badge="New"/>
                                })}
                            </>
                        </CarouselItem>

                    </Carousel>
                </div>

                <h1>Today's Deals</h1>
                <div className={styles["product-section"]}>
                <Carousel>
                        <CarouselItem>
                            <>
                                {isLoading && <p>Loading...</p>}
                                {!isLoading && productsData?.slice(0, 3).map(product => {
                                    const { id } = product;
                                    return <ProductCard key={id} product={product} badge="Hot"/>
                                })}
                            </>
                        </CarouselItem>
                        <CarouselItem>
                            <>
                                {!isLoading && productsData?.slice(3, 6).map(product => {
                                    const { id } = product;
                                    return <ProductCard key={id} product={product} badge="Hot"/>
                                })}
                            </>
                        </CarouselItem>
                        <CarouselItem>
                            <>
                                {!isLoading && productsData?.slice(6, 9).map(product => {
                                    const { id } = product;
                                    return <ProductCard key={id} product={product} badge="Hot"/>
                                })}
                            </>
                        </CarouselItem>
                        <CarouselItem>
                            <>
                                {!isLoading && productsData?.slice(9).map(product => {
                                    const { id } = product;
                                    return <ProductCard key={id} product={product} badge="Hot"/>
                                })}
                            </>
                        </CarouselItem>

                    </Carousel>
                </div>

                <h1>Category Name</h1>
                <div className={styles["product-section"]}>
                <Carousel>
                        <CarouselItem>
                            <>
                                {isLoading && <p>Loading...</p>}
                                {!isLoading && productsData?.slice(0, 3).map(product => {
                                    const { id } = product;
                                    return <ProductCard key={id} product={product} />
                                })}
                            </>
                        </CarouselItem>
                        <CarouselItem>
                            <>
                                {!isLoading && productsData?.slice(3, 6).map(product => {
                                    const { id } = product;
                                    return <ProductCard key={id} product={product} />
                                })}
                            </>
                        </CarouselItem>
                        <CarouselItem>
                            <>
                                {!isLoading && productsData?.slice(6, 9).map(product => {
                                    const { id } = product;
                                    return <ProductCard key={id} product={product} />
                                })}
                            </>
                        </CarouselItem>
                        <CarouselItem>
                            <>
                                {!isLoading && productsData?.slice(9).map(product => {
                                    const { id } = product;
                                    return <ProductCard key={id} product={product} />
                                })}
                            </>
                        </CarouselItem>

                    </Carousel>
                </div>
            </div>
        </div>
    )
}
 
export default ViewCategoriesPage;