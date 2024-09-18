'use client';
import { TextGenerateEffect } from './ui/text-generate-effect';

const words = `Welcome to my
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
