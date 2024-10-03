import { CollapseType } from "@/types/entities";
import React from "react";
import Collapse from "./Collapse";

const questions: CollapseType[] = [
  {
    id: 1,
    label: "What is Nexca?",
    body: "Nexca is an admin panel designed to help you manage and administer your site. It's built with Next.js, JavaScript, TailwindCSS, and uses MongoDB for the database.",
  },
  {
    id: 2,
    label: "What is the purpose of Nexca?",
    body: "Nexca aims to provide a user-friendly admin panel to efficiently manage and control your website's content and functionalities.",
  },
  {
    id: 3,
    label: "How do I set up Nexca?",
    body: "To set up Nexca, clone the repository, install all  necessary packages, configure the .env file with your environment variables, and then host it to use with your",
  },
  {
    id: 4,
    label: "How do I configure the environment variables?",
    body: "Change the env.sample to env.local then Enter your specific environment variables in the .env file as per your hosting requirements.",
  },
  {
    id: 5,
    label: "What are the system requirements for Nexca?",
    body: "You need Node.js installed on your system to run Nexca, along with a MongoDB database instance.",
  },
];

const FQAs: React.FC = () => {
  return (
    <>
      <section className="sm:py-10  bg-indigo-800 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative py-16 px-8 bg-indigo overflow-hidden rounded-3xl">
            <div className="relative z-10 md:max-w-7xl mx-auto">
              <div className="mb-10">
                <span className="inline-block mb-5 text-md text-mygray font-bold uppercase tracking-widest">
                  Frequently asked questions
                </span>
                <h2 className="font-heading text-mygray text-4xl lg:text-5xl font-bold font-heading">
                  Got questions? We are here to help!
                </h2>
              </div>
              <div className="flex flex-wrap -m-3">
                <div className="join join-vertical w-full my-10">
                  {questions.map((question) => (
                    <Collapse data={question} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FQAs;
