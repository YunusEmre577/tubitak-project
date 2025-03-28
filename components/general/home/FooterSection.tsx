import Heading from '@/components/ui/Heading'
import React from 'react'
import { Button } from '../../ui/Button';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className='relative overflow-hidden mx-8 lg:mx-16 p-6 border border-accent rounded-2xl flex flex-col items-center gap-3'>
        <div className='absolute inset-0 bg-colored/75 pointer-events-none blur-[1000px]' />
        <Heading size='2xl'>Bloglara göz at</Heading>
        <p className='text-[15px] text-muted'>Tüm gelişmeleri yakından takip etmek için bloglara git</p>
        <Link className='w-full lg:w-fit' href={"/blog"}>
        <Button icon={"solar:alt-arrow-right-outline"} className='w-full lg:w-fit'>Bloglar</Button>
        </Link>
    </section>
  )
}
