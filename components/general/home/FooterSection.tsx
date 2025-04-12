import Heading from '@/components/ui/Heading'
import React from 'react'
import { Button } from '../../ui/Button';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
    <section className='relative overflow-hidden mx-8 lg:mx-14 p-8 lg:p-16 border border-accent rounded-2xl flex flex-col lg:flex-row lg:justify-between items-center gap-5'>
        <div className='absolute inset-0 bg-colored/50 pointer-events-none blur-[1000px]' />
        <div className='flex flex-col gap-3 text-center lg:text-start lg:items-start items-center'>
        <Heading className='text-xl lg:text-3xl'>Projeye göz at</Heading>
        <p className='text-[15px] text-muted'>Projenin görüntülerini incele</p>
        </div>
        <Link className='w-full lg:w-fit' href={"/project"}>
        <Button icon={"solar:alt-arrow-right-outline"} className='w-full lg:w-fit'>Proje</Button>
        </Link>
    </section>
    </>
  )
}
