import styles from  "./StarsRating.module.css"

const Stars = ({rating}) => {

    let rateCount = Math.ceil(rating) > 5 ? 5 : Math.ceil(rating);
    return (
        <div className={styles["star-rating"]}>
        {[...Array(5)].map((star, idx) => {
            rateCount--;
            return (
            <button
              type="button"
              key={idx}
              className={rateCount >= 0 ? styles["btn on"] : styles["btn off"]}
            >
              <span className={styles.star}>&#9733;</span>
            </button>
            );
        })}
      </div>
    );
}
 
export default Stars;

/*
        <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "btn on" : "btn off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
*/