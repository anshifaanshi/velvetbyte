import React from "react";

const Contact = () => {
  return (
    <div className="bg-black text-white">
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 px-6 md:px-12 lg:px-20">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <p className="text-sm text-gray-400">Contact</p>
            <div className="h-0.5 w-30 bg-line rounded"></div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl leading-tight">
            The Solutions <br />
            <span className="text-primary font-bold text-4xl sm:text-6xl">
              Proudly Deliver
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed">
            We provide tailored solutions designed not just to help your brand
            grow, but to make it unforgettable — empowering you to stand out in
            crowded markets, capture attention with confidence, and achieve
            results that endure.
          </p>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
