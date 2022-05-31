import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>e-Commerce</div>
      <ul className={styles.ul}>
        <li>
          <a href="#">Link A</a>
        </li>
        <li>
          <a href="#">Link B</a>
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
