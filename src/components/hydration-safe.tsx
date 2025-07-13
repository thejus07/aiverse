"use client";

import { useEffect, useState } from "react";

interface HydrationSafeProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const HydrationSafe = ({ children, fallback }: HydrationSafeProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return fallback ? <>{fallback}</> : null;
  }

  return <>{children}</>;
};

export default HydrationSafe; 