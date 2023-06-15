import { FC } from "react";
import type { ArticleProps } from "@/components/Article";
import Image from "next/image";
import Paragraph from "@/ui/Paragraph";
import Link from "next/link";

interface ArticleListProps {
  articles: ArticleProps[];
}

const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="py-8 flex flex-col md:flex-row mx-auto md:flex-wrap lg:w-2/3 xl:w-7/12 2xl:w-5/12">
      {articles.map((article) => {
        return (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="md:w-1/2"
          >
            <div className="relative -mt-6 w-11/12 aspect-square mx-auto">
              <Image
                quality={100}
                className=""
                style={{ objectFit: "contain" }}
                fill
                src={article.image}
                alt="Article' photo"
              />
            </div>
            <Paragraph size={"lg"} className="-mt-10 w-9/12 mx-auto">
              {article.title}
            </Paragraph>
          </Link>
        );
      })}
    </div>
  );
};

export default ArticleList;
