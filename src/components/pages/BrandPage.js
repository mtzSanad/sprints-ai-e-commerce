import BrandForm from "../brand/BrandForm";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBrandListThunk } from "../../store/brand-slice";

const BrandPage = () => {
  const dispatch = useDispatch();
  const brandList = useSelector((state) => {
    return state.brand;
  });

  useEffect(() => {
    dispatch(getBrandListThunk());
  }, []);

  return (
    <>
      <BrandForm />
      <div className="brand-list">
        {brandList.map &&
          brandList.map((brand) => (
            <div key={brand.brandId}>{JSON.stringify(brand, null, 2)}</div>
          ))}
      </div>
    </>
  );
};

export default BrandPage;
