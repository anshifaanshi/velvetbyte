import React from 'react';
import Header from './components/Header';

function Home() {
  const headingText = "WELCOME TO VELVETBYTE";

  return (
    <div>
      <Header />

      <section className="relative h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
        {/* Falling letters animation */}
        <h1 className="text-6xl font-bold text-white flex flex-wrap justify-center">
          {headingText.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block animate-fall opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }} // Slightly slower stagger
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Bigger glowing yellow blobs floating around
        </p>

        {/* Glowing blobs */}
        <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-yellow-400 blur-[200px] opacity-70 animate-float" style={{ animation: 'float 3s ease-in-out infinite' }}></div>
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-yellow-400 blur-[200px] opacity-70 animate-float" style={{ animation: 'float 3s ease-in-out infinite reverse' }}></div>

        {/* Inline CSS */}
        <style>
          {`
            @keyframes float {
              0% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(30px, -30px) scale(1.1); }
              100% { transform: translate(0, 0) scale(1); }
            }

            .animate-float {
              animation: float 3s ease-in-out infinite;
            }

            @keyframes fall {
              0% { transform: translateY(-200%); opacity: 0; }
              60% { transform: translateY(20%); opacity: 1; }
              100% { transform: translateY(0); opacity: 1; }
            }

            .animate-fall {
              animation: fall 1.5s ease forwards; /* slower fall and stays in place */
            }
          `}
        </style>
      </section>
    </div>
  )
}

export default Home;
