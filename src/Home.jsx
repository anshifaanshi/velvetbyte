import React from 'react';
import Header from './components/Header';

function Home() {
  const headingText = "Welcome To VelevetByte";
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
          Empowering companies with smart technology, creative ideas, and reliable IT solutions for the future
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


    <section className="relative w-full bg-black py-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 overflow-hidden">
  {/* Top-left floating blob */}
  <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-yellow-600 blur-[200px] opacity-70 animate-float" style={{ animation: 'float 3s ease-in-out infinite reverse' }}></div>
  
  {/* Top-right floating blob */}
  <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-yellow-600 blur-[200px] opacity-70 animate-float" style={{ animation: 'float 3s ease-in-out infinite' }}></div>

  <div className="md:w-1/2 mb-10 md:mb-0 z-10">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Our Amazing Service
    </h2>
    <p className="text-gray-300 mb-6 w-90">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate esse alias delectus, sequi numquam assumenda rerum maiores cum laudantium quisquam in veritatis officia, culpa, ea quibusdam illo minima impedit quaerat.
    </p>
    <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-black">
      Learn More
    </button>
  </div>

  <div className="md:w-1/2 flex justify-center z-10">
    <img 
      src="https://i.postimg.cc/43PM7t9g/istockphoto-1888905382-1024x1024-cleanup.png" 
      alt="Service" 
      className="w-full max-w-md rounded-xl shadow-lg"
    />
  </div>

  <style>
    {`
      @keyframes float {
        0% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(30px, -30px) scale(1.1); }
        100% { transform: translate(0, 0) scale(1); }
      }
      .animate-float { animation: float 3s ease-in-out infinite; }
    `}
  </style>
</section>


      <section className="relative w-full h-screen flex items-center justify-center perspective-1000 overflow-hidden bg-white">
        <div className="relative w-96 h-96 animate-rotate-3d">
          {images.map((src, index) => (
            <div
              key={index}
              className="absolute w-96 h-96 bg-black rounded-xl shadow-xl flex flex-col items-center justify-center text-center"
              style={{ transform: `rotateY(${index * 120}deg) translateZ(350px)` }}
            >
              <img
                src={src}
                alt={`carousel-${index}`}
                className="w-72 h-72 object-cover rounded-lg"
              />
              <p className="mt-3 text-white text-sm px-4 w-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nisi accusantium quis animi deleniti iusto illum veritatis! Temporibus, quam quaerat.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
