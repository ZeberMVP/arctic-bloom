import { FC } from "react";
import Image from "next/image";
import type { ArticleProps } from "@/components/Article";
import LargeHeading from "@/ui/LargeHeading";
import Link from "next/link";
import Paragraph from "./ui/Paragraph";

interface WhatToReadProps {
  articles: ArticleProps[];
}

const WhatToRead: FC<WhatToReadProps> = ({ articles }) => {
  return (
    <div className="my-16">
      <div className="relative border border-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/eyes.png" alt="Eyes" width={65} height={53} />
        </div>
      </div>
      <LargeHeading className="pt-16 pb-8">What to read next</LargeHeading>
      <div className="md:flex">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="md:w-1/3"
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
            <Paragraph
              size={"lg"}
              className="-mt-10 w-9/12 mx-auto md:text-sm lg:text-base xl:text-lg md:pt-4 lg:pt-2 xl:pt-0"
            >
              {article.title}
            </Paragraph>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WhatToRead;
