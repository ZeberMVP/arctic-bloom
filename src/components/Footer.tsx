import Marquee from "react-fast-marquee";
import Paragraph from "@/ui/Paragraph";

const Footer = () => {
  return (
    <footer className="footer md:flex md:flex-col bg-black text-white">
      <Marquee className="tracking-wider py-4 text-xl" autoFill={true}>
        <strong>Robotics&nbsp;&nbsp;</strong>
        <span>Artificial Intelligence&nbsp;&nbsp;</span>
        <strong>Virtual Reality&nbsp;&nbsp;</strong>
        <span>Immersive Experiences&nbsp;&nbsp;</span>
        <strong>Quantum Computing&nbsp;&nbsp;</strong>
        <span>Computational Power&nbsp;&nbsp;</span>
        <strong>Technology&nbsp;&nbsp;</strong>
        <span>Digital Skills&nbsp;&nbsp;</span>
        <strong>Holographic Displays&nbsp;&nbsp;</strong>
        <span>Home Automation&nbsp;&nbsp;</span>
      </Marquee>
      <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-widest font-playfair font-semibold mx-auto">
        ARTIC BLOOM
      </h3>
      <Paragraph
        className="text-white -mt-6 w-2/3 md:w-1/2 lg:w-1/3 mx-auto"
        size={"xs"}
      >
        Unleashing the synergy of technology and creativity at Artic Bloom.
        Explore captivating articles on robotics, virtual reality, sustainable
        tech, and more. Ignite your imagination and join the bloom of knowledge.
      </Paragraph>
      <div className="flex mx-auto space-x-4">
        <a className="link" target="_blank" href="https://github.com/ZeberMVP">
          GitHub
        </a>
        <a
          className="link"
          target="_blank"
          href="https://linkedin.com/in/ruben-zafra"
        >
          LinkedIn
        </a>
        <a
          className="link"
          target="_blank"
          href="https://github.com/ZeberMVP/artic-bloom"
        >
          Repository
        </a>
      </div>
      <Paragraph className="text-whitem mt-6 mx-auto" size={"xs"}>
        © 2002-2023 Artic Bloom Co.
      </Paragraph>
      <Paragraph className="text-white -mt-10 mx-auto" size={"xs"}>
        All rights reserved.
      </Paragraph>
    </footer>
  );
};

export default Footer;
