"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePic from '../assets/phopic.jpg';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center pt-28 sm:pt-36">
            <div className='z-[999] relative'>
              <motion.div
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{
                type:"tween",
                duration:0.4,
              }}
               >
                <Image
                src={profilePic}
                alt="Profile pic"
                quality="95"
                width="175"
                height="175"
                priority={true}
                style={{
                  borderRadius: 250,
                  borderWidth:3,
                  borderColor:"white",
                  objectFit: 'cover', // cover, contain, none
                }}
                />
              </motion.div>
                <motion.span 
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                  type:"spring",
                  stiffness:125,
                  delay:0.3,
                  duration:0.7,
                }}
                className='absolute bottom-0 right-0 text-4xl '>
                  👋
                </motion.span>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center mt-32'>
          <motion.div
          initial={{y:-100,opacity:0}}
          animate={{y: 0,   opacity: 1}}
          
          >
            <Link href="mailto:shridharsarraf998@gmail.com"
          className='bg-gray-900 text-white px-14 py-3 flex items-center justify-center gap-2 rounded-full '
          >
            Contact me here <BsArrowRight/> {" "}
          </Link>
          </motion.div>
          
          <motion.div
          initial={{y:100,opacity:0}}
          animate={{y: 0,   opacity: 1}}
          transition={{
            delay:0.8
          }}
          >
          <Link 
          href='https://drive.google.com/file/d/1ZwriCK1lg-yzeRbYjIi65fyaFnD8lOvr/view?usp=sharing'
          className='bg-white text-gray-900 border-gray-950 border hover:bg-[#c3eeee] px-14 py-3 flex items-center justify-center gap-2 rounded-full '>
            Download CV <HiDownload/>
          </Link>
          </motion.div>
          <motion.div
          initial={{y:-100,opacity:0}}
          animate={{y: 0,   opacity: 1}}
          transition={{
            delay:1.5
          }}
          >
          <Link 
          href="https://github.com/shridhar998"
          className='bg-white text-gray-900 border-gray-950 border hover:bg-[#c3eeee] px-14 py-3 flex items-center justify-center gap-2 rounded-full '>
            GitHub <FaGithubSquare/>
          </Link>
          </motion.div>
          <motion.div
          initial={{y:100,opacity:0}}
          animate={{y: 0,   opacity: 1}}
          transition={{
            delay:2
          }}
          >
          <Link 
          href="https://linkedin.com/in/shridhar-sarraf"
          className='bg-white text-gray-900 border-gray-950 border hover:bg-[#c3eeee] px-14 py-3 flex items-center justify-center gap-2 rounded-full '>
            LinkedIn <BsLinkedin/>
          </Link>
          </motion.div>
        </div>
        
        <div className='flex justify-center items-center z-[99]'>
        <p className='mb-10 mt-3 px-4 font-medium leading-[1.5] sm:text-4xl '>
          <motion.span 
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                  delay:0.7
                }}
                className='text-2xl text-slate-950'>
                 Hi{","} I&apos;m <span className='font-bold'> Shridhar.</span>
            </motion.span>
            <br/>
            <motion.span 
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:80}}
                transition={{
                  delay:1
                }}
                className='text-lg'>
                📱 Mobile App Developer | React Native Specialist | Node.js Enthusiast
            </motion.span>
            <br/>
            <motion.span 
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:80}}
                transition={{
                  delay:1.5
                }}
                className='text-lg'>
                🚀 Transforming ideas into user-centric mobile experiences
            </motion.span>
            <br/>
            <motion.span 
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:80}}
                transition={{
                  delay:2
                }}
                className='text-lg'>
                🌐 Proficient in React Native and Express.js to build robust mobile applications.
            </motion.span>
            <br/>
            <motion.span 
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:80}}
                transition={{
                  delay:3
                }}
                className='text-lg'>
                📈 Passionate about continuous learning and honing my craft.
            </motion.span>
            <br/>
            <motion.span 
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:80}}
                transition={{
                  delay:3.5
                }}
                className='text-lg'>
                🔍 Actively seeking challenging roles in software development.
            </motion.span>
          
        </p>
        </div>
        
    </section>
  )
}
