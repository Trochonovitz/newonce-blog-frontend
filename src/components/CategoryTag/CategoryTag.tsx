import styles from "./CategoryTag.module.scss";

const CategoryTag = ({ category }: { category: string }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{category}</p>
    </div>
  );
};

export default CategoryTag;
