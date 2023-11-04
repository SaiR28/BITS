import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { SideBar } from '../Components/SideBar'
import { NavBar } from '../Components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <div className='flex'>
        <SideBar/>
        <div className='w-[calc(100vw-13rem)]'>
            <NavBar/>
            <div className={`${inter.className} p-2`}>{children}</div>
        </div>
      </div>
         
    </html>
  )
}
