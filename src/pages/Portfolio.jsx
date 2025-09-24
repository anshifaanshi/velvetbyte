import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import PortfolioCard from "../components/ui/StackingCard";
import ParallaxSection from "../components/ui/ParallaxSection";
import Button from "../components/ui/Button";

const projects = [
  {
    title: "Web Design & Development",
    subtitle:
      "Expertly designed and developed visually stunning, user-friendly website",
    imageSrc: "https://velvetbyte.com/img/works/p1.jpg",
    color: "black",
  },

  {
    title: "Ecommerce Store",
    subtitle:
      "Built a robust eCommerce store using Shopify and WooCommerce, delivering seamless, user-friendly online shopping.",
    imageSrc: "https://velvetbyte.com/img/works/p4.jpg",
    color: "#black",
  },
  {
    title: "Digital Marketing",
    subtitle:
      "Crafted a robust digital marketing strategy, boosting traffic and leads with seamless, user-friendly campaigns.",
    imageSrc: "https://www.shutterstock.com/image-photo/businessman-using-smart-phone-global-600nw-2464378425.jpg",
    color: "#black",
  },
  {
    title: "Branding",
    subtitle: "Expertly crafted branding",
    imageSrc: "https://velvetbyte.com/img/works/06.jpg",
    color: "#black",
  },
];

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      {/* Top Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 px-6 md:px-12 lg:px-20 w-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <p className="text-sm text-gray-400">Portfolio</p>
            <div className="h-0.5 w-30 bg-gray-200 rounded"></div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl leading-tight">
            Proven Solutions <br />
            for{" "}
            <span className="text-primary font-bold text-4xl sm:text-7xl">
              Leading Clients
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed">
            Our works reflect the trust our clients place in us and the results
            we consistently deliver. From innovative solutions to lasting
            partnerships, each project showcases our commitment to excellence
            and measurable impact.
          </p>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
        <div></div>
        </div>
      </div>

      {/* Portfolio Cards */}
      <div ref={containerRef} className="w-full bg-black">
        <div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl tet-white">
            We Proudly Presenting our Strength
          </h1>
        </div>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <PortfolioCard
              key={i}
              i={i}
              title={project.title}
              subtitle={project.subtitle}
              imageSrc={project.imageSrc}
              color={project.color}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

       {/* Parallax Background */}
      <div className="text-center w-full">
        <ParallaxSection
          imageUrl="https://i.pinimg.com/736x/6b/8f/fe/6b8ffec3b8865694a5bde6acbc906768.jpg"
          height={"h-screen"}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl mx-auto leading-10 sm:leading-18 max-w-4xl">
              Have any project in mind?<br />
              <span className="text-primary font-bold text-5xl sm:text-7xl">
                We are here
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

export default Portfolio;
