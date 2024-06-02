import React from 'react'
import Image from 'next/image'
import { CirclePlus, Files, HomeIcon, SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
function Header() {
  return (
    <div className='flex items-center justify-between mx-auto p-2'>
        <Image src='/next.svg'
        alt="logo"
        width={100}
        height={60}
        />

        <SignedIn>
            <div className='flex-1 ml-2'>
                <form className='flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-96'>
                    <SearchIcon className='h-4 text-gray-600' />
                    <input
                        type='text'
                        placeholder='Search'
                        className='bg-transparent outline-none flex-1 rounded-md'
                        />
                </form>
            </div>
                        {/* Icons */}
            <div className='flex items-center space-x-4 px-6'>
                <Button asChild variant='secondary'>
                    <Link href='/' className='icon'>
                        <HomeIcon className='h-5'/>
                        <p>Home</p>
                    </Link>
                </Button>

                <Button asChild variant='secondary'>
                    <Link href='/' className='icon'>
                        <Files className='h-5'/>
                        <p>Status</p>
                    </Link>
                </Button>
                <Button asChild variant='secondary'>
                    <Link href='/' className='icon'>
                        <CirclePlus className='h-5'/>
                        <p>Apply</p>
                    </Link>
                </Button>
                <UserButton />
            </div>
            
        </SignedIn>
        <SignedOut>
            <Button asChild variant='secondary'>
                  <SignInButton/>
            </Button>
        </SignedOut>
    
    </div>
  )
}

export default Header