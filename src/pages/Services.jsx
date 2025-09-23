import React from "react";
import Card from "../components/ui/Card";
import ParallaxSection from "../components/ui/ParallaxSection";
import Button from "../components/ui/Button";
import { BarChart2, Brush, Code, ShoppingCart } from "lucide-react";
import { image } from "framer-motion/client";

const serviceCards = [
  {
    title: "Ecommerce website Development",
    description:
      "Our creative agency is a team of professionals focused on helping your brand grow.",
    items: ["SHOPIFY", "WOOCOMMERCE"],
    icon: <ShoppingCart size={24} />,
    image:"https://images.pexels.com/photos/7679865/pexels-photo-7679865.jpeg"
  },
  {
    title: "Website Design and Development",
    description:
      "Our creative agency is a team of professionals focused on helping your brand grow.",
    items: ["WORDPRESS", "UI UX DESIGN", "WEB DEVELOPMENT"],
    icon: <Code size={24} />,
  },
  {
    title: "Digital Marketing",
    description:
      "Our creative agency is a team of professionals focused on helping your brand grow.",
    items: ["SOCIAL MEDIA", "PERFORMANCE MARKETING", "SEO", "CONTENT CREATION"],
    icon: <BarChart2 size={24} />,
  },
  {
    title: "Graphic Design",
    description:
      "Our creative agency is a team of professionals focused on helping your brand grow.",
    items: [
      "CREATIVE ADS",
      "BRANDING",
      "POSTER DESIGNING",
      "BROCHURE DESIGNING",
    ],
    icon: <Brush size={24} />,
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white">
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 px-6 md:px-12 lg:px-20">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <p className="text-sm text-gray-400">Services</p>
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
          <div className="w-full h-64 md:h-96 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-gray-500 text-sm">Image / Illustration</p>
          </div>
        </div>
      </div>

      {/* service cards */}
      <div className="py-22 text-center bg-white">
        <h1 className="text-black mb- text-3xl sm:text-5xl lg:text-6xl">Highlighting Services with <span className="block font-semibold text-primary leading-20 mb-10"> Impact & Clarity</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-2 sm:px-4">
          {serviceCards.map((serviceCard, index) => {
            return (
              <div
                key={index}
                className="rounded-xl p-1 flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-xl text-sm sm:text-base"
              >
                <Card
                  title={serviceCard.title}
                  description={serviceCard.description}
                  icon={serviceCard.icon}
                  image={serviceCard.image}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Cta section */}
      <div className="text-center">
        <ParallaxSection imageUrl="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl mx-auto leading-10 sm:leading-18 max-w-4xl">
              Let’s make an impact together. <br /> Ready to create something{" "}
              <br />
              <span className="text-primary font-bold text-5xl sm:text-7xl">
                extraordinary ?
              </span>
            </h1>
            <div className="mt-6">
              <Button theme="black" text="Get Started" onClick={() => {}} />
            </div>
          </div>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default Services;
