'use client';

import { motion } from 'framer-motion';
import { HeroChallengeCard } from './Card';
import { useIsMobile } from '@/utils/useIsMobile';

export function BackgroundGrid() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{ opacity: 1 }}
        className="moving-grid-background absolute h-[200%] w-full"
        initial={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      <div className="shadow-background absolute h-full w-full rounded-full shadow-[inset_0_0_5rem_3rem]" />
    </div>
  );
}

export function HeroIllustration() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <div className="relative hidden h-[800px] overflow-visible rounded-full lg:block">
      <div className="absolute -inset-40 top-1/2 -z-30 -translate-y-1/2 translate-x-[-30px] overflow-hidden rounded-full">
        <BackgroundGrid />
      </div>

      <motion.div
        animate={{
          y: 140,
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        }}
        className="group"
        initial={{
          y: 150,
          x: 180,
          opacity: 0,
        }}
      >
        <HeroChallengeCard
          username="new Component"
          className="absolute"
          prompt="Soon..."
          title="Soon..."
        />
      </motion.div>
      <motion.div
        animate={{
          y: 260,
          opacity: 1,
          transition: {
            duration: 0.2,
            delay: 0.1,
          },
        }}
        className="group"
        initial={{
          opacity: 0,
          y: 270,
          x: 80,
        }}
      >
        <HeroChallengeCard
        username="new Component"
          className="absolute"
          prompt="A component like autocomplete can filter the options with search input and a list of tags"
          title="Filterable Option List"
        />
      </motion.div>
    </div>
  );
}
