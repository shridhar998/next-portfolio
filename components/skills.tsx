"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
      <SectionHeading> My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-500'>
        {
          skillsData.map((skill,idx)=>(
            <li className='bg-white border border-black/[0.1] rounded-xl px-5 py-3'
            key={idx}>
              {skill}
            </li>
          ))

        }
      </ul>
    </section>
  )
}
