"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  Workflow, 
  TrendingUp, 
  ArrowRight,
  Bot,
  Database 
} from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Brain,
      title: "AI Consulting & Strategy",
      description: "Expert guidance to identify AI opportunities, develop roadmaps, and implement AI strategies aligned with your business goals.",
      features: ["AI Readiness Assessment", "Strategic Planning", "ROI Analysis"],
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: Bot,
      title: "Custom ML Models",
      description: "Tailored machine learning solutions designed specifically for your industry and use case requirements.",
      features: ["Predictive Analytics", "Classification Models", "Recommendation Systems"],
      color: "from-green-600 to-blue-600"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image and video analysis solutions for quality control, object detection, and visual automation.",
      features: ["Object Detection", "Image Classification", "Video Analytics"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Intelligent text analysis, chatbots, and language understanding systems for enhanced customer engagement.",
      features: ["Sentiment Analysis", "Chatbot Development", "Text Classification"],
      color: "from-orange-600 to-red-600"
    },
    {
      icon: Workflow,
      title: "Automation Pipelines",
      description: "End-to-end automation solutions that streamline workflows and reduce manual intervention.",
      features: ["Process Automation", "Data Pipelines", "Workflow Orchestration"],
      color: "from-teal-600 to-green-600"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Robust data infrastructure and processing systems to fuel your AI initiatives with clean, accessible data.",
      features: ["Data Architecture", "ETL Pipelines", "Data Warehousing"],
      color: "from-indigo-600 to-blue-600"
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
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Our Services
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Comprehensive AI Solutions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            From strategy to deployment, we provide end-to-end AI services that transform your business operations and drive sustainable growth.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <motion.button
                className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-600/0 to-primary-600/0 group-hover:from-primary-600/5 group-hover:to-primary-600/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI solutions can drive growth and efficiency for your organization.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
