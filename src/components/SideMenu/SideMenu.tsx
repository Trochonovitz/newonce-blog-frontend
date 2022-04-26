import { Options } from "types/enum";
import styles from "./SideMenu.module.scss";

const SideMenu = ({
  setNavigationVisibility,
}: {
  setNavigationVisibility: Function;
}) => {
  const options = [
    Options.LOGOWANIE,
    Options.CLUB,
    Options.REDAKCJA,
    Options.BAZA_MUZ,
    Options.LISTA_HIT,
    Options.PRACA,
    Options.FEEDBACK,
    Options.PRYWAT,
    Options.REG_1,
    Options.REG_2,
  ];
  const closeSideMenu = () => setNavigationVisibility(false);

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <button onClick={closeSideMenu} className={styles.closeButton}>
          X
        </button>
        {options.map((option, index) => (
          <li className={styles.listElement} key={index}>
            {option}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
