import { ReactNode } from "react";
import Image from "next/image";
import Feed from "../../../public/icons/feed.svg";
import Mic from "../../../public/icons/mic.svg";
import Radio from "../../../public/icons/radio.svg";
import Search from "../../../public/icons/search.svg";
import User from "../../../public/icons/user.svg";
import SideMenu from "components/SideMenu/SideMenu";
import styles from "./Navigation.module.scss";

const Navigation = ({
  children,
  navigationVisibility,
  setNavigationVisibility,
}: {
  children: ReactNode;
  navigationVisibility: boolean;
  setNavigationVisibility: Function;
}) => {
  return (
    <>
      {navigationVisibility && (
        <SideMenu setNavigationVisibility={setNavigationVisibility} />
      )}
      {children}
      <section className={styles.down}>
        <div className={styles.downElement}>
          <Image src={Feed} alt="feed icon" />
          <p className={styles.description}>Feed</p>
        </div>
        <div className={styles.downElement}>
          <Image src={Radio} alt="microphone icon" />
          <p className={styles.description}>Radio</p>
        </div>
        <div className={styles.downElement}>
          <Image src={Mic} alt="radio icon" />
          <p className={styles.description}>Podcasty</p>
        </div>
        <div className={styles.downElement}>
          <Image src={Search} alt="search icon" />
          <p className={styles.description}>Szukaj</p>
        </div>
        <div className={styles.downElement}>
          <Image src={User} alt="account user icon" />
          <p className={styles.description}>Mój profil</p>
        </div>
      </section>
    </>
  );
};

export default Navigation;
