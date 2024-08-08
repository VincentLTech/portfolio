import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from './MagicButton';
const Hero = () => {
  return (
     
    <div className="pb-20 pt-36">
        {/* https://ui.aceternity.com/components/spotlight
        npm i framer-motion clsx tailwind-merge
        This will lead to the creation of a ui folder and the lib folder
        */}
        <div>
            {/* Ui component you imported in UI aceternity */}
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="green"/>
            <Spotlight className="h-[40vh] w-[40vw] top-70 left-full" fill="purple"/>
            <Spotlight className="-top-40 left-0 md:right-60 md:-top-20" fill="white" />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            <Spotlight className="left-70 top-28 h-[80vh] w-[50vw]" fill="white" />
            <Spotlight className="left-60 top-28 h-[80vh] w-[50vw]" fill="blue" />
            <Spotlight className="left-50 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/> */}
        {/* // chnage the bg to bg-black-100, so it matches the bg color and will blend in */}
        </div>
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                We Are Cyber Architectures of Reality
            </p>

            {/**
             *  Link: https://ui.aceternity.com/components/text-generate-effect
             *
             *  change md:text-6xl, add more responsive code
             */}
            <TextGenerateEffect words="Hi! I&apos;m Vincent, a Full Stack Developer in New York." className="text-center text-[80px] md:text-5xl lg:text-6xl"/>
            {/* <TextGenerateEffect words="Transforming Concepts into Seamless User Experiences" className="text-center text-[40px] md:text-5xl lg:text-6xl"/> */}
            {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hi! I&apos;m Vincent, a Full Stack Developer in New York.
            </p> */}

            <a href="#about">
                <MagicButton
                title="Show my work"
                // icon={<FaLocationArrow />}
                position="right"
                />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Hero