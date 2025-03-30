"use client"
import React from 'react'
import Header from '../../components/general/Header';
import Heading from '../../components/ui/Heading';
import Footer from '@/components/general/Footer';
import { BluredPage } from '@/components/ui/BluredPage';
import Section from '@/components/general/home/Section';
export default function page() {
  const info = [
    {
      title: "Enerji üretimi",
      description: "Elektrik enerjisi üretilerek fosil yakıt kullanımından bir adım da olsa uzaklaşılır."
    },
    {
      title: "Su Tasarrufu",
      description: "Buharlaşma azalacağından toplam su miktarı eskisine nazaran daha fazla olacaktır."
    },
    {
      title: "Su Kalitesi",
      description: "Buharlaşma olmayacağından bakteriler için elverişsiz bir ortam oluşur. Bu da kalitenin korunumunu sağlar."
    },
    {
      title: "Fosil Yakıttan Uzaklaşma",
      description: "Elektrik enerjisi fosil yakıtsız üretileceğinden fosil yakıt kullanımı azalır."
    },
    {
      title: "İklim Değişikliğine Duyarlılık",
      description: "Bazı etkenler sonucunda iklim değişikliğine duyarlılık oluşur."
    }
  ]
  return (
    <>
    <main>
        <Header />
        <BluredPage />
        <div className='flex mb-12 flex-col gap-12 mt-20 items-center'>
          <div className='flex flex-col gap-16'>
            <section className='responsive flex flex-col items-center gap-8'>
              <Heading size='2xl'>Doğaya kattıklarımız</Heading>
              <table className=''>
                <thead>
                  <tr className='border border-accent text-left'>
                    <th className='p-4 font-semibold text-foreground border-r border-r-accent'>Katkı</th>
                    <th className='p-4 font-semibold text-foreground'>Açıklama</th>
                  </tr>
                </thead>
                <tbody>
                  {info.map((item, i) => (
                    <tr className='border border-accent' key={i}>
                      <td className='p-4 border-r-accent border-r text-muted font-medium'>{item.title}</td>
                      <td className='p-4 text-[15px] font-medium text-slate-50/95'>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <section className='responsive flex flex-col items-center text-center gap-4'>
              <Heading size='2xl'>Baraj üzerine güneş panellerinin kurulması nedir?</Heading>
              <p className='text-muted'>Baraj üzerine güneş panellerinin kurulması, su tasarrufu, enerji üretimi gibi faktörlere katkı sağlamak amacıyla oluşturulmuş yaratıcı bir fikirdir. Baraj üzerine güneş paneli yerleştirilmesiyle ortaya çıkan tasarruf ve üretim, tamamen çevre dostu ve doğaya faydalı olduğundan bu projeyi ekipçe seçme kararı aldık.</p>
            </section>
            <section className='w-full'>
              <Section showDescription={false} />
            </section>
          </div>
        </div>
<Footer />
    </main>
        </>
  )
}
