import styles from "./HamburgerIcon.module.scss";

const HamburgerIcon = ({ ...props }) => {
  return (
    <button className={styles.wrapper} {...props}>
      <span className={styles.outerSpan}>
        <span className={styles.innerSpan}></span>
      </span>
    </button>
  );
};

export default HamburgerIcon;
