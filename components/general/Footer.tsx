import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='p-8 pt-12 relative overflow-hidden px-8 bg-secondary/20 border-t border-t-accent lg:px-16 flex flex-wrap justify-center lg:justify-between gap-12'>
        <div className='bottom-0 absolute h-40 w-[1000px] bg-colored/60 pointer-events-none left-1/2 -translate-x-1/2 blur-[600px]'></div>
        <header className='flex flex-col items-center lg:items-start text-center lg:text-left gap-1'>
           <span className='max-w-xs text-xl lg:text-2xl font-bold text-foreground'>Barajlarımız buhar olup uçmasın!</span>
           <span className='text-muted max-w-sm font-medium'>Barajlarımızın buhar olup uçmaması için yüzer güneş paneli sistemini kurmak amacı taşıyan bilinçli insanlarız!</span>
        </header>
        <section className='flex flex-col gap-5'>
          <span className='font-medium text-base lg:text-base'>Sayfalar</span>
          <nav className='flex flex-col gap-1'>
            <Link className='text-muted hover:underline' target="_blank" href={"/"}>Anasayfa</Link>
            <Link className='text-muted hover:underline' target="_blank" href={"/about"}>Hakkında</Link>
            <Link className='text-muted hover:underline' target="_blank" href={"/project"}>Proje</Link>
            <Link className='text-muted hover:underline' target="_blank" href={"/contact"}>İletişim</Link>
            <Link className='text-muted hover:underline' target="_blank" href={"/brosur"}>Broşür</Link>
          </nav>
        </section>
        <section className='flex flex-col gap-5'>
          <span className='font-medium text-base lg:text-base'>Kaynak</span>
          <nav className='flex flex-col gap-1'>
            <Link className='text-muted hover:underline' target="_blank" href={"/kaynak"}>Kaynaklar</Link>
            <Link className='text-muted hover:underline' target="_blank" href={"https://vercel.com"}>Sağlayıcı</Link>
          </nav>
        </section>
        <section className='flex flex-col gap-5'>
          <span className='font-medium text-base lg:text-base'>İletişim</span>
          <nav className='flex flex-col gap-1'>
            <Link className='text-muted hover:underline' target="_blank" href={"/404"}>İnstagram</Link>
            <Link className='text-muted hover:underline' target="_blank" href={"/404"}>Twitter</Link>
            <Link className='text-muted hover:underline' target="_blank" href={"/404"}>Youtube</Link>
            <Link className='text-muted hover:underline' target="_blank" href={"https://github.com/YunusEmre577/tubitak-project"}>Github</Link>
            <Link className='text-muted hover:underline' target="_blank" href={"/404"}>Whatsapp</Link>
          </nav>
        </section>
        <section className='border-t w-full pt-8 border-t-accent'>
          <span className='text-foreground font-medium'>&copy; {new Date().getFullYear()} tüm hakları saklıdır.</span>
        </section>
    </footer>
  )
}

