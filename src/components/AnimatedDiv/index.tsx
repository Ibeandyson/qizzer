'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
interface IProps {
  children: ReactNode;
  
}

const AnimatedDiv = ({ children }: IProps) => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1}}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
