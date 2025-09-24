import { MoveRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Button = ({ theme = "black", text, onClick, type, width }) => {
  const isBlackTheme = theme === "black";

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`group flex ${width === "full" ? "w-full" : ""} items-center justify-center px-8 py-3 text-lg  transition-all duration-300 cursor-pointer border-2 rounded-tl-xl rounded-br-xl relative 
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
