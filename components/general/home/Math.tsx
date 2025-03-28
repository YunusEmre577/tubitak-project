import React, { useState } from 'react'
import Heading from '../../ui/Heading';
import { TextField } from '@/components/ui/TextField';
import { Button } from '../../ui/Button';

export default function Math() {
    const [area, setArea] = useState<number|null>(null)
    const [efficiency, setEfficiency] = useState<number|null>(null)
    const [sunLight, setSunLight] = useState<number|null>(null)
//yunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunusyunus
  return (
    <section className='flex flex-col items-center responsive gap-12'>
        <Heading size="4xl">Haydi, Sen Hesapla!</Heading>
        <div className='flex flex-wrap w-full gap-6 justify-between'>
           <header className='flex flex-col gap-6 flex-1/4'>
           <TextField value={area || ""} error={Number(area) > 1500 ? "1500'den büyük değer giremezsin!" : Number(area) < 0 ? "Mantıksızlığa hayır !!" : null} onChange={(e) => setArea(Number(e.target.value))} type='number' description='Güneş panellerinin yüzey alanı' placeholder='Alan (m²)' />
            <TextField value={efficiency || ""} error={Number(efficiency) > 100 ? "Daha yüksek değer girilemez" : Number(efficiency) < 0 ? "Daha küçük değer girilemez!" : null} onChange={(e) => setEfficiency(Number(e.target.value))} type='number' description='Güneş panelinin ışığı elektriğe dönüştürme verimliliği' placeholder='Verimlilik (%)' />
            <TextField value={sunLight || ""} error={Number(sunLight) > 24 ? "Daha fazla değer girilemez." : Number(sunLight) < 0 ? "Mantıksızlığa Hayır !!" : null} onChange={(e) => setSunLight(Number(e.target.value))} type='number' description='Güneşin panele vurma süresi' placeholder='Işık Süresi (s)' />
           <Button icon={"solar:alt-arrow-right-outline"}>Grafiğe Dönüştür</Button>
           </header>
           <footer className='flex-3/4 lg:flex-2/4'>
            Yakında - Grafik Gelecek
           </footer>
        </div>
    </section>
  )
}
