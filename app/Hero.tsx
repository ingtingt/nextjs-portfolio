import React from 'react';
import { HeroScrollDemo } from '@/components/HeroScroll';
import { TextHoverEffectDemo } from '@/components/TextHoverEffect';
import { ModeToggle } from '@/components/DarkButton';
import { TimelineDemo } from '@/components/TimelineDemo';
import { BentoGridSecondDemo } from '@/components/BentoGridSecondDemo';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { HeroHighlightDemo } from '@/components/HeroHighlightDemo';
import { SparklesPreview } from '@/components/SparklesPreview';

const Hero = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="fixed top-0 right-0 p-4 z-50">
        <ModeToggle />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroScrollDemo />
        {/* <TextHoverEffectDemo /> */}
        <HeroHighlightDemo />
        <TimelineDemo />
        <BentoGridSecondDemo />
      </div>
      <BackgroundBeams />
    </main>
  );
};

export default Hero;
