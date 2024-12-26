import Link from 'next/link'
import React from 'react'

const NavbarComp = () => {
  return (
    <div className=" fixed top-0 z-50 left-0 w-full h-20 bg-black flex justify-center items-center ">
    <ul className=" flex gap-4 ">
      <li>
        <Link href="#main">Home</Link>
      </li>
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  </div>
  )
}

export default NavbarComp