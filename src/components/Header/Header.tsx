import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "components/Logo/Logo";
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
      <div className={styles.styledLogo}>
        <Logo />
      </div>
      <div className={styles.feed}>
        {pathname !== "/" ? (
          <Link href="/" passHref>
            <h2>Powrót</h2>
          </Link>
        ) : (
          <h2>Feed</h2>
        )}
        <div className={styles.buttonsContainer}>
          <button className={styles.subscribeButton}>subskrybuj</button>
          <HamburgerIcon onClick={openSideMenu}>X</HamburgerIcon>
        </div>
      </div>
    </header>
  );
};

export default Header;
