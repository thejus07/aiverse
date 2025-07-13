"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";
import SafeInput from "./safe-input";
import SafeButton from "./safe-button";

const ContactAndNewsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Contact Us
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Connect with AiVerse
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Get in touch for a free AI audit, partnership opportunities, or any inquiries you may have.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Form</h3>
            <form className="space-y-6">
              <SafeInput
                type="text"
                id="name"
                label="Full Name"
              />
              <SafeInput
                type="email"
                id="email"
                label="Email"
              />
              <SafeInput
                type="text"
                id="company"
                label="Company"
              />
              <SafeButton
                type="submit"
                className="w-full"
              >
                Send Message
              </SafeButton>
            </form>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Location</h3>
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <span className="ml-3 text-gray-600 dark:text-gray-300">123 AI St, Innovation City, Techland</span>
            </div>
            <div className="mb-8">
              <iframe
                title="Office Location"
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508628!2d144.9537353156809!3d-37.81627944202185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d0e7a4d3b67d!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sbd!4v1596102126185!5m2!1sen!2sbd"
                style={{ border: 0 }}
                allowFullScreen={true}
                aria-hidden={false}
                tabIndex={0}
              ></iframe>
            </div>
            <div className="text-gray-500 text-sm">
              For directions, please reach out to us via email at <span className="font-medium text-primary-600">info@aiverse.com</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactAndNewsletter;
