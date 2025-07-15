"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import SafeInput from "./safe-input";
import SafeButton from "./safe-button";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const footerLinks = {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
    ],
    Services: [
      { name: "AI Consulting", href: "#services" },
      { name: "Machine Learning", href: "#services" },
      { name: "Computer Vision", href: "#services" },
      { name: "NLP Solutions", href: "#services" },
    ],
    Resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Documentation", href: "#docs" },
      { name: "Support", href: "#support" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-2xl font-bold gradient-text">
                  AiVerse
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading AI agency delivering end-to-end machine learning, computer vision, NLP, and data automation services that transform businesses.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-primary-400" />
                  <span>info@aiverse.solutions</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-primary-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-primary-400" />
                  <span>123 AI Street, Innovation City, TC 12345</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div key={category} variants={itemVariants}>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {category === "Services" ? (
                    <li>
                      <a
                        href="#services"
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                      >
                        Services
                      </a>
                    </li>
                  ) : (
                    links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 AiVerse. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Newsletter Signup */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariants}
        className="bg-gradient-to-r from-primary-600 to-primary-700 py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with AI Insights
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest AI trends, case studies, and industry insights.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <SafeInput
                type="email"
                placeholder="Enter your email"
                className="flex-1 text-gray-900"
              />
              <SafeButton
                type="submit"
                variant="outline"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Subscribe
              </SafeButton>
            </form>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
