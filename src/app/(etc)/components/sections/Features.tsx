import { FullHoverAnimation } from "@/components";
import { FeaturesType } from "@/types/entities";
import { BiBookContent } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { SlEnergy } from "react-icons/sl";
import { VscFeedback } from "react-icons/vsc";
import Feature from "./Feature";

const features: FeaturesType[] = [
  {
    id: 1,
    title: "Full CRUD",
    icon: <SlEnergy color="#FFF" size={24} />,
    description:
      "With Nexca panel you can Create Read Update Delete All your posts, services , ads and more without any coding knowlege",
  },
  {
    id: 2,
    title: "Access All your posts Easily",
    icon: <BiBookContent color="#FFF" size={24} />,
    description:
      "Inside of your panel you can see all your post and be able to modifiy theme. Also you can send any post to anywhere on your site",
  },
  {
    id: 3,
    title: "FeedBack",
    icon: <VscFeedback color="#FFF" size={24} />,
    description:
      "Inside of your panel and see all the idea and feed back of other people about your website where come from contacts page",
  },
  {
    id: 4,
    title: "Services",
    icon: <CgWebsite color="#FFF" size={24} />,
    description:
      "Add Services page for your webiste from your panel and move you post into that.",
  },
];

const Features = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 my-10">
        <div>
          <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
            <h2 className="text-sm font-semibold leading-7 text-blue-100 bg-blue-600 px-2 rounded-lg flex uppercase mb-4 lg:mb-8">
              Key Features
            </h2>
            <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight  text-center">
              Enhanced
              <FullHoverAnimation text="Content Managemnt" />
            </h1>
            <p className="mt-6 text-md  max-w-lg text-center">
              Nexca is your go-to platform for creating powerful admin panels.
              Manage data, share thoughts, and connect with your audience
              easily, whether you're an agency or an individual looking to build
              your brand.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => {
                return <Feature data={feature} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
