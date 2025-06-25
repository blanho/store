import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { LuAlignLeft } from 'react-icons/lu'
import { navLinks } from '@/utils/links'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

const LinksDropdown = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" className='flex gap-4 max-w-[100px]'>
                <LuAlignLeft className='w-6 h-6' />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
          {navLinks.map((link) => {
            return (
              <DropdownMenuItem key={link.href} className='p-2 hover:bg-primary hover:text-white'>
                <Link href={link.href} className='capitalize w-full'>
                  {link.label}
                </Link>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksDropdown