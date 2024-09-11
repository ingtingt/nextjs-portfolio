import Image from 'next/image';
import Hero from './Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <a href="/About">About</a>
    </div>
  );
}
