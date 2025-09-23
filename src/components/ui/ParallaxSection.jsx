import React from "react";

const ParallaxSection = ({ imageUrl, children, height }) => {
  return (
    <div
      className={`relative ${height} bg-cover bg-center bg-fixed`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
