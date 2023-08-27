import Image from 'next/image'
import Intro from '@/components/page'
import Projects from '@/components/projects'
import SectionDivider from '@/components/section-divider'
import Experiences from '@/components/experiences'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <Experiences/>
      <Projects/>
      <Skills/>
    </main>
  )
}
