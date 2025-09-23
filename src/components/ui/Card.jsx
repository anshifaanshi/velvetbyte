import React from "react";

const Card = ({ title, description, icon }) => {
  return (
    <div className="relative p-6 bg-black/95 rounded-lg shadow-lg overflow-hidden group border border-primary hover:bg-black/80 transition-all duration-300 cursor-pointer">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/44/66/ab/4466ab764530ff148c63aff0b72183c9.jpg')] bg-cover bg-center opacity-20 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {icon && (
          <div className="text-4xl p-3 bg-gradient-to-r from-black to-primary rounded-full mb-4">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;