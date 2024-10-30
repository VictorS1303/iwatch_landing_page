import { optimizeImage } from "next/dist/server/image-optimizer"
import Image from "next/image"
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SlideControl from "./components/SlideControl.jsx"
import WatchDisplay from "./components/WatchDisplay.jsx"


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex flex-row justify-between items-center">
        <SlideControl />
        <WatchDisplay/>
      </div>
    </div>
  );
}
