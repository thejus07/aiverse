"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      content:
        "AiVerse transformed our business, driving efficiency and growth with their innovative AI strategies.",
      author: "Alice Johnson",
      position: "CEO",
      company: "Tech Innovators Inc.",
      avatar: "/api/placeholder/128/128",
    },
    {
      id: 2,
      content:
        "Their expertise in machine learning and automation is unparalleled. They delivered measurable results on time and within budget.",
      author: "Robert Miller",
      position: "CTO",
      company: "NextGen Robotics",
      avatar: "/api/placeholder/128/128",
    },
    {
      id: 3,
      content:
        "The NLP solutions provided by AiVerse helped us enhance customer interaction with personalized experiences.",
      author: "Sarah Thompson",
      position: "VP of Customer Experience",
      company: "Service Excellence Group",
      avatar: "/api/placeholder/128/128",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4" />
            What Our Clients Say
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Stories of Success
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            See how our AI solutions have positively impacted businesses across various industries.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-left mx-auto max-w-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full shadow-md mr-4 bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
              <Quote className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
              <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

