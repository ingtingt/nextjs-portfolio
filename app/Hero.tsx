import React from 'react';
import { HeroScrollDemo } from '@/components/HeroScroll';
import { TextHoverEffectDemo } from '@/components/TextHoverEffect';

const Hero = () => {
  return (
    <main>
      <div>
        <HeroScrollDemo />
        <TextHoverEffectDemo />
      </div>
    </main>
  );
};

export default Hero;
