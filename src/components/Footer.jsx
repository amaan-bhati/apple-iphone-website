import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
     
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Apple Inc. All rights reserved.</p>
          <p className="font-semibold text-gray text-xl"> Developed with {'\u2764'} by <a href='amaanbhati.vercel.app' className="underline text-blue">Amaan</a></p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer