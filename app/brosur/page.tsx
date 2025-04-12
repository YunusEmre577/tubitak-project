"use client"
import Header from '@/components/general/Header'
import React from 'react'
import { BluredPage } from '../../components/ui/BluredPage';
import Heading from '../../components/ui/Heading';
import Link from 'next/link';
import Footer from '@/components/general/Footer';

export default function page() {
  return (
    <main>
        <Header />
        <BluredPage />
        <section className='responsive flex items-center text-center flex-col gap-6 mt-16 mb-20'>
            <Heading size='4xl' className='text-center'>Broşür</Heading>
            <p className='text-muted'>Broşürü görmek için aşağıdaki PDF dosyasını görüntüleyebilir veya indirebilirsin.</p>

            <Link href={"/files/brosur.pdf"} className='w-full border-2 cursor-pointer p-12 flex items-center flex-col-reverse justify-center border-accent rounded-lg border-dashed'>
              <p className='text-muted'>PDF dosyasını aç</p>
              <p className='font-medium text-foreground'>Broşür Hazırlama.pdf</p>
            </Link>

            <iframe src="/files/brosur.pdf" frameBorder="0" width="100%" height={"750px"}></iframe>
        </section>

        <Footer />
    </main>
  )
}
