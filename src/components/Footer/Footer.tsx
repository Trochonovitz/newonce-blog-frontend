import Logo from "components/Logo/Logo";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h2 className={styles.title}>interesuj się.</h2>
      <div className={styles.styledLogo}>
        <Logo />
      </div>
      <div className={styles.downloadSection}>
        <div className={styles.downloadHeader}>
          <p>Pobierz:</p>
        </div>
        <div className={styles.downloadTile}>
          <p>App Store</p>
        </div>
        <div className={styles.downloadTile}>
          <p>Google Play</p>
        </div>
      </div>
      <div className={styles.additionalLinksContainer}>
        <p>Więcej linków od nas</p>
        <ul className={styles.list}>
          <li className={styles.listElement}>Reklama</li>
          <li className={styles.listElement}>Praca</li>
          <li className={styles.listElement}>Polityka prywatności</li>
          <li className={styles.listElement}>FAQ</li>
          <li className={styles.listElement}>newonce.store</li>
        </ul>
      </div>
      <div className={styles.additionalLinksContainer}>
        <p>Aktualnie popularne na newonce</p>
        <ul className={styles.list}>
          <li className={styles.listElement}>netflix</li>
          <li className={styles.listElement}>kendrick lamar</li>
          <li className={styles.listElement}>kryptowaluty</li>
          <li className={styles.listElement}>mata</li>
          <li className={styles.listElement}>ukraina</li>
          <li className={styles.listElement}>wojna w ukrainie</li>
          <li className={styles.listElement}>SBM Label</li>
          <li className={styles.listElement}>NFT</li>
          <li className={styles.listElement}>Sun Festival</li>
          <li className={styles.listElement}>Facebook</li>
          <li className={styles.listElement}>Hotel Maffija</li>
          <li className={styles.listElement}>internet</li>
          <li className={styles.listElement}>tiktok</li>
          <li className={styles.listElement}>Meme</li>
          <li className={styles.listElement}>Śmierć na Nilu</li>
          <li className={styles.listElement}>Skute Bobo</li>
        </ul>
      </div>
      <p className={styles.copyright}>© 2022 newonce</p>
    </footer>
  );
};

export default Footer;
