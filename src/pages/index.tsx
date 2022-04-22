import type { NextPage } from "next";
import MainTemplate from "templates/MainTemplate/MainTemplate";
import ArticleCard from "components/ArticleCard/ArticleCard";

const Home: NextPage = () => {
  return (
    <MainTemplate>
      <main>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </main>
    </MainTemplate>
  );
};

export default Home;
