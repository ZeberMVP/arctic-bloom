"use client";

import { useParams, notFound } from "next/navigation";
import data from "@/articles/articles.json";
import Article from "@/components/Article";

const ArticlePage = () => {
  const params = useParams();

  const { id } = params;

  const article = data.find((article) => String(article.id) === id);

  if (!article) {
    notFound();
  }

  return (
    <Article
      id={article.id}
      title={article.title}
      subtitle={article.subtitle}
      date={article.date}
      time={article.time}
      first={article.first}
      second={article.second}
      third={article.third}
      fourth={article.fourth}
      fifth={article.fifth}
      sixth={article.sixth}
      image={article.image}
      username={article.username}
      profilePic={article.profilePic}
      tag1={article.tag1}
      tag2={article.tag2}
    />
  );
};

export default ArticlePage;
