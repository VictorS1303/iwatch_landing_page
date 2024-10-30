import { optimizeImage } from "next/dist/server/image-optimizer";
import Image from "next/image";
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
