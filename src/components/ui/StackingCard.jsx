import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PortfolioCard = ({
  i,
  title,
  subtitle,
  imageSrc,
  color,
  progress,
  range,
  targetScale,
}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div
      ref={containerRef}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{ scale, backgroundColor: color }}
        className="flex flex-col w-[70%] h-[500px] rounded-xl overflow-hidden shadow-2xl origin-top relative"
      >
        {/* Image */}
        <motion.div
          style={{ scale: imageScale }}
          className="relative w-full aspect-[16/9] overflow-hidden"
        >
          <img
            src={imageSrc}
            alt={title}
            fill="true"
            className="object-cover  w-full h-full"
          />
        </motion.div>

        {/* Text */}
        <div className="flex flex-col justify-center items-start p-6 bg-white dark:bg-[#1f1f1f]">
          <h2 className="text-2xl  text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-muted mt-2">{subtitle}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioCard;
