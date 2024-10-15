"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import GeneratingLoading from "./GeneratingLoading";

interface Sparkle {
  id: number;
  size: number;
  duration: number;
  delay: number;
  style: React.CSSProperties;
}

const generateSparkle = (): Sparkle => ({
  id: Math.random(),
  size: Math.random() * 20 + 5, // Increased size for visibility
  duration: Math.random() * 2 + 1,
  delay: Math.random() * 2,
  style: {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    zIndex: 2,
  },
});

type Props = {
  children: React.ReactNode;
  loading: boolean;
};

const SparkleImage: React.FC<Props> = ({ children, loading }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate initial set of sparkles
    setSparkles(Array.from({ length: 20 }, generateSparkle));

    // Periodically add new sparkles
    const interval = setInterval(() => {
      setSparkles((prevSparkles) => [...prevSparkles, generateSparkle()]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto transition-all duration-100">
      {children}
      {loading && (
        <>
          <GeneratingLoading />
          {sparkles.map((sparkle) => (
            <motion.svg
              key={sparkle.id}
              width={sparkle.size}
              height={sparkle.size}
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={sparkle.style}
              className="absolute pointer-events-none"
              initial={{ scale: 0, rotate: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0.8, 1],
                rotate: [0, 90, 180, 270],
                opacity: [0, 1, 0.5, 1],
              }}
              transition={{
                duration: sparkle.duration,
                repeat: Infinity,
                delay: sparkle.delay,
                ease: "easeInOut",
              }}
            >
              <path
                d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
                fill="#FFD700"
              />
            </motion.svg>
          ))}
        </>
      )}
    </div>
  );
};

export default SparkleImage;
