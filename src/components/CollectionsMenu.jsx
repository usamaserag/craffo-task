import React from "react";
import { motion } from "framer-motion";
import Image_1 from "../assets/navbar_images/heritage-collection.webp";
import Image_2 from "../assets/navbar_images/la-boite-concept.webp";
import Image_3 from "../assets/navbar_images/tom-dixon.webp";

const CollectionsMenu = ({ visible, setCollectionsMenuVisible }) => {
  const explore = [
    { name: "The Heritage Collection" },
    { name: "Sage Collection" },
    { name: "Work From Home" },
    { name: "Stow Collection" },
    { name: "Classic Leather Collection" },
    { name: "Power Delivery Collection" },
  ];

  const collaboration = [
    { name: "Maison Kitsuné" },
    { name: "La Boîte Concept" },
    { name: "Tom Dixon" },
  ];

  const collaborationImages = [
    {
      title: "The Heritage Collection",
      src: Image_1,
    },
    {
      title: "La Boîte Concept",
      src: Image_2,
    },
    {
      title: "Tom Dixon",
      src: Image_3,
    },
  ];

  // Variants for animation
  const menuVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2, // Delay each item
        staggerChildren: 0.1, // Stagger between each item
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
      onMouseEnter={() => setCollectionsMenuVisible(true)}
      onMouseLeave={() => setCollectionsMenuVisible(false)}
    >
      <div className="py-8 px-16">
        <div className="grid gap-4 grid-cols-5">
          <motion.div
            variants={menuItemVariants}
            className="flex flex-col gap-4 col-span-1"
          >
            <b>EXPLORE</b>
            <div className="flex flex-col gap-2">
              {explore.map((item, index) => (
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
            <b>COLLABORATIONS</b>
            <div className="flex flex-col gap-2">
              {collaboration.map((item, index) => (
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
            className="flex flex-col gap-4 col-span-3"
          >
            <div className="grid gap-4 grid-cols-3">
              {collaborationImages.map((item, index) => (
                <motion.div
                  key={index}
                  variants={menuItemVariants}
                  className="flex flex-col items-center gap-2"
                >
                  <div>
                    <img src={item.src} alt="title" />
                  </div>
                  <b>{item.title}</b>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionsMenu;
