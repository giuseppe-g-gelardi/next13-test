'use client'

import './globals.css'

import Link from 'next/link'

export default function Home() {
  return <h1 className="flex flex-col  items-center justify-center">
    <h1 className='text-3xl font-bold text-rose-400'>Hello world!</h1>
    <Link href='/home' className='bg-sky-700 rounded-lg p-2 text-white dark:bg-purple-300 hover:bg-sky-200 hover:text-black dark:hover:bg-purple-700 dark:hover:text-white'>Let{"'"}s go!</Link>
  </h1>
}
