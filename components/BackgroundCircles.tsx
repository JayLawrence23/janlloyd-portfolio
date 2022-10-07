import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border [#333333] rounded-full w-[200px] h-[200px] mt-52 animate-ping'/>
        <div className='absolute border [#333333] rounded-full w-[350px] h-[350px] mt-52 animate-ping'/>
        <div className='absolute border [#333333] rounded-full w-[500px] h-[500px] mt-52 animate-ping'/>
        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse'/>
        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[800px] w-[800px] absolute mt-52 animate-pulse'/>
    </div>
  )
}

export default BackgroundCircles