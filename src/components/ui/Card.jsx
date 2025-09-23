import React from "react";

const Card = ({ title, description, icon }) => {
  return (
    <div
      className="relative p-6 bg-gray-900 rounded-lg shadow-lg overflow-hidden group border border-primary"
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center mb-4 gap-3">
          {icon && (
            <div className="text-4xl mb-4 p-2 bg-[linear-gradient(to_right,_#fd7e14,white)] rounded-xl text-black">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;
