import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const FloatingNav = ({ navItems, className }) => {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setVisible(false);
      } else {
        setVisible(currentScrollY < lastScrollY);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Normalize navItems to always be an array of objects
  const normalizedNavItems = navItems.map((item, idx) =>
    typeof item === "string"
      ? {
          name: item,
          link: `#${item.toLowerCase().replace(/\s+/g, "-")}`,
          icon: null,
        }
      : item
  );

  return (
    <div
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50
        transition-all duration-200 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}
        bg-line dark:bg-surface rounded-full shadow-lg px-6 py-3
        flex items-center space-x-4
        ${className}
      `}
    >
      {normalizedNavItems.map((navItem, idx) => (
        <Link
          key={`link-${idx}`}
          to={navItem.link}
          className="text-surface dark:text-gray-200 hover:text-primary dark:hover:text-primary transition cursor-pointer flex items-center space-x-1"
        >
          {navItem.icon && (
            <span className="block sm:hidden">{navItem.icon}</span>
          )}
          <span
            className={`${navItem.icon ? "hidden sm:block" : "block"} text-sm`}
          >
            {navItem.name}
          </span>
        </Link>
      ))}
    </div>
  );
};
