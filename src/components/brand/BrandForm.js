import { useState } from "react";
import styles from "./BrandForm.module.css";

const BrandForm = () => {
  const [isValidForm, setIsValidForm] = useState(true);
  const [formData, setFormData] = useState({
    brandName: "",
    brandImage: "",
    brandColor: "black",
  });

  const brandAddHandler = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
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
      </form>
    </div>
  );
};

export default BrandForm;
