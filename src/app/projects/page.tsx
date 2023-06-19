import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";

export default function Page() {
  return (
    <main className="py-8 md:py-12 lg:py-16 w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto space-y-8 xl:space-y-12">
      <LargeHeading>PROJECTS</LargeHeading>
      <Paragraph className="text-left">
        Here, we showcase a collection of innovative and inspiring projects that
        highlight the cutting-edge advancements and creative applications of
        technology. Each project represents a unique exploration into the realms
        of robotics, artificial intelligence, virtual reality, sustainable tech,
        and more.
      </Paragraph>
      <Paragraph className="text-left">
        Our curated selection of projects encompasses a wide range of
        disciplines and industries, demonstrating the diverse ways in which
        technology is shaping our world. From groundbreaking research
        initiatives to entrepreneurial ventures and community-driven
        initiatives, these projects serve as a testament to the boundless
        possibilities that emerge when technology and creativity converge.
      </Paragraph>
      <Paragraph className="text-left">
        Through detailed project descriptions, captivating visuals, and engaging
        narratives, we aim to provide you with an immersive experience that
        brings these projects to life. Discover how robotics is revolutionizing
        manufacturing processes, how artificial intelligence is transforming
        healthcare, how virtual reality is enhancing education, and how
        sustainable tech is driving positive environmental change.
      </Paragraph>
      <Paragraph className="text-left">
        Whether you&apos;re a technology enthusiast, a curious learner, or a
        professional seeking inspiration, our Projects page offers a wealth of
        ideas and insights to ignite your imagination and spark new
        possibilities. We believe that by showcasing these remarkable projects,
        we can inspire individuals to think differently, challenge conventions,
        and embark on their own transformative journeys.
      </Paragraph>
      <Paragraph className="text-left">
        Explore our Projects page and immerse yourself in the world of
        groundbreaking innovations. Be inspired by the visionaries, the
        pioneers, and the dreamers who are harnessing the power of technology to
        create a better future. Join us on this exciting expedition as we
        celebrate the incredible projects that are shaping our world today and
        paving the way for a brighter tomorrow.
      </Paragraph>
      <Paragraph className="text-left">
        Come and witness the convergence of technology and creativity through
        our carefully curated projects at Artic Bloom. Let&apos;s embark on a
        journey of exploration, inspiration, and transformation together.
      </Paragraph>
      <div className="flex flex-wrap w-11/12 mx-auto text-black ">
        <div className="card bg-white md:w-5/12 shadow-xl mx-auto border border-slate-400 mb-12">
          <figure className="relative aspect-square w-10/12 mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1605673349798-5580680c4dea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybSUyMHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="RoboFarm"
              fill
              priority
              quality={100}
              style={{ objectFit: "contain" }}
            />
          </figure>
          <div className="card-body -mt-12">
            <h2 className="card-title">RoboFarm</h2>
            <p>
              Autonomous agricultural system that utilizes robotics and
              artificial intelligence to revolutionize farming practices.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary px-8 tracking-widest text-black font-bold">
                VISIT
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-white md:w-5/12 shadow-xl mx-auto border border-slate-400 mb-12">
          <figure className="relative aspect-square w-10/12 mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1502185372788-6ff455aa92ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dnIlMjBhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Virtual Muse"
              fill
              priority
              quality={100}
              style={{ objectFit: "contain" }}
            />
          </figure>
          <div className="card-body -mt-12">
            <h2 className="card-title">Virtual Muse</h2>
            <p>
              Virtual reality experience that allows users to explore famous
              museums and art galleries from around the world without leaving
              their homes.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary px-8 tracking-widest text-black font-bold mt-4">
                VISIT
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-white md:w-5/12 shadow-xl mx-auto border border-slate-400 mb-12 md:mb-0">
          <figure className="relative aspect-square w-10/12 mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1528158477878-c8036dc3c31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybSUyMHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="EcoDrone"
              fill
              priority
              quality={100}
              style={{ objectFit: "contain" }}
            />
          </figure>
          <div className="card-body -mt-12">
            <h2 className="card-title">EcoDrone</h2>
            <p>
              Collects data on animal populations, habitat conditions, and
              illegal activities, aiding conservation efforts.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary px-8 tracking-widest text-black font-bold mt-4">
                VISIT
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-white md:w-5/12 shadow-xl mx-auto border border-slate-400">
          <figure className="relative aspect-square w-10/12 mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHJlbmV3YWJsZSUyMGVuZXJneXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="CleanTech"
              fill
              priority
              quality={100}
              style={{ objectFit: "contain" }}
            />
          </figure>
          <div className="card-body -mt-12">
            <h2 className="card-title">CleanTech</h2>
            <p>
              Renewable energy solution that harnesses solar power to generate
              electricity for residential and commercial buildings.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary px-8 tracking-widest text-black font-bold mt-4">
                VISIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
