import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Articles, MainDataArticles } from "types/interfaces";
import styles from "styles/Article.module.scss";
import Image from "next/image";
import CategoryTag from "components/CategoryTag/CategoryTag";

const Article: NextPage<{ data: Articles }> = ({ data }) => {
  const {
    attributes: {
      content,
      categories: { categoriesCollection: category },
      title,
      cover: {
        data: {
          attributes: { url: image },
        },
      },
    },
  } = data;

  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <div className={styles.visualisation}>
        <CategoryTag category={category} />
        <Image
          src={`http://localhost:1337${image}`}
          alt="article's visualisation"
          width={500}
          height={500}
        />
      </div>
      <p>{content}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.MAIN_URL}/articles?fields=id`);
  const { data }: MainDataArticles = await response.json();
  const paths = data.map(({ id }) => ({ params: { id: String(id) } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;
  const response = await fetch(
    `${process.env.MAIN_URL}/articles/${id}?populate=*`
  );
  const { data }: MainDataArticles = await response.json();

  return {
    props: { data },
  };
};

export default Article;
