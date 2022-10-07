import React from 'react'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

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
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
    </div>
  )
}

export default Hero