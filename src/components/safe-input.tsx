"use client";

import { forwardRef, InputHTMLAttributes } from "react";

interface SafeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const SafeInput = forwardRef<HTMLInputElement, SafeInputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    const baseClasses = "mt-1 block w-full px-5 py-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 sm:text-sm";
    const errorClasses = error ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300";
    const combinedClasses = `${baseClasses} ${errorClasses} ${className}`;

    return (
      <div>
        {label && (
          <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={combinedClasses}
          suppressHydrationWarning
          autoComplete="off"
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

SafeInput.displayName = "SafeInput";

export default SafeInput; 