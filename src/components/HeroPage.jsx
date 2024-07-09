import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import Image_1 from "../assets/navbar_images/heritage-collection.webp";
import Image_2 from "../assets/slide_images/jump-mobile.webp";
import Image_3 from "../assets/slide_images/mk-lp-tile-1-mobile.webp";
import Image_4 from "../assets/slide_images/sage1-mobile.webp";
import Image_5 from "../assets/slide_images/tom-dixon-lp-tile-1-mobile.webp";
import { motion } from "framer-motion";

const slideVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// Slide data
const sliderImages = [
  {
    title: "PREMIUM COLLECTION",
    text: ["The", "Heritage", "Collection"],
    image: Image_1,
    textButton: ["LEARN MORE", "SHOP"],
  },
  {
    title: "MEET THE",
    text: ["SAGE", "COLLECTION"],
    image: Image_2,
    textButton: ["LEARN MORE"],
  },
  {
    title: "Collaboration",
    text: ["Native", "Union x", "Tom Dixon"],
    image: Image_3,
    textButton: ["LEARN MORE"],
  },
  {
    title: "CHARGE ANYWHERE, ANYTIME",
    text: ["New", "Jump+", "Powerbank"],
    image: Image_4,
    textButton: ["SHOP JUMP+"],
  },
  {
    title: "NEW IN",
    text: ["The", "Maison", "Kitsuné", "Collab"],
    image: Image_5,
    textButton: ["LEARN MORE"],
  },
];

const HeroPage = () => {
  const [swiper, setSwiper] = useState(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleProgress = () => {
    if (swiper) {
      const swiperProgress =
        (swiper.realIndex / (sliderImages.length - 1)) * 100;
      setProgress(swiperProgress);
      setActiveIndex(swiper.realIndex);
    }
  };

  const bulletStyles = {
    width: `${progress}%`,
    height: "100%",
    background: "#3182CE",
    position: "absolute",
    bottom: 0,
    left: 0,
    transition: "width 0.3s ease",
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"><div style="${bulletStyles}"></div></span>`;
    },
  };

  return (
    <div>
      <Swiper
        modules={[EffectCreative, Autoplay, Pagination]}
        pagination={pagination}
        onSwiper={setSwiper}
        onSlideChange={handleProgress}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
        loop={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        style={{ height: "calc(100vh - 80px)" }}
      >
        {sliderImages.map((item, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative h-full">
              <img
                src={item.image}
                alt={`Image_${index + 1}`}
                className="w-full h-full object-cover"
              />
              <motion.div
                key={activeIndex} // Force re-render on slide change
                className={`absolute inset-0 flex px-6 ${
                  index % 2 !== 0 ? "justify-center" : "justify-start"
                } items-center text-white`}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
              >
                <div
                  className={`flex flex-col gap-6 ${
                    index % 2 !== 0 ? "items-center" : "items-start"
                  }`}
                >
                  <motion.h3 className="font-bold">{item.title}</motion.h3>
                  <motion.div
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                    className={`flex sm:flex-row sm:gap-4 flex-col gap-1 ${
                      index % 2 !== 0 ? "items-center" : "items-start"
                    }`}
                  >
                    {item.text.map((word, idx) => (
                      <motion.span
                        key={idx}
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.2 * idx}
                        className="text-5xl"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.div>
                  <div className="flex items-center gap-8">
                    {item.textButton.map((text, i) => (
                      <motion.button
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0.2 * i}
                        key={i}
                        className="bg-button_bg text-black px-6 py-4"
                      >
                        {text}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroPage;
