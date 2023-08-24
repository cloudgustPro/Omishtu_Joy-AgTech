'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession,getProviders} from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className='w-full flex-between mb-16 pt-3'>
      <Link href= "/" className='flex flex-center gap-2'>
        <Image 
          src = "/assets/images/logo.svg"
          alt="prompt logo"
          width={30}
          height={30}
          className='object-contain'
        />

        <p className="logo_text">Prompt</p>
      </Link>
      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className='black_btn'>
              Create Post
            </Link>
              <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
              <Link href="/profile">
                <Image
                  src="/assets/images/logo.svg"
                  width={37}
                  height={37}
                  className='rounded-full'
                />
              </Link>
               
              
          </div>
        ):(
          <>
          </>
        )}
      </div>

    </nav>
  )
}

export default Nav