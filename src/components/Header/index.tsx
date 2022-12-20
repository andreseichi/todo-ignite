import logoSvg from "../../assets/rocket.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoSvg} alt="Logo" />

      <span>
        to<span>do</span>
      </span>
    </header>
  );
}
