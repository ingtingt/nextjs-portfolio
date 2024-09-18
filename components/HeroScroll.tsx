'use client';

import React from 'react';
import { ContainerScroll } from './ui/container-scroll-animation';
import Image from 'next/image';
import { TextGenerateEffectDemo } from '@/components/TextGenerateEffectDemo';

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <TextGenerateEffectDemo /> <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Website
              </span>
            </h1>
          </>
        }
      >
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] flex items-center justify-center">
          <div className="relative w-4/5 h-4/5">
            <Image
              src="/imgs/ing-removebg-preview.png"
              alt="hero"
              layout="fill"
              objectFit="contain"
              className="rounded-2xl"
              draggable={false}
              priority
            />
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
