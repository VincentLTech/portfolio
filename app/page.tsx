import Image from "next/image";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import Grid from "@/components/Grid"
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { Spotlight } from "@/components/ui/Spotlight";
export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* flex justify-center to center it horizontally*/}
      {/* items-center to center it vertically */}

      {/* flex-col */}
      {/* overflow-hidden counters scroll bars */}
      {/* mx-auto to give some space in the center of the screen*/}
      {/* sm:px-10 is sm basically means sm media queries min-width: 640px and up or px-5 in any other sizes which is less than 640px*/}
      
      <div className="max-w-7xl w-full">
      
        {/* .max-w-7xl max-width: 80rem */}
        {/* w-full width: 100% */}
        <Hero/>
        {/* <Grid /> */}
        <Tools/>
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        {/* <Approach />   */}
        <Footer />
      </div>
    </main>
  );
}
