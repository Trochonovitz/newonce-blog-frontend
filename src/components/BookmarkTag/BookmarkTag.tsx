import Image from "next/image";
import Bookmark from "../../../public/icons/bookmark.svg";
import styles from "./BookmarkTag.module.scss";

const BookmarkTag = () => {
  return (
    <button className={styles.wrapper}>
      <Image src={Bookmark} alt="bookmark icon" width={20} height={20} />
    </button>
  );
};

export default BookmarkTag;
