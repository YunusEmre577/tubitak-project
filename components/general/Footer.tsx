import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='p-8 flex flex-wrap justify-between'>
        <div>
            <span className='text-muted'>&copy; {new Date().getFullYear()} tüm hakları saklıdır. <Link className='font-semibold text-colored hover:brightness-95 hover:underline' href={"/kaynak"}>Kaynaklar</Link></span>
        </div>
    </footer>
  )
}
