import React from "react";
import { motion } from "framer-motion";
import iphoneCases from "../assets/navbar_images/iphone-cases.webp";
import wirelessChargers from "../assets/navbar_images/wireless-chargers.webp";
import bundles from "../assets/navbar_images/bundles.jpg";

const CategoryMenu = ({ visible, setCategoryMenuVisible }) => {
  const protectAndCarry = [
    { name: "iPhone Cases" },
    { name: "AirPods Cases" },
    { name: "Sleeves" },
    { name: "Accessories" },
  ];

  const cables = [
    { name: "USB-A" },
    { name: "USB-C" },
    { name: "Lightning" },
    { name: "Apple Watch" },
    { name: "View All" },
  ];

  const categoryImages = [
    {
      title: "IPHONE CASES",
      text: "Give your iPhone one-of-a-kind character",
      src: iphoneCases,
    },
    {
      title: "CHARGERS",
      text: "Solutions to power all your tech",
      src: wirelessChargers,
    },
    {
      title: "BUNDLES",
      text: "Our essentials at a reduced price",
      src: bundles,
    },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={menuVariants}
      className="absolute top-20 left-0 w-full max-h-fit bg-white z-50 shadow-md"
      onMouseEnter={() => setCategoryMenuVisible(true)}
      onMouseLeave={() => setCategoryMenuVisible(false)}
    >
      <div className="py-8 px-16">
        <div className="grid gap-4 grid-cols-4">
          <motion.div
            variants={menuItemVariants}
            className="flex flex-col gap-4 col-span-1"
          >
            <b>PROTECT & CARRY</b>
            <div className="flex flex-col gap-2">
              {protectAndCarry.map((item, index) => (
                <motion.p
                  key={index}
                  variants={menuItemVariants}
                  className="cursor-pointer"
                >
                  {item.name}
                </motion.p>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={menuItemVariants}
            className="flex flex-col gap-4 col-span-1"
          >
            <b>CABLES</b>
            <div className="flex flex-col gap-2">
              {cables.map((item, index) => (
                <motion.p
                  key={index}
                  variants={menuItemVariants}
                  className="cursor-pointer"
                >
                  {item.name}
                </motion.p>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={menuItemVariants}
            className="col-span-2 grid gap-4 grid-cols-3"
          >
            {categoryImages.map((item, index) => (
              <motion.div
                key={index}
                variants={menuItemVariants}
                className="flex flex-col items-center gap-2"
              >
                <div className="overflow-hidden cursor-pointer">
                  <img className="hover:scale-110 duration-500 ease-in-out" src={item.src} alt="title" />
                </div>
                <b>{item.title}</b>
                <p className="text-center">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryMenu;
