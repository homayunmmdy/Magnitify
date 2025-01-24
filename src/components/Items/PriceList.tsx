'use client'
import { PriceItemDate } from "@/config/data";
import { motion, useInView } from "framer-motion";
import React from "react";
import PriceItem from "./PriceItem";

const PriceList: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleRef = React.useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          <motion.h2
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 text-4xl font-bold tracking-tight"
          >
            Pay once, use forever
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8 md:grid-cols-3 lg:grid lg:gap-10 lg:space-y-0"
        >
          {PriceItemDate.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PriceItem item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PriceList;
