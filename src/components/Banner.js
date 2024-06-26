import React from 'react';
// images
import Image from '../assets/atul.png';
// icons
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left '>
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'>ATUL <span>SHARMA</span></motion.h1>
          <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>As a Designer and Full Stack Developer. With a passion for creativity and coding, I bring design expertise and technical skills together. From captivating interfaces to seamless functionality, I deliver exceptional digital experiences. Explore my portfolio and let's bring your visions to life.</motion.p>
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <Link to='contact' activeClass='active' smooth={true} spy={true}><button className='btn btn-lg'>Contact me</button></Link>
            <a href='#' className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>
          {/* socials */}
          <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://www.instagram.com/atulsharmaa88/'>
              <FaInstagram />
            </a>
            <a href='https://www.linkedin.com/in/atul-sharma-49046096/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <FaLinkedin />
            </a>
            {/* <a href='#'>
              <FaFacebook />
            </a> */}
          </motion.div>
        </div>
        {/* image  */}
        <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <div className='heroImage'>
            <img src={Image} alt='' />
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
