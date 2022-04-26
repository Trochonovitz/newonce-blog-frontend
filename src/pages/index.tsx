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
import MainTemplate from "templates/MainTemplate/MainTemplate";
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
    <MainTemplate>
      {pathname === "/" && (
        <CategoriesMenu
          categories={categories}
          pickedCategory={pickedCategory}
          setPickedCategory={setPickedCategory}
        />
      )}
      {/* maina wyciągnąć do osobnego componentu i podawać tablicę jako props? Albo filtrować w środku */}
      <main className={styles.wrapper}>
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
    </MainTemplate>
    // </CategoryContext.Provider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articlesResponse = await fetch(
    "http://localhost:1337/api/articles?populate=*"
  );
  const categoriesResponse = await fetch(
    "http://localhost:1337/api/content-type-builder/components"
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
