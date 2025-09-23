import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./Home.css";

const images = [
  "https://i.postimg.cc/SQVBhD3G/double-exposure-data-theme-drawing-mobile-phone-background-concept-innovation.jpg",
  "https://i.postimg.cc/Pq44wFm3/double-exposure-man-woman-working-together-data-theme-hologram-drawing-computer-background-top-view.jpg",
  "https://i.postimg.cc/D0pS11Zb/close-up-hands-business-concept.jpg"
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header />
      <section className="hero-section">
        <div className="carousel">
          {images.map((img, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>

        <div className="overlay"></div>

        <div className="content">
          <h1 className="text-yellow-400">Welcome to Our Company</h1>
          <p className="text-white">
            Innovating the future with passion and dedication.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
