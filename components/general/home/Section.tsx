import React from 'react'
import Heading from '../../ui/Heading';
import team from "@/components/json/team_squad.json"
import { cn } from '@/components/libs/utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from '../../ui/Button';
import Link from 'next/link';
import { Dialog, DialogBody, DialogFooter, DialogHeader, DialogMiddle, DialogTrigger } from '@/components/ui/Dialog';
import { PlusIcon } from '@radix-ui/react-icons';
import { DialogClose } from '@radix-ui/react-dialog';
export default function Section() {
  return (
    <section className='responsive flex flex-col items-center gap-8'>
        <Heading size='4xl'>Ekip Kadrosu</Heading>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {team.map(({author, col_span, image, occ, desc}) => (
                <Dialog key={author}>
                  <DialogTrigger asChild>
                  <div className={cn("cursor-pointer border-accent relative overflow-hidden flex flex-col gap-2 justify-between border p-5 rounded-2xl", {
                    "row-span-2": col_span == 2
                })}>
                    <div className='absolute pointer-evens-none z-[-1] w-96 h-40 left-1/2 -translate-x-1/2 bg-colored blur-[500px]' />
                    <header className='flex items-center gap-2'>
                        <div className='h-9 w-9 flex bg-colored justify-center items-center rounded-full'>
                            {image != "" ? (
                                <>
                                <img className='rounded-full' height={36} width={36} src={image} alt="" />
                                </>
                            ) : (
                                <Icon icon={"solar:user-outline"} />
                            )}
                        </div>
                        <div className='flex flex-col gap-0'>
                            <span className='font-semibold text-base'>{author}</span>
                            <span className="text-muted text-[15px] font-medium">{occ}</span>
                        </div>
                    </header>
                    <section>
                        <p className='text-[15px] text-muted'>{desc}</p>
                    </section>
                        <footer className='justify-end flex items-center gap-3'>
                            {col_span && (
                              <Link href={"mailto:gpbp@protonmail.com"}>
                              <Button>İletişime geç</Button>
                              </Link>
                            )}
                            <Button isIconOnly><PlusIcon /></Button>
                        </footer>
                </div>
                  </DialogTrigger>
                  <DialogBody>
                    <DialogHeader>
                      <div className='flex items-center gap-2'>
                      <img className='rounded-full' height={36} width={36} src={image} alt="" />
                      <div className='flex flex-col gap-0'>
                        <span className='font-semibold text-foreground'>{author}</span>
                        <span className='text-sm text-muted font-medium'>{occ}</span>
                      </div>
                      </div>
                    </DialogHeader>
                    <DialogMiddle>
                      <p className='text-muted text-[15px]'>{desc}</p>
                    </DialogMiddle>
                    <DialogFooter>
                    {col_span && (
                          <Link className='w-full lg:w-fit' href={"mailto:gpbp@protonmail.com"}>
                          <Button className='w-full lg:w-fit'>İletişime geç</Button>
                          </Link>
                        )}
                      <DialogClose asChild>
                      <Button className='w-full lg:w-fit' icon={"solar:alt-arrow-right-outline"}>Çıkış</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogBody>
                </Dialog>
            ))}
        </div>
    </section>
  )
}
