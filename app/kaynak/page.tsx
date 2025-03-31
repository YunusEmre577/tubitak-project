"use client"
import Header from '@/components/general/Header'
import React from 'react'
import Heading from '../../components/ui/Heading';
import Link from 'next/link';
import { BluredPage } from '../../components/ui/BluredPage';
import { cn } from '@/components/libs/utils';
import Footer from '@/components/general/Footer';

export default function page() {
    const kaynak = [
        {
            url: "https://www.ensia.org.tr/baraj-ve-gollerdeki-buharlasmaya-yuzer-gesler-engel/",
            icon: "https://www.google.com/s2/favicons?domain=https://www.ensia.org.tr&sz=32",
            sitename: "Ensia",
            title: "Baraj ve Göllerdeki Buharlaşmaya Yüzer GES'ler Engel",
            time: "18 Temmuz 2024"
        },
        {
            url: "https://supolitikalaridernegi.org/baraj-ve-gollerdeki-buharlasmaya-yuzer-gesler-engel/",
            icon: "https://www.google.com/s2/favicons?domain=https://supolitikalaridernegi.org&sz=32",
            sitename: "Su Politikaları Derneği",
            title: "Yüzer Güneş Enerjisi Santralleri: Barajlarda Su Tasarrufu ve Verimli Enerji Üretimi",
            time: "21 Eylül 2024"
        },
        {
            url: "https://www.azkarbon.com/gunes-enerjisi-yuzer-paneller-baraj-sistemleri/",
            icon: "https://www.google.com/s2/favicons?domain=https://azkarbon.com&sz=32",
            sitename: "Azkarbon",
            title: "Barajlarda Güneş Enerjisi Yüzer Paneller: Su Kaybı ve Emisyon Azaltımı",
            time: "12 Eylül 2024"
        },
        {
            url: "https://www.homeyesil.com/yuzer-gunes-panelleri-barajlarda/",
            icon: "https://www.google.com/s2/favicons?domain=https://dergipark.org.tr&sz=32",
            sitename: "Home Yeşil",
            title: "Barajlar Üzerine Yüzer Güneş Panelleri: Yeni Bir Enerji Çözümü",
            time: "10 Ekim 2024"
        },
        {
            url: "https://www.yeşilgazete.org.tr/yuzer-gunes-enerjisi-barajlarda/",
            icon: "https://www.google.com/s2/favicons?domain=https://yesilgazete.org&sz=32",
            sitename: "Yeşil Gazete",
            title: "Yüzer Güneş Enerjisi Santralleri: Barajlarda Su Kaybı ve Enerji Verimliliği",
            time: "25 Eylül 2024"
        },
        {
            url: "https://www.indyturk.com/baraj-golleri-gunes-enerjisi/",
            icon: "https://www.google.com/s2/favicons?domain=https://www.indyturk.com&sz=32",
            sitename: "İndytürk",
            title: "Baraj Göllerinde Yüzer Güneş Panelleri: Su Tasarrufu ve Enerji Üretimi",
            time: "15 Ağustos 2024"
        },
        {
            url: "https://www.solarist.com/yuzer-gunes-panelleri-barajlar/",
            icon: "https://www.google.com/s2/favicons?domain=https://www.solar.ist&sz=32",
            sitename: "Solarist",
            title: "Yüzer Güneş Panelleriyle Barajlarda Daha Verimli Su Kullanımı",
            time: "22 Temmuz 2024"
        },
        {
            url: "https://www.cevreciyiz.com/yuzer-gunes-sistemleri-iklim-degisikligi/",
            icon: "https://www.google.com/s2/favicons?domain=https://dergipark.org.tr&sz=32",
            sitename: "Çevreciyiz",
            title: "Yüzer Güneş Panellerinin İklim Değişikliği Üzerindeki Etkileri",
            time: "8 Eylül 2024"
        },
        {
            url: "https://www.dunyaenerji.org.tr/gunes-enerjisi-yuzer-panelleri/",
            icon: "https://www.google.com/s2/favicons?domain=https://dunyaenerji.org.tr&sz=32",
            sitename: "Dünya Enerji",
            title: "Yüzer Güneş Enerjisi Santralleri: Barajlar Üzerinde Enerji Üretimi",
            time: "5 Ağustos 2024"
        },
        {
            url: "https://www.yuzerges.com/barajlarda-gunes-panelleri/",
            icon: "https://www.google.com/s2/favicons?domain=https://yuzerges.net&sz=32",
            sitename: "Yüzer Ges",
            title: "Yüzer Güneş Panelleri ile Barajlarda Verimli Su ve Enerji Kullanımı",
            time: "30 Temmuz 2024"
        }
    ];
    
  return (
    <main>
        <Header />
        <BluredPage />
        <div className='responsive mt-20 mb-12 flex flex-col items-center'>
            <Heading size='4xl'>Kaynaklar</Heading>
            <div className='flex flex-col gap-3 mt-12'>
                {kaynak.map(item => (
                    <Link href={item.url} key={item.sitename} className='bg-secondary/60 hover:bg-secondary/75 transition rounded-2xl flex flex-col gap-2 p-6'>
                        <div className='flex flex-col gap-0'>
                        <div className='flex items-center gap-2'>
                        <img src={item.icon} className={cn('rounded-full', {"bg-colored":item.icon==null})} width={22} height={22} />
                        <span className='font-semibold'>{item.sitename}</span>
                        </div>
                        <span className='text-sm text-muted font-medium'>{item.time}</span>
                        </div>
                        <span className='font-semibold'>{item.title}</span>
                    </Link>
                ))}
            </div>
        </div>
        <Footer />
    </main>
  )
}
