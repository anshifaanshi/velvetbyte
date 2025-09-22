import React from 'react';
import Header from './components/Header';

function Home() {
  const headingText = "Glowing Section";
  const images = [
    "https://i.postimg.cc/zB0M95f1/istockphoto-1352603244-1024x1024.jpg",
    "https://i.postimg.cc/ZR77wcfb/istockphoto-1334591614-1024x1024.jpg",
    "https://i.postimg.cc/q7p10YSB/istockphoto-1979289147-1024x1024.jpg"
  ];

  return (
    <div>
      <Header />

      <section className="relative h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-6xl font-bold text-white flex flex-wrap justify-center">
          {headingText.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block animate-fall opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="mt-6 text-xl text-gray-300 text-center px-4">
          Floating effects with full-length lines
        </p>

        <button className="mt-10 px-8 py-3 bg-yellow-500 text-black font-semibold border-2 border-yellow-500 rounded-lg transform transition-all duration-500 hover:bg-white hover:text-black hover:border-white hover:rotate-y-180">
          Click Me
        </button>

        <div className="absolute top-32 left-0 w-full h-2 bg-white origin-left animate-line-horizontal"></div>
        <div className="absolute top-0 right-20 w-2 h-full bg-white origin-top animate-line-vertical"></div>

        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-yellow-600 blur-[200px] opacity-70 animate-float" style={{ animation: 'float 3s ease-in-out infinite reverse' }}></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-yellow-600 blur-[200px] opacity-70 animate-float" style={{ animation: 'float 3s ease-in-out infinite' }}></div>

        <style>
          {`
            @keyframes float {
              0% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(30px, -30px) scale(1.1); }
              100% { transform: translate(0, 0) scale(1); }
            }
            .animate-float { animation: float 3s ease-in-out infinite; }

            @keyframes fall {
              0% { transform: translateY(-200%); opacity: 0; }
              60% { transform: translateY(20%); opacity: 1; }
              100% { transform: translateY(0); opacity: 1; }
            }
            .animate-fall { animation: fall 0.5s ease forwards; }

            @keyframes line-horizontal {
              0%, 100% { transform: scaleX(0.5); }
              50% { transform: scaleX(1); }
            }
            .animate-line-horizontal { animation: line-horizontal 15s ease-in-out infinite; }

            @keyframes line-vertical {
              0%, 100% { transform: scaleY(0.5); }
              50% { transform: scaleY(1); }
            }
            .animate-line-vertical { animation: line-vertical 15s ease-in-out infinite; }

            button:hover { transform: rotateY(180deg); }

            .perspective-1000 { perspective: 1000px; }

            @keyframes rotate-3d {
              0%, 20% { transform: rotateY(0deg); }
              33%, 53% { transform: rotateY(-120deg); }
              66%, 86% { transform: rotateY(-240deg); }
              100% { transform: rotateY(-360deg); }
            }
            .animate-rotate-3d { transform-style: preserve-3d; animation: rotate-3d 12s linear infinite; }
          `}
        </style>
      </section>

      <section className="relative w-full h-screen flex items-center justify-center perspective-1000 overflow-hidden bg-black">
        <div className="relative w-96 h-96 animate-rotate-3d">
          {images.map((src, index) => (
            <div
              key={index}
              className="absolute w-96 h-96 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center text-center"
              style={{ transform: `rotateY(${index * 120}deg) translateZ(350px)` }}
            >
              <img
                src={src}
                alt={`carousel-${index}`}
                className="w-72 h-72 object-cover rounded-lg"
              />
              <p className="mt-3 text-gray-700 text-sm px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
