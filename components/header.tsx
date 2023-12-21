"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="z-[999] relative">
        <motion.div 
        className="fixed top-0 -translate-x-1/2 left-1/2 h-[4.5rem] w-[85%] rounded-none border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[26rem] sm:rounded-full"
        initial={{y:-100,x:"-50%",opacity:0}}
        animate={{y: 0,x:"-50%", opacity: 1}}
        >
        </motion.div>
        <nav className="flex fixed top-[0.5rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className='flex w-[22rem] flex-wrap items-center justify-between gap-y-2 text-[0.9rem] font-medium text-gray-500 sm:gap-2 sm:flex-nowrap sm:w-[initial]'>
                {
                    links.map(link=>(
                        <li 
                        className='h-3/4 flex items-center justify-center hover:bg-[#0e0111] rounded-full'
                        key={link.hash}>
                            <Link 
                            className='flex w-full items-center justify-center px-3 py-3 hover:text-white transition '
                            href={link.hash}>
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}
