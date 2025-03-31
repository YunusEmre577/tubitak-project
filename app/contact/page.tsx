"use client"
import Header from '@/components/general/Header'
import { BluredPage } from '@/components/ui/BluredPage'
import React, { useState } from 'react'
import Heading from '../../components/ui/Heading';
import { TextField } from '@/components/ui/TextField';
import Footer from '@/components/general/Footer';
import { Button } from '../../components/ui/Button';
import { Cross2Icon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';

export default function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [name, setName] = useState<string|null>("");
    const [email, setEmail] = useState<string|null>("");
    const [title, setTitle] = useState<string|null>("");
    const [success, setSuccess] = useState<string>("")
    const handleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
        setSuccess("İleti başarıyla gönderildi.")
        setName(null)
        setEmail(null)
        setTitle(null)
        setIsLoading(false);
        }, 3000)
        setTimeout(() => {
            setSuccess("")
        }, 6000)
    }
  return (
    <main>
        <AnimatePresence>
        {success != "" && (
            <motion.div
            initial={{opacity:0, y:-8}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-8}}
            className='relative top-0 flex w-full p-4 bg-secondary/60 backdrop-blur-md items-center justify-between'>
                <span className='text-[15px] text-foreground font-medium'>{success}</span>
                <button onClick={() => setSuccess("")} className='h-9 w-9 rounded-full text-foreground flex items-center justify-center transition hover:bg-muted/25'>
                    <Cross2Icon />
                </button>
            </motion.div>
        )}
        </AnimatePresence>
        <Header />
        <BluredPage />
        <section className='px-6 mb-14 lg:mb-32 flex flex-col gap-8 items-center pt-20'>
            <header className='flex flex-col gap-3 items-center text-center'>
            <Heading className='text-center' size='4xl'>Bizimle iletişime geç</Heading>
            <p className='text-lg text-muted'>Aşağıdaki formu doldurup bizimle iletişime geçebilirsin, bu sayede kendimizi geliştirmemize yardımcı olabilirsin</p>
            </header>
            <footer className='grid grid-cols-1 w-[calc(100%-25%)] gap-6'>
                <div className='flex flex-col lg:flex-row items-center gap-6 w-full'>
                <TextField value={name ?? ""} onChange={(e) => setName(e.target.value)} className='w-full' placeholder='İsim' />
                <TextField value={email ?? ""} onChange={(e) => setEmail(e.target.value)} className='w-full' placeholder='E-posta adresi' />
                </div>
                <TextField value={title ?? ""} onChange={(e) => setTitle(e.target.value)} className='' placeholder='Konu Başlığı' />
                <div className='flex flex-col items-center text-center gap-4'>
                    <p className='text-base text-muted'>Gönderdikten sonra size E-posta göndereceğiz ve ayrıntılı iletişim halinde olacağız.</p>
                <Button disabled={!name || !email || !title || name.length < 3 || email.length<5||title.length<8 || !email.includes("@") || !email.includes(".")} onClick={handleSubmit} loading={isLoading} className="w-fit " icon={"solar:alt-arrow-right-outline"}>
                    <span>Gönder</span>
                    <span>Gönderiliyor</span>
                </Button>
                </div>
            </footer>
        </section>

        <Footer />
    </main>
  )
}
