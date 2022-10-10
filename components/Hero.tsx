import React from 'react'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hi! 👋 My name is Jan Lloyd Alba",
            "Aspiring Architect",
            "I accept Painting Commission"
        ],
        loop: true,
        delaySpeed: 2200,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-ceter overflow-hidden'>
        <BackgroundCircles />
         <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="" 
            alt="" />
        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Artist</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>

            <div>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
               
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
