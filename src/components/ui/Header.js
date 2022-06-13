import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
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
          <NavLink
            to="/search"
            className={(navStatus) => (navStatus.isActive ? styles.active : "")}
          >
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={(navStatus) => (navStatus.isActive ? styles.active : "")}
          >
            Cart
          </NavLink>
        </li>
        <li>
          <a href="#" className={styles.btn}>
            Sign out
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
