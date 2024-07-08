import React from "react";
import { motion } from "framer-motion";
import Iphones from "../assets/navbar_images/iphones.webp";

const DeviceMenu = ({ visible, setDeviceMenuVisible }) => {
  const iPhonesNumber = [
    { name: "iPhone 12 Mini" },
    { name: "iPhone 12" },
    { name: "iPhone 12 Pro" },
    { name: "iPhone 12 Pro Max" },
    { name: "iPhone 11" },
    { name: "iPhone 11 Pro" },
    { name: "iPhone 11 Pro Max" },
    { name: "iPhone XS" },
    { name: "iPhone XS Max" },
  ];

  const macBooks = [
    { name: '12" MacBooks' },
    { name: '13" MacBooks' },
    { name: '15" MacBooks' },
    { name: '16" MacBooks' },
  ];

  const iPad = [
    { name: 'iPad Pro 11"' },
    { name: 'iPad Pro 12.9"' },
    { name: "iPad (7th & 8th Gen)" },
    { name: "iPad Air (4th Gen)" },
  ];

  const airpods = [{ name: "AirPods Pro" }, { name: "AirPods Gen 1 & 2" }];

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
      onMouseEnter={() => setDeviceMenuVisible(true)}
      onMouseLeave={() => setDeviceMenuVisible(false)}
    >
      <div className="py-8 px-16">
        <div className="grid gap-4 grid-cols-5">
          <motion.div
            variants={menuItemVariants}
            className="flex flex-col gap-4 col-span-1"
          >
            <b>IPHONE</b>
            <div className="flex flex-col gap-2">
              {iPhonesNumber.map((item, index) => (
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
            <b>MACBOOKS</b>
            <div className="flex flex-col gap-2">
              {macBooks.map((item, index) => (
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
            <b>IPAD</b>
            <div className="flex flex-col gap-2">
              {iPad.map((item, index) => (
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
            <b>AIRPODS</b>
            <div className="flex flex-col gap-2">
              {airpods.map((item, index) => (
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
            <motion.div variants={menuItemVariants} className="flex flex-col items-center gap-2">
              <div>
                <img src={Iphones} alt="IPHONES" />
              </div>
              <b>IPHONE</b>
              <small className="text-center">
                Explore all iPhone products, from cases to accessories
              </small>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DeviceMenu;
