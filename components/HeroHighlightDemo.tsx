'use client';
import { motion, useInView } from 'framer-motion';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { useRef } from 'react';

export function HeroHighlightDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <HeroHighlight>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl mx-auto space-y-4"
      >
        <p className="text-center">
          Hi, I'm Ing, a third-year Computer Engineering student
        </p>
        <p className="text-center">
          passionate about front-end development and creating impactful digital
          experiences.
        </p>
        <p className="text-center">
          I'm a responsible, fast learner eager to apply my skills in a
          real-world setting and excited to kickstart my professional journey.
        </p>
      </motion.div>
    </HeroHighlight>
  );
}
