"use client";
import React from 'react'
import { motion } from 'framer-motion'
export default function SectionDivider() {
  return (
    <motion.div 
    initial={{opacity:0,y:0}}
    animate={{opacity:1,y:100}}
    transition={{delay:0.15}}
    className='bg-gray-200 my-24 h-1 w-1 rounded-full hidden sm:block'
    >

    </motion.div>
  )
}
