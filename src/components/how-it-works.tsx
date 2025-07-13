"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, Wrench, Rocket, CheckCircle } from "lucide-react";
import SafeButton from "./safe-button";

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: Search,
      title: "Discover",
      subtitle: "AI Opportunity Assessment",
      description: "We analyze your business processes, identify automation opportunities, and assess your data readiness to create a tailored AI strategy.",
      features: [
        "Business Process Analysis",
        "Data Audit & Quality Assessment",
        "ROI Projections",
        "Technology Stack Evaluation"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Wrench,
      title: "Build",
      subtitle: "Custom AI Development",
      description: "Our expert team develops, trains, and fine-tunes AI models specifically designed for your unique requirements and business objectives.",
      features: [
        "Custom Model Development",
        "Training & Validation",
        "Performance Optimization",
        "Security & Compliance"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Deploy",
      subtitle: "Launch & Scale",
      description: "We deploy your AI solutions with full integration support, monitoring, and ongoing optimization to ensure maximum performance and ROI.",
      features: [
        "Production Deployment",
        "Integration Support",
        "24/7 Monitoring",
        "Continuous Optimization"
      ],
      color: "from-pink-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-800">
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
            <CheckCircle className="w-4 h-4" />
            Our Process
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            How We Transform Your Business
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Our proven 3-step methodology ensures successful AI implementation that delivers measurable results and sustainable growth.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2 z-0" />
          
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-4 border-primary-500 text-primary-600 dark:text-primary-400 font-bold text-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 mx-auto lg:mx-0`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-500 dark:text-gray-400 justify-center lg:justify-start"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full mr-3 bg-gradient-to-r ${step.color}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-4 border-primary-500 shadow-lg">
                      <div className="w-0 h-0 border-l-[6px] border-l-primary-600 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your AI Transformation?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your specific needs and create a custom AI strategy that drives real results for your business.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Your Free Consultation
              <Rocket className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
