"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock } from "lucide-react";
import { useState } from "react";

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Product Recommendation Engine",
      client: "TechMart Solutions",
      industry: "E-commerce",
      image: "/api/placeholder/600/400",
      challenge: "TechMart was struggling with low conversion rates and poor customer engagement. Their existing recommendation system was basic and didn&apos;t provide personalized experiences.",
      solution: "We developed an advanced ML-powered recommendation engine using collaborative filtering and deep learning to analyze customer behavior patterns and provide real-time personalized product suggestions.",
      results: [
        "45% increase in conversion rates",
        "3x improvement in customer engagement",
        "25% boost in average order value",
        "60% reduction in cart abandonment"
      ],
      technologies: ["TensorFlow", "Python", "AWS", "Redis"],
      timeline: "3 months",
      category: "Machine Learning"
    },
    {
      id: 2,
      title: "Automated Quality Control System",
      client: "ManufacturePro Industries",
      industry: "Manufacturing",
      image: "/api/placeholder/600/400",
      challenge: "Manual quality inspection was time-consuming and error-prone, leading to defective products reaching customers and increased operational costs.",
      solution: "Implemented computer vision-based quality control system using advanced image recognition to detect defects in real-time during the production process.",
      results: [
        "99.2% defect detection accuracy",
        "80% reduction in inspection time",
        "70% decrease in defective products",
        "$2M annual cost savings"
      ],
      technologies: ["OpenCV", "PyTorch", "Docker", "Kubernetes"],
      timeline: "4 months",
      category: "Computer Vision"
    },
    {
      id: 3,
      title: "Intelligent Customer Support Chatbot",
      client: "ServiceFirst Corp",
      industry: "Customer Service",
      image: "/api/placeholder/600/400",
      challenge: "High volume of repetitive customer queries was overwhelming support staff, leading to long wait times and decreased customer satisfaction.",
      solution: "Developed an NLP-powered chatbot capable of understanding context, handling complex queries, and seamlessly escalating to human agents when needed.",
      results: [
        "85% query resolution without human intervention",
        "50% reduction in response time",
        "40% increase in customer satisfaction",
        "30% reduction in support costs"
      ],
      technologies: ["GPT-4", "LangChain", "Node.js", "PostgreSQL"],
      timeline: "2 months",
      category: "Natural Language Processing"
    }
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
    <section id="case-studies" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <TrendingUp className="w-4 h-4" />
            Success Stories
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Real Results, Real Impact
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Discover how we&apos;ve helped businesses across industries transform their operations with AI-powered solutions.
          </motion.p>
        </motion.div>

        {/* Case Study Tabs */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCase === index
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {study.category}
            </button>
          ))}
        </motion.div>

        {/* Active Case Study */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-xl font-medium">{caseStudies[activeCase].category}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  {caseStudies[activeCase].client}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  {caseStudies[activeCase].timeline}
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {caseStudies[activeCase].title}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Challenge
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {caseStudies[activeCase].challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Solution
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {caseStudies[activeCase].solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Results
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {caseStudies[activeCase].results.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[activeCase].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <motion.button
                  className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  View Full Case Study
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join leading companies that have transformed their business with our AI solutions.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
