import type { PropsWithChildren } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

const ScrollAnimation = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: 'easeInOut',
        duration: 2,
        y: { duration: 1 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
