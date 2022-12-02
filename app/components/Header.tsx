'use client';

import SettingsMenu from "./SettingsMenu";
import Link from "next/link";

export default function Header() {

  return (
    <header className="h-16 flex sticky top-0 bg-gray-800 text-gray-400 items-center justify-between px-10
    dark:text-gray-800 dark:bg-gray-400">

      <Link href='/' className="text-xl text-white dark:text-black hover:bg-purple-800 dark:hover:bg-purple-200 rounded-md">TailwindCSS/HeadlessUI && Next13!</Link>

      <div><SettingsMenu /></div>
    </header>
  )
}
