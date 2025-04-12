"use client"
import Header from '@/components/general/Header'
import React from 'react'
import { BluredPage } from '../../components/ui/BluredPage';
import Heading from '../../components/ui/Heading';
import Footer from '@/components/general/Footer';

export default function page() {
  return (
    <main>
        <Header />
        <BluredPage />
        <section className='responsive flex items text-center flex-col mt-16 mb-20 gap-6'>
            <Heading size='4xl' className='text-center'>Proje</Heading>
            <p className='text-muted'>Aşağıdan projeye göz atabilirsin</p>
            <Heading size='3xl' className='text-center'>Maket fotoğrafları</Heading>
            <div className='flex flex-wrap justify-center items-center gap-4'>
              <img src="/baraj-1.jpg" alt="Tübitak Baraj Projesi" className='object-cover h-96 rounded-lg' />
              <img src="/baraj-2.jpg" alt="Tübitak Baraj Projesi" className='object-cover h-96 rounded-lg' />
              <img src="/baraj-3.jpg" alt="Tübitak Baraj Projesi" className='object-cover h-96 rounded-lg' />
              <img src="/baraj-5.jpg" alt="Tübitak Baraj Projesi" className='object-cover h-96 rounded-lg' />
              <img src="/baraj-6.jpg" alt="Tübitak Baraj Projesi" className='object-cover h-96 rounded-lg' />
              <img src="/baraj-7.jpg" alt="Tübitak Baraj Projesi" className='object-cover h-96 rounded-lg' />
              <img src="/baraj-8.jpg" alt="Tübitak Baraj Projesi" className='object-cover h-96 rounded-lg' />
            </div>
            <Heading size='3xl' className='text-center'>Gerçek hayat örnekli</Heading>
            <div>
              <iframe src="/files/gunes-panel-resmi.pdf"className='w-full h-[750px]'  frameBorder="0"></iframe>
            </div>
            <div>
              <p className='text-muted'>Projenin maket versiyonu üstte yer almaktadır. Su üzerine yerleştirilen güneş panelleri hem suyun buharlaşmasını engelleyecek hem de barajda elektrik üretimini artıracaktır.</p>
            </div>
        </section>

        <Footer />
    </main>
  )
}
