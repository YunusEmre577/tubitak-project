"use client"
import React from 'react'
import Heading from '../../ui/Heading';
import { settings, Slick } from '../../ui/Slick';
import whyWeDo from "@/components/json/why_we_do_this_project.json"
import { Icon } from '@iconify/react/dist/iconify.js';
import { cn } from '@/components/libs/utils';
import { Dialog, DialogBody, DialogFooter, DialogHeader, DialogMiddle, DialogTitle, DialogTrigger } from '@/components/ui/Dialog';
import { Button } from '../../ui/Button';
import { DialogClose } from '@radix-ui/react-dialog';
import { PlusIcon } from '@radix-ui/react-icons';
export default function Middle() {
  return (
    <section className='responsive flex flex-col gap-8 items-center'>
        <Heading size='4xl'>
            Neden bu projeyi yapıyoruz?
        </Heading>
        <div className=' w-full'>
          <Slick settings={{...settings,slidesToShow:3, responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow:2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow:1
              }
            }
          ], adaptiveHeight:false, dots:false}}>
            {whyWeDo.map(({title, icon, description, description2}, i) => (
             <div className='px-2.5' key={i+1}>
               <Dialog>
                <DialogTrigger>
                <div className={cn('p-5 cursor-pointer relative overflow-hidden flex flex-col items-start rounded-2xl border-tertiary border')}>
                <div className='absolute inset-0 bg-colored blur-[1150px] lg:blur-[400px] pointer-events-none' />
                <header className='flex flex-col items-start gap-3'>
                  <span className='text-2xl text-colored h-14 w-14 rounded-full border border-tertiary flex items-center justify-center'><Icon icon={`${icon}`} /></span>
                  <span className='font-bold text-base'>{title}</span>
                </header>
                <footer className='mt-2 flex flex-col'>
                  <span className="text-[15px] max-w-sm !text-start text-muted">{description}</span>
                </footer>
                <div className='flex justify-end w-full mt-4'>
                  <span className='h-9 w-9 bg-accent backdrop-blur-md flex justify-center text-foreground items-center text-2xl font-[100] rounded-full'>
                    <PlusIcon />
                </span>
                </div>
              </div>
                </DialogTrigger>
                <DialogBody className=''>
                  <DialogHeader>
                    <DialogTitle className='w-full flex items-center gap-3'><Icon className='text-colored' icon={icon as string} /><span className="">{title}</span></DialogTitle>
                  </DialogHeader>
                  <DialogMiddle>
                    <p className='text-muted'>{description2}</p>
                  </DialogMiddle>
                  <DialogFooter>
                    <DialogClose asChild>
                    <Button className='w-full lg:w-fit' icon={"solar:alt-arrow-right-outline"}>Çıkış</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogBody>
               </Dialog>
             </div>
            ))}
          </Slick>
        </div>
    </section>
  )
}
