import { MouseEvent, useContext } from "react";
import { CategoriesData } from "types/interfaces";
import { Categories } from "types/enum";
// import { CategoryContext } from "pages";
import styles from "./CategoriesMenu.module.scss";

const CategoriesMenu = ({
  categories,
  pickedCategory,
  setPickedCategory,
}: {
  categories: CategoriesData[];
  pickedCategory: string;
  setPickedCategory: Function;
}) => {
  // const { pickedCategory, setPickedCategory } = useContext(CategoryContext);
  const {
    schema: {
      attributes: {
        categoriesCollection: { enum: categoriesArray },
      },
    },
  } = categories[0];
  const handleCategory = (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    setPickedCategory(target.textContent);
  };

  return (
    <ul className={styles.categoriesContainer}>
      <li
        className={
          pickedCategory === Categories.WSZYSTKO
            ? styles.pickedCategory
            : styles.unpickedCategory
        }
        onClick={(event) => handleCategory(event)}
      >
        {Categories.WSZYSTKO}
      </li>
      {categoriesArray.map((category, index) => (
        <li
          key={index}
          className={
            pickedCategory === category
              ? styles.pickedCategory
              : styles.unpickedCategory
          }
          onClick={(event) => handleCategory(event)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesMenu;
