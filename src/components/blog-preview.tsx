"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PenTool, MessageSquare } from "lucide-react";

const BlogPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const posts = [
    {
      title: "AI and the Future of Automation",
      snippet:
        "Discover how AI is transforming industries and what it means for the future of automation.",
      date: "July 10, 2025",
      image: "/api/placeholder/600/400",
      category: "Artificial Intelligence",
    },
    {
      title: "Harnessing the Power of NLP for Customer Service",
      snippet:
        "Explore the impact of Natural Language Processing on enhancing customer experiences and engagement.",
      date: "June 25, 2025",
      image: "/api/placeholder/600/400",
      category: "NLP",
    },
    {
      title: "Building Scalable AI Models with PyTorch",
      snippet:
        "Learn best practices and tips for creating scalable AI models using the PyTorch framework.",
      date: "June 15, 2025",
      image: "/api/placeholder/600/400",
      category: "Machine Learning",
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
    <section id="blog-preview" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            <PenTool className="w-4 h-4" />
            Our Blog
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Stay Updated with the Latest in AI
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Explore our insights, articles, and updates on AI, machine learning, and
            technology innovations.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <div className="w-full h-56 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-sm font-medium">{post.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full px-3 py-1 text-xs font-medium inline-block mb-2">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:underline">
                  {post.snippet}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                  </div>
                  <button className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;

