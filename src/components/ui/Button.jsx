import { MoveRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Button = ({ theme = "black", text, onClick }) => {
  const isBlackTheme = theme === "black";

  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-center px-6 py-2 text-md  transition-all duration-300 cursor-pointer border-2 rounded-tl-xl rounded-br-xl 
        ${
          isBlackTheme
            ? "bg-black text-white border-white hover:bg-white hover:text-black"
            : "bg-white text-black border-black hover:bg-black hover:text-white"
        }`}
    >
      {text}
      <motion.span
        className="inline-block ml-4 group-hover:translate-x-1 transition"
        transition={{ type: "spring", stiffness: 300 }}
      >
        <MoveRight />
      </motion.span>
    </button>
  );
};

export default Button;
