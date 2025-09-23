import React from "react";

const Portfolio = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 px-6 md:px-12 lg:px-20">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <p className="text-sm text-gray-400">Portfolio</p>
            <div className="h-0.5 w-30 bg-gray-200 rounded"></div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl leading-tight">
            Proven Solutions <br />for {' '}
            <span className="text-primary font-bold text-4xl sm:text-6xl">
              Leading Clients
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed">
            Our works reflect the trust our clients place in us and the
            results we consistently deliver. From innovative solutions to
            lasting partnerships, each project showcases our commitment to
            excellence and measurable impact.
          </p>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full h-64 md:h-96 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-gray-500 text-sm">Image / Illustration</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
