"use client";

import { useEffect, useState } from "react";
import { setupHydrationFix } from "@/utils/hydration-fix";

interface HydrationWrapperProps {
  children: React.ReactNode;
}

export const HydrationWrapper = ({ children }: HydrationWrapperProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Set up hydration fix for browser extensions
    const cleanup = setupHydrationFix();
    
    return cleanup;
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default HydrationWrapper; 