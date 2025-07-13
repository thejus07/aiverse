"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SafeButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const SafeButton = forwardRef<HTMLButtonElement, SafeButtonProps>(
  ({ children, variant = "primary", size = "md", className = "", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variantClasses = {
      primary: "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500",
      secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",
      outline: "border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500"
    };
    
    const sizeClasses = {
      sm: "px-4 py-2 text-sm rounded-md",
      md: "px-6 py-3 text-base rounded-lg",
      lg: "px-8 py-4 text-lg rounded-lg"
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
      <motion.button
        ref={ref}
        className={combinedClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        suppressHydrationWarning
        initial={false}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

SafeButton.displayName = "SafeButton";

export default SafeButton; 