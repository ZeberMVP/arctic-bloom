import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="py-8 space-y-8  max-w-xs sm:max-w-md md:max-w-xl lg:max-w-full lg:w-1/2 mx-auto">
        <LargeHeading>
          Embracing the Technological Revolution: A Journey into the Future
        </LargeHeading>
        <Paragraph>
          Unleashing the Power of Innovation and Discovering Limitless
          Possibilities
        </Paragraph>
      </div>
      <div className="relative -mt-12 w-full md:w-1/2 xl:w-1/3 md:mx-auto aspect-square  ">
        <Image
          priority
          quality={100}
          style={{ objectFit: "contain" }}
          fill
          src="/header.gif"
          alt="header gif"
        />
      </div>
      <div className="border xl:border-2 border-black w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto"></div>
    </div>
  );
};

export default Header;
