import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shridhar Sarraf | Personal Portfolio',
  description: 'Shridhar is a full-stack developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[25rem] rounded-full blur-[3rem] sm:w-[68.75rem]">

        </div>
        <div className="bg-[#dbd7bf] absolute top-[-1rem] -z left-[-35rem] h-[25.25rem] w-[25rem] rounded-full blur-[6rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]">
          
        </div>
        <Header/>
        {children}
      </body>
    </html>
  )
}
