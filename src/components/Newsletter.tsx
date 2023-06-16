import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";

const Newsletter = () => {
  return (
    <div className="flex flex-wrap border-2 py-8 lg:py-20 px-2 border-t-[6px] border-black w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto space-y-6 md:mb-8">
      <LargeHeading className="mx-auto">
        Sign up for the newsletter
      </LargeHeading>
      <Paragraph className="mx-auto">
        If you want relevant updates occasionally, sign up for the private
        newsletter. Your email is never shared.
      </Paragraph>
      <div className="join mx-auto">
        <input
          className="input border-black bg-white placeholder-gray-700 join-item rounded-none"
          placeholder="example@email.com"
        />
        <button className="btn bg-black text-white join-item rounded-none ">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
