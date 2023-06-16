"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import data from "@/articles/articles.json";
import Article from "@/components/Article";
import WhatToRead from "@/components/WhatToRead";
import type { ArticleProps } from "@/components/Article";

const ArticlePage = () => {
  const params = useParams();
  const { id } = params;
  const article = data.find((article) => String(article.id) === id);

  if (!article) {
    notFound();
  }

  const [randomArticles, setRandomArticles] = useState([] as ArticleProps[]);

  useEffect(() => {
    const articles = [...data];

    const getRandomNumber = (
      min: number,
      max: number,
      exclude: number
    ): number => {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (randomNumber === exclude) {
        randomNumber = (randomNumber + 1) % (max + 1);
      }
      return randomNumber;
    };

    const randomIndices: number[] = [];
    while (randomIndices.length < 3) {
      const randomIndex = getRandomNumber(1, 10, article.id);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    const newRandomArticles = randomIndices.map((index) => articles[index - 1]);
    setRandomArticles(newRandomArticles);
  }, [article.id]);

  return (
    <main className="py-8">
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
      <WhatToRead articles={randomArticles} />
    </main>
  );
};

export default ArticlePage;
