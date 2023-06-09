import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Categories } from "types/enum";
import {
  MainDataArticles,
  MainDataCategories,
  Articles,
  CategoriesData,
} from "types/interfaces";
import ArticleCard from "components/ArticleCard/ArticleCard";
import CategoriesMenu from "components/CategoriesMenu/CategoriesMenu";
import styles from "styles/Home.module.scss";

// export const CategoryContext = createContext({
//   pickedCategory: "",
//   setPickedCategory: () => void,
// });

const Home: NextPage<{
  articles: Articles[];
  categories: CategoriesData[];
}> = ({ articles, categories }) => {
  const [pickedCategory, setPickedCategory] = useState(Categories.WSZYSTKO);
  const { pathname } = useRouter();
  // filtrowanie contentu będzie odbywało się poprzez przechodzenie po linkach
  const filteredContent =
    pickedCategory === Categories.WSZYSTKO
      ? articles
      : articles.filter(
          ({
            attributes: {
              categories: { categoriesCollection },
            },
          }) => categoriesCollection === pickedCategory
        );

  return (
    // <CategoryContext.Provider value={{ pickedCategory, setPickedCategory }}>
    <>
      {pathname === "/" && (
        <CategoriesMenu
          categories={categories}
          pickedCategory={pickedCategory}
          setPickedCategory={setPickedCategory}
        />
      )}
      {/* maina wyciągnąć do osobnego componentu i podawać tablicę jako props? Albo filtrować w środku */}
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Najnowsze</h1>
        {!filteredContent.length
          ? "nic tu nie ma"
          : filteredContent.map(
              ({
                id,
                attributes: {
                  title,
                  categories: { categoriesCollection: category },
                  cover: {
                    data: {
                      attributes: { url },
                    },
                  },
                },
              }) => (
                <ArticleCard
                  key={id}
                  id={id.toString()}
                  title={title}
                  category={category}
                  image={url}
                />
              )
            )}
      </main>
    </>
    // </CategoryContext.Provider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articlesResponse = await fetch(
    `${process.env.MAIN_URL}/articles?populate=*`
  );
  const categoriesResponse = await fetch(
    `${process.env.MAIN_URL}/content-type-builder/components`
  );
  const { data: articles }: MainDataArticles = await articlesResponse.json();
  const { data: categories }: MainDataCategories =
    await categoriesResponse.json();
  return {
    props: {
      articles,
      categories,
    },
  };
};

export default Home;
