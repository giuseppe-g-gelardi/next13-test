'use client';

import SettingsMenu from "./SettingsMenu";
import Link from "next/link";

export default function Header() {

  return (
    <header className="h-16 flex sticky top-0 bg-gray-800 text-gray-400 items-center justify-between px-10
    dark:text-gray-800 dark:bg-gray-400">

      <span
        className="text-xl text-white dark:text-black rounded-md">
        <Link href='https://tailwindcss.com' className="hover:underline">
          Tailwind
          <span className="text-cyan-500 dark:text-cyan-200">
            CSS
          </span>
        </Link>
        {" "}/{" "}
        <Link href='https://headlessui.dev' className="hover:underline">
          Headless
          <span className="text-cyan-500 dark:text-cyan-200">
            UI
          </span>
        </Link>
        {" "}&&{" "}
        <Link href='https://nextjs.org' className="hover:underline">
          Next13!
        </Link>

      </span>

      <div><SettingsMenu /></div>
    </header >
  )
}


// hover:bg-purple-800 dark:hover:bg-purple-200



{/* <Link
href='/'
className="text-xl text-white dark:text-black hover:bg-purple-800 dark:hover:bg-purple-200 rounded-md">
Tailwind
<span className="text-cyan-500 dark:text-cyan-200">
  CSS{" "}
</span>
/ Headless
<span className="text-cyan-500 dark:text-cyan-200">
  UI{" "}
</span>
&& Next13!
</Link> */}
