import React from "react";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/shop" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
  { title: "FAQs", link: "/faqs" },
  { title: "Terms & Conditions", link: "/terms" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ESHOP</h3>
            <p>
              Welcome to ESHOP, your one-stop destination for all your shopping
              needs. Explore our wide range of products and enjoy a seamless
              shopping experience.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {FooterLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-white duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaMobileAlt />
                <p>+91 1234567890</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope />
                <p>support@eshop.com</p>
              </div>
              <p>
                ESHOP, Puttuparti, Andhra Pradesh, India
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p>&copy; 2023 ESHOP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;