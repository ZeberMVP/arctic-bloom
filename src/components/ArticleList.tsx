import { FC } from "react";
import type { ArticleProps } from "@/components/Article";

interface ArticleListProps {
  articles: ArticleProps[];
}

const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return <div>Article List</div>;
};

export default ArticleList;
