import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const TextWheel = ({color}) => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "Web Development",
      "Web Design",
      "Digital Marketing",
      "Branding",
      "SEO",
      "UI/UX",
      "Graphics",
      "Ecommerce",
      "WordPress",
      "WooCommerce",
      "Creative Ads",
      "Javascript",
      "Google Ads",
      "Figma",
      "HTML",
      "CSS",
    ];

    // Determine radius based on screen size
    const radius =
      window.innerWidth <= 400 ? 120 : window.innerWidth <= 550 ? 120 : 220;

    const options = {
      radius,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    };

    // Initialize TagCloud
    TagCloud(container, texts, options);

    // Adjust font size
    const tagCloudElement = document.querySelector(".tagcloud");
    if (tagCloudElement) {
      tagCloudElement.style.fontSize =
        window.innerWidth <= 400
          ? "8px"
          : window.innerWidth <= 550
          ? "10px"
          : "12px";
    }

    return () => {
      const tagCloudElement = document.querySelector(".tagcloud");
      if (tagCloudElement) tagCloudElement.innerHTML = "";
    };
  }, []);

  return (
    <div
      className={`flex justify-center items-center mx-auto text-${color}`}
      style={{
        height: window.innerWidth <= 640 ? "300px" : "400px",
        maxWidth: "100%",
      }}
    >
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextWheel;
