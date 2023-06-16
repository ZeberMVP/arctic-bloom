import ArticleList from "@/components/ArticleList";
import type { Metadata } from "next";
import data from "@/articles/articles.json";
import LargeHeading from "@/ui/LargeHeading";

export const metadata: Metadata = {
  title: "Arctic Bloom | Blog",
  description:
    "Embracing the Technological Revolution: A Journey into the Future",
};

export default function Home() {
  const articles = [...data];

  return (
    <main className="min-h-[100rem] py-8 bg-white">
      <LargeHeading>All articles</LargeHeading>
      <ArticleList articles={articles} />
    </main>
  );
}
