import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// import Logo from "components/Logo/Logo";
import Logo from "../../../public/icons/logo.svg";
import HamburgerIcon from "components/HamburgerIcon/HamburgerIcon";
import styles from "./Header.module.scss";

const Header = ({
  setNavigationVisibility,
}: {
  setNavigationVisibility: Function;
}) => {
  const { pathname } = useRouter();
  const openSideMenu = () => setNavigationVisibility(true);

  return (
    <header className={styles.wrapper}>
      <span className={styles.styledLogo}>
        <Image src={Logo} width="100%" height="100%" alt="logo" />
      </span>
      <div className={styles.feedContainer}>
        <div className={styles.mobileNavigationContainer}>
          {pathname !== "/" ? (
            <Link href="/" passHref>
              <h2>Powrót</h2>
            </Link>
          ) : (
            <h2>Feed</h2>
          )}
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.subscribeButton}>subskrybuj</button>
          <button className={styles.loginButton}>Zaloguj się</button>
          <HamburgerIcon onClick={openSideMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
