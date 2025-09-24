import React from "react";
import FloatingInput from "../components/ui/InputField";
import Button from "../components/ui/Button";

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
            Get in Touch
            <br />
            We’re Here to
            <span className="text-primary font-bold text-4xl sm:text-7xl">
              {" "}
              Help
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed">
            We’re here to provide the guidance and support you need — not just
            to answer your questions, but to help you connect, collaborate, and
            move forward with confidence. Reach out and let’s create a
            meaningful, lasting impact together.
          </p>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div></div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center space-y-14">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">Let's Talk</h1>
        </div>
        <form className="w-full max-w-4xl space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FloatingInput label="Name" type="text" />
            <FloatingInput label="Email" type="email" />
            <FloatingInput label="Phone Number" type="tel" />
            <FloatingInput label="Required Service" type="text" />
          </div>
          <FloatingInput label="Message" type="text" />
          <div className="pt-8">
            <Button
              text="Send Message"
              theme="white"
              type={"submit"}
              width={"full"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
