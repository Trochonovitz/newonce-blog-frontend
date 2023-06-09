import styles from "./CategoryTag.module.scss";

const CategoryTag = ({ category, ...props }: { category: string }) => {
  return (
    <div className={styles.wrapper} {...props}>
      <p className={styles.title}>{category}</p>
    </div>
  );
};

export default CategoryTag;
