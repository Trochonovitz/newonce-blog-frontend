import { setSideMenu } from "types/types";
import styles from "./Header.module.scss";

const Header = ({ setNavigationVisibility }: setSideMenu) => {
  const openSideMenu = () => setNavigationVisibility(true);

  return (
    <header className={styles.wrapper}>
      <h1 className={styles.logo}>newonce</h1>
      <div className={styles.feed}>
        <h2>Feed</h2>
        <div>
          <button className={styles.subscribeButton}>subskrybuj</button>
          <button onClick={openSideMenu} className={styles.openButton}>
            X
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
