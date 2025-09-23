import React from "react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({
  title,
  description,
  icon,
  image,
  linkText = "Learn more",
  linkHref = "#",
}) => {
  return (
    <div className="w-full h-[480px] group mx-auto dark:bg-black bg-white border dark:border-0 overflow-hidden rounded-md dark:text-white text-black shadow-lg transition-all duration-300 cursor-pointer">
      {/* Image Section */}
      <figure className="w-full h-80 group-hover:h-72 transition-all duration-300 dark:bg-[#0a121a] bg-[#f0f5fa] p-2 rounded-md relative overflow-hidden">
        {/* Gradient overlay */}
        <div
          style={{
            background:
              "linear-gradient(123.9deg, #411d00 1.52%, rgba(0, 0, 0, 0) 68.91%)",
          }}
          className="absolute top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 transition-all duration-300"
        ></div>

        {/* Image (optional) */}
        {image && (
          <img
            src={image}
            alt={title}
            width={600}
            height={600}
            className="absolute -bottom-1 group-hover:-bottom-5 right-0 h-64 w-[80%] group-hover:border-4 border-4 group-hover:border-black rounded-lg object-cover transition-all duration-300"
          />
        )}
      </figure>

      {/* Text Content */}
      <article className="p-4 space-y-2 text-left">
        {icon && (
          <div className="text-3xl p-2 bg-primary text-white rounded-md inline-flex items-center justify-center">
            {icon}
          </div>
        )}

        <h1 className="text-xl font-semibold capitalize">{title}</h1>
        <p className="text-muted leading-[120%]">{description}</p>

        {/* Link */}
        <Link
          to={linkHref}
          className="text-base text-primary font-medium flex gap-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          {linkText}
          <MoveRight  className="ml-2"/>
        </Link>
      </article>
    </div>
  );
};

export default Card;
