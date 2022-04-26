import Image from "next/image";
import CategoryTag from "components/CategoryTag/CategoryTag";
import styles from "./ArticleCard.module.scss";
import Link from "next/link";
import BookmarkTag from "components/BookmarkTag/BookmarkTag";

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
        alt="article's visualisation"
        width="100%"
        height="100%"
      />
      <BookmarkTag />
      <div className={styles.infoBox}>
        <CategoryTag category={category} />
        <Link href={`http://localhost:3000/${id}`}>
          <a>
            <h3 className={styles.title}>{title}</h3>
          </a>
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
