"use client"
import React from 'react'
import { Button } from '../../ui/Button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col pt-24 lg:pt-32 items-center">
    <div className="flex flex-col items-center gap-6">
    <h1 className="text-5xl lg:text-6xl text-center max-w-md lg:max-w-xl font-black">Barajlarımız buhar olup <span className='text-colored'>uçmasın</span></h1>
    <p className="text-muted text-lg max-w-md lg:max-w-lg text-center">Baraj göllerinin buharlaşma oranını düşürmek için yüzer güneş panelleri sistemi kurarak buharlaşmayı azaltmak ve tarım arazilerine ayrılmış alanların işgal edilmesini önlemek için buradayız.</p>
    <div className="flex flex-col w-full lg:justify-center lg:items-center gap-2 responsive">
    <Link className='w-full lg:w-fit flex flex-col' href={"/project"}>
    <Button className='w-full lg:w-fit' icon={"solar:alt-arrow-right-outline"}>Projeye git</Button>
    </Link>
<Link className="w-full lg:w-fit" href="#ekip">
<Button variant="ghost" icon="solar:arrow-down-outline" className="w-full lg:w-fit">Aşağı in</Button>
</Link>
    </div>
    </div>
  </section>
  )
}
