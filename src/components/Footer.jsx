import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tagline */}
          <div>
            <img src="./velvetbyte-logo.png" alt="" className="w-42" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/why-learn" className="hover:text-white">
                  Why Learn with Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4">
              Legal Information
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@skillbyte.com"
                  className="hover:text-white"
                >
                  support@skillbyte.com
                </a>
              </li>
              <li>
                <a href="tel:+10234567890" className="hover:text-white">
                  +1 (023) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-center mt-12 py-12 border-t border-line border-b ">
            <h1 className="text-5xl font-semibold text-muted">Unlock Your <span className="text-primary">Success</span></h1>
        </div>

        <div className=" flex justify-between">
          {/* Copyright Notice */}
          <div className="text-center mt-8 text-sm">
            <p>&copy; Copyright 2025, Skillbyte</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="hover:text-white">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
