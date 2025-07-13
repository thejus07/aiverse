"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cpu, Cloud, Database, Code, Server, Zap } from "lucide-react";
import SafeButton from "./safe-button";

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCategories = [
    {
      title: "AI & ML Frameworks",
      icon: Cpu,
      technologies: [
        { name: "TensorFlow", description: "Open-source machine learning framework" },
        { name: "PyTorch", description: "Deep learning platform" },
        { name: "Scikit-learn", description: "Machine learning library" },
        { name: "Keras", description: "Neural network API" },
        { name: "Hugging Face", description: "Transformers and NLP models" },
        { name: "OpenAI", description: "GPT and AI API services" }
      ]
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      technologies: [
        { name: "AWS", description: "Amazon Web Services" },
        { name: "Azure", description: "Microsoft Cloud Platform" },
        { name: "Google Cloud", description: "Google Cloud Platform" },
        { name: "Vercel", description: "Deployment platform" },
        { name: "Netlify", description: "Web development platform" },
        { name: "Heroku", description: "Cloud application platform" }
      ]
    },
    {
      title: "Data & Analytics",
      icon: Database,
      technologies: [
        { name: "MongoDB", description: "NoSQL database" },
        { name: "PostgreSQL", description: "Relational database" },
        { name: "Redis", description: "In-memory data store" },
        { name: "Elasticsearch", description: "Search and analytics engine" },
        { name: "Apache Kafka", description: "Event streaming platform" },
        { name: "Snowflake", description: "Data warehouse" }
      ]
    },
    {
      title: "Development Tools",
      icon: Code,
      technologies: [
        { name: "Python", description: "Programming language" },
        { name: "JavaScript", description: "Web development language" },
        { name: "TypeScript", description: "Typed JavaScript" },
        { name: "Node.js", description: "Runtime environment" },
        { name: "React", description: "Frontend framework" },
        { name: "Next.js", description: "Full-stack React framework" }
      ]
    },
    {
      title: "DevOps & Infrastructure",
      icon: Server,
      technologies: [
        { name: "Docker", description: "Containerization platform" },
        { name: "Kubernetes", description: "Container orchestration" },
        { name: "GitHub Actions", description: "CI/CD platform" },
        { name: "Terraform", description: "Infrastructure as code" },
        { name: "Nginx", description: "Web server" },
        { name: "Prometheus", description: "Monitoring system" }
      ]
    },
    {
      title: "AI Services",
      icon: Zap,
      technologies: [
        { name: "OpenCV", description: "Computer vision library" },
        { name: "spaCy", description: "NLP library" },
        { name: "LangChain", description: "LLM application framework" },
        { name: "Streamlit", description: "Data app framework" },
        { name: "MLflow", description: "ML lifecycle management" },
        { name: "Weights & Biases", description: "ML experiment tracking" }
      ]
    }
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-800">
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
            <Cpu className="w-4 h-4" />
            Technology Stack
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Built on Leading Technologies
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We leverage cutting-edge technologies and industry-leading platforms to deliver robust, scalable AI solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    variants={itemVariants}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {tech.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {tech.description}
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {tech.name.charAt(0)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["AWS", "Microsoft", "Google", "OpenAI", "NVIDIA", "Docker"].map((partner, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need Custom Technology Integration?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We work with the latest technologies and can integrate any platform or framework your business needs.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss Your Technical Requirements
              <Code className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
