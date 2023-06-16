import Image from "next/image";
import { FC } from "react";
import Paragraph from "@/ui/Paragraph";
import { Facebook, Twitter } from "lucide-react";
import LargeHeading from "@/ui/LargeHeading";

export interface ArticleProps {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  sixth: string;
  image: string;
  username: string;
  profilePic: string;
  tag1: string;
  tag2: string;
}

const Article: FC<ArticleProps> = ({
  title,
  subtitle,
  date,
  time,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  image,
  username,
  profilePic,
  tag1,
  tag2,
}) => {
  return (
    <div className="my-8">
      <div className="flex flex-wrap w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto space-x-4 sm:space-x-6 md:mb-8">
        <div className="relative w-20 h-20">
          <Image
            priority
            quality={100}
            className="rounded-full"
            style={{ objectFit: "cover" }}
            fill
            src={profilePic}
            alt="Author's photo"
          />
        </div>
        <div className="w-4/12 py-4">
          <h4 className="text-black font-bold">{username}</h4>

          <Paragraph size={"xs"} className="text-left">
            {date} • {time}
          </Paragraph>
        </div>

        <div className="join py-8 md:py-4 w-11/12 md:w-4/12 mx-auto">
          <button className="btn w-1/2 btn-outline join-item">
            <Facebook color="black" />
          </button>

          <button className="btn w-1/2 btn-outline join-item">
            <Twitter color="black" />
          </button>
        </div>
      </div>
      <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 py-4 space-y-8 mx-auto">
        <Paragraph className="text-left">{first}</Paragraph>

        <Paragraph className="text-left">{second}</Paragraph>

        <LargeHeading size={"sm"}>{title}</LargeHeading>

        <Paragraph className="text-left">{third}</Paragraph>

        <Paragraph className="text-left">{fourth}</Paragraph>

        <div className="relative w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 h-48 md:h-[400px] aspect-square mx-auto">
          <Image
            priority
            quality={100}
            className=""
            style={{ objectFit: "contain" }}
            fill
            src={image}
            alt="Article's photo"
          />
        </div>

        <Paragraph size={"sm"}>{subtitle}</Paragraph>

        <Paragraph className="text-left">{fifth}</Paragraph>

        <Paragraph className="text-left">{sixth}</Paragraph>

        <Paragraph className="text-left">
          Thanks for reading,
          <br />
          {username}
        </Paragraph>
      </div>

      <Paragraph className="text-left py-4 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12">
        Tags: <span className="underline">{tag1}</span>,{" "}
        <span className="underline">{tag2}</span>
      </Paragraph>

      <div className="border border-gray-300 border-dashed my-8 w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto"></div>

      <div className="flex flex-wrap w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto space-x-4 sm:space-x-6">
        <div className="relative w-20 h-20">
          <Image
            priority
            quality={100}
            className="rounded-full"
            style={{ objectFit: "cover" }}
            fill
            src={profilePic}
            alt="Author's photo"
          />
        </div>

        <Paragraph
          size={"xs"}
          className="text-left w-8/12 sm:w-9/12 xl:w-10/12 py-2"
        >
          <span className="font-bold">{username}</span> is an IT Researcher,
          Vienna School of Creative Leadership Executive MBA participant,
          Zipzoom Advisor, Volt Co-founder, and Arctic Bloom Stakeholder.
        </Paragraph>
      </div>
    </div>
  );
};

export default Article;
