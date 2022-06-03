import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.auth.userName);

  const signInHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.setUserName());
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>e-Commerce</div>
      <ul className={styles.ul}>
        <li>
          <NavLink
            to="/"
            className={(navStatus) => (navStatus.isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/brand"
            className={(navStatus) => (navStatus.isActive ? styles.active : "")}
          >
            Brand Form
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/brand/1"
            className={(navStatus) => (navStatus.isActive ? styles.active : "")}
          >
            Brand Details
          </NavLink>
        </li>
        <li>
          <a href="#" className={styles.btn} onClick={signInHandler}>
            {userName ? `Sign out ${userName}` : "Sign in"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
