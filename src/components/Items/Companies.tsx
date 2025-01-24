"use client"
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiClerk, SiMongodb, SiVercel } from "react-icons/si";
import { motion } from "framer-motion";
import React from 'react';

const Companies: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 rounded-xl shadow-xl py-8 md:py-12 lg:py-28 m-4 border-2 border-indigo-400 hover:border-indigo-700">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Companies
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 py-5">
            The list of the companies that we work to make this happen
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
        >
          {[
            {
              Icon: RiNextjsFill,
              title: "Next.js",
              description: "App dir, Routing, Layouts, Loading UI and API routes."
            },
            {
              Icon: FaReact,
              title: "React",
              description: "Server and Client Components. Use hook."
            },
            {
              Icon: SiMongodb,
              title: "Database",
              description: "We Use mongodb to save your data"
            },
            {
              Icon: RiTailwindCssFill,
              title: "Style",
              description: "we are using the tailwind css and daisyui to give you website nice look for each components and themes"
            },
            {
              Icon: SiClerk,
              title: "Authentication",
              description: "Authentication using Clerk to have safe and beautiful style"
            },
            {
              Icon: SiVercel,
              title: "Hosting",
              description: "For hosting we handle you hosting with free hobby plan of the vercel but If you want more you must pay based on vercel"
            }
          ].map((company, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative overflow-hidden rounded-lg border select-none hover:shadow hover:shadow-indigo-800 p-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <company.Icon className="h-12 w-12 fill-current" />
                <div className="space-y-2">
                  <h3 className="font-bold">{company.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {company.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Companies;
