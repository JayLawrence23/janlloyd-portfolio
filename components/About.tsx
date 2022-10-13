import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ x: 0, opacity: 1}}
            viewport={{ once: true }}
            src='https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/309020425_669559824529095_317608215009567139_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF5FIG5n-LwLCDd2S9cb1mleqNI-5v1C556o0j7m_ULnvAcdYgx34d536AxMiMnC-anQfcEBiJ6MnX-6OxqXp23&_nc_ohc=uQ_keFcSA_cAX-0kFw-&_nc_ht=scontent.fmnl9-1.fna&oh=00_AT9dgO21_S07hZwq36H5yGk10ZfTWrh1tjeQ4ilOyCxOjw&oe=634D8617' 
            alt=''
            className='mb-20 md:mb-0 flex-shrink-0 w-56 rounded-ful object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'/>


    </div>
  )
}

export default About