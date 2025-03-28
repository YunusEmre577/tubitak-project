"use client"
import Header from '@/components/general/Header'
import React from 'react'
import { BluredPage } from '../../components/ui/BluredPage';
import Heading from '../../components/ui/Heading';

export default function page() {
  return (
    <main>
        <Header />
        <BluredPage />
        <section className='responsive flex items-start flex-col mt-16'>
            <Heading size='4xl' className='text-center'>Bloglar</Heading>
            <p className='mt-6'>Çok yakında bu hizmet kullanıma sunulacaktır.</p>
        </section>
    </main>
  )
}
