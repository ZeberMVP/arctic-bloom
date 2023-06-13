import Image from "next/image";
import { FC } from "react";
import Paragraph from "@/ui/Paragraph";
import { Facebook, Twitter } from "lucide-react";
import LargeHeading from "./ui/LargeHeading";

export interface ArticleProps {
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
    <div>
      <div>
        <Image
          priority
          quality={100}
          className=""
          style={{ objectFit: "contain" }}
          fill
          src={profilePic}
          alt="Author's photo"
        />

        <h4>{username}</h4>

        <Paragraph size={"sm"}>
          {date} • {time}
        </Paragraph>

        <div className="join">
          <button className="btn btn-outline join-item">
            <Facebook />
          </button>

          <button className="btn btn-outlinejoin-item">
            <Twitter />
          </button>
        </div>
      </div>

      <Paragraph>{first}</Paragraph>

      <Paragraph>{second}</Paragraph>

      <LargeHeading size={"sm"}>{title}</LargeHeading>

      <Paragraph>{third}</Paragraph>

      <Paragraph>{fourth}</Paragraph>

      <Image
        priority
        quality={100}
        className=""
        style={{ objectFit: "contain" }}
        fill
        src={image}
        alt="Article's photo"
      />

      <Paragraph size={"sm"}>{subtitle}</Paragraph>

      <Paragraph>{fifth}</Paragraph>

      <Paragraph>{sixth}</Paragraph>

      <Paragraph>
        Thanks for reading,
        <br />
        {username}
      </Paragraph>

      <div className="join">
        <button className="btn btn-outline join-item">
          <Facebook />
          <Paragraph size={"sm"}>Share on Facebook</Paragraph>
        </button>

        <button className="btn btn-outlinejoin-item">
          <Twitter />
          <Paragraph size={"sm"}>Share on Twitter</Paragraph>
        </button>
      </div>

      <Paragraph size={"sm"}>
        Tags: <span className="underline">{tag1}</span>,{" "}
        <span className="underline">{tag2}</span>
      </Paragraph>

      <div className="border border-gray-300 border-dashed w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto"></div>

      <div>
        <Image
          priority
          quality={100}
          className=""
          style={{ objectFit: "contain" }}
          fill
          src={profilePic}
          alt="Author's photo"
        />

        <Paragraph size={"sm"}>
          <span className="font-bold">{username}</span> is an IT Researcher,
          Vienna School of Creative Leadership Executive MBA participant,
          Zipzoom Advisor, Volt Co-founder, and Artic Bloom Stakeholder.
        </Paragraph>
      </div>
    </div>
  );
};

export default Article;
