import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
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

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>
            Here is a {" "}
            <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
            background
          </h4>

          <p className='text-sm'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime est harum excepturi ullam vitae eveniet, corporis doloremque error quasi modi 
            aut incidunt perspiciatis? Non officia omnis quae itaque vel vitae.
          </p>
        </div>

    </motion.div>
  )
}

export default About