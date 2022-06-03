import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BrandForm.module.css";
import { useDispatch } from "react-redux";
import { addBrandThunk } from "../../store/brand-slice";

const BrandForm = () => {
  const dispatch = useDispatch();
  const [isValidForm, setIsValidForm] = useState(true);
  const [formData, setFormData] = useState({
    brandName: "",
    brandImage: "",
    brandColor: "black",
  });

  //Navigation
  const navigate = useNavigate();

  const brandAddHandler = (e) => {
    e.preventDefault();
    dispatch(addBrandThunk({ ...formData, brandId: Math.random().toString() }));
    alert(JSON.stringify({ formData }, null, 2));
  };

  const brandDeleteHandler = (e) => {
    e.preventDefault();
    setIsValidForm(!isValidForm);
  };

  const elementChangeHandler = (e) => {
    e.preventDefault();
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const navigateHandler = (e) => {
    e.preventDefault();
    navigate("/brand/4", { replace: true }); // if need to replace the current url
    // navigate(-1) //return to previous or -2 or 1 to forward
  };
  return (
    <div className="container">
      <form className={styles.form}>
        <input
          className={`${styles.element} ${!isValidForm ? styles.invalid : ""}`}
          name="brandName"
          placeholder="Brand Name"
          type="text"
          onChange={elementChangeHandler}
          value={formData.brandName}
        />
        <input
          className={styles.element}
          name="brandImage"
          placeholder="Brand Image URL"
          type="text"
          onChange={elementChangeHandler}
          value={formData.brandImage}
        />
        <select
          className={styles.element}
          name="brandColor"
          onChange={elementChangeHandler}
          value={formData.brandColor}
        >
          <option value="red">Red</option>
          <option value="black">Black</option>
          <option value="green">Green</option>
        </select>
        <input
          className={styles["btn-sp"]}
          type="button"
          name="brand-add"
          onClick={brandAddHandler}
          value="Add"
        />
        <input
          className={styles["btn-sp"]}
          type="button"
          name="brand-delete"
          onClick={brandDeleteHandler}
          value="Invalidate/Validate Form Dynamic Style"
        />

        <input
          className={styles["btn-sp"]}
          type="button"
          name="brand-navigate"
          onClick={navigateHandler}
          value="Prgramatic Navigation"
        />
      </form>
    </div>
  );
};

export default BrandForm;
