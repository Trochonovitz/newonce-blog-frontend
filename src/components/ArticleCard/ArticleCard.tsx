import Image from "next/image";
import Link from "next/link";
import CategoryTag from "components/CategoryTag/CategoryTag";
import BookmarkTag from "components/BookmarkTag/BookmarkTag";
import styles from "./ArticleCard.module.scss";

const ArticleCard = ({
  title,
  category,
  image,
  id,
}: {
  title: string;
  image: string;
  category: string;
  id: string;
}) => {
  return (
    <article className={styles.wrapper}>
      <Image
        src={`http://localhost:1337${image}`}
        alt={title}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="cover"
      />
      <BookmarkTag />
      <div className={styles.infoBox}>
        <CategoryTag category={category} />
        <Link href={`http://localhost:3000/article/${id}`} passHref>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <div className={styles.subtitleBox}>
          <p className={styles.author}>Karina Lahrimowicz</p>
          <p className={styles.time}>6 godzin temu</p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
