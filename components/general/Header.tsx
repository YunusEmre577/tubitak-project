"use client"
import React from 'react'
import headerContents from "@/components/json/header_contents.json"
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { usePathname } from 'next/navigation'
import { cn } from '../libs/utils'
import { Tooltip, TooltipBody, TooltipTrigger } from '../ui/Tooltip'
import { AnimatePresence, motion } from 'framer-motion'

function LinkButton({title, icon, href, soon, ...props}: {title:string, icon:string, href:string,soon:boolean}) {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    {...props}
                    href={href}
                    className={cn(
                        'p-4 relative hover:bg-secondary group transition rounded-full flex items-center gap-3',
                        { 'px-6': isActive }
                    )}
                >
                    <AnimatePresence>
                        {isActive && (
                            <motion.div
                                layoutId="link-active-bg"
                                className="absolute inset-0 bg-secondary rounded-full z-[-1]"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </AnimatePresence>

                    <span className="text-lg">
                        <Icon icon={`${icon}-${isActive ? "bold" : "outline"}`} />
                    </span>

                    <AnimatePresence mode="wait">
                        {isActive && (
                            <motion.span
                                key={title}
                                className="text-[15px] flex items-center gap-2 font-medium text-foreground"
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 8 }}
                                transition={{ duration: 0.2 }}
                            >
                                {title}
                            </motion.span>
                        )}
                    </AnimatePresence>
                    {soon&&(
                                    <span className='uppercase text-[8px] font-[300] text-colored bg-colored/25 rounded-lg p-0.5 px-1'>yakinda</span>
                                )}
                </Link>
            </TooltipTrigger>
            <TooltipBody>
                <div className="flex items-center gap-2 text-[15px] font-medium">
                    <span><Icon icon={`${icon}-outline`} /></span>
                    <span>{title}</span>
                </div>
            </TooltipBody>
        </Tooltip>
    )
}

export default function Header() {
  return (
    <header className="flex sticky z-[99] top-0 pt-6 responsive items-center justify-center">
        <div className='p-1 bg-secondary/75 backdrop-blur-sm rounded-full'>
            <nav className='flex items-center gap-1'>
                {headerContents.map(({title, href, icon, soon}: {title:string;href:string;icon:string;soon:boolean;}) => (
                    <LinkButton title={title} href={href} icon={icon} soon={soon} key={href}/>
                ))}
            </nav>
        </div>
    </header>
  )
}

