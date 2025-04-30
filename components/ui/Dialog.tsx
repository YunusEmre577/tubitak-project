import React from 'react'
import * as Tool from "@radix-ui/react-dialog"
import Heading from './Heading';
import { cn } from '../libs/utils';
import { Cross2Icon } from '@radix-ui/react-icons';

const classnames = {
  overlay: "fixed data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out inset-0 z-[998] bg-secondary/60 backdrop-blur-md",
  content: "fixed data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out left-1/2 z-[999] top-1/2 max-h-[100vh] min-w-[400px] max-w-[calc(100%-6%)] lg:max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-black border border-muted/40"
}

function Dialog({children, ...props}:{children:React.ReactNode} & React.ComponentPropsWithoutRef<typeof Tool.Root>) {
    return (
        <Tool.Root {...props}>
            {children}
        </Tool.Root>
    )
}

function DialogTrigger({children, ...props}:{children:React.ReactNode} & React.ComponentPropsWithoutRef<typeof Tool.Trigger>) {
    return (
        <Tool.Trigger {...props}>
            {children}
        </Tool.Trigger>
    )
}

function DialogBody({children, className, ...props}:{children:React.ReactNode;className?:string} & React.ComponentPropsWithoutRef<typeof Tool.Content>) {
    return (
        <Tool.Portal>
            <Tool.Overlay className={cn(classnames["overlay"])} />
            <Tool.Content className={cn(classnames["content"], className)} {...props}>
                {children}
            </Tool.Content>
        </Tool.Portal>
    )
}

function DialogTitle({children, className, ...props}: {children: React.ReactNode} & React.ComponentPropsWithoutRef<typeof Heading>) {
    return (
            <Heading size='xl' {...props} className={className}>
                {children}
            </Heading>
    )
}

function DialogHeader({children}: {children: React.ReactNode}) {
    return (
        <header className="p-6 pb-0 flex justify-between items-center">
            <Tool.Title className='absolute' />
            {children}
            <Tool.Close asChild>
            <div className='h-9 w-9 rounded-lg flex justify-center items-center hover:bg-muted/25 transition'>
                <Cross2Icon />
            </div>
            </Tool.Close>
        </header>
    )
}

function DialogMiddle({children}: {children: React.ReactNode}) {
    return (
        <div className="p-6">
            {children}
        </div>
    )
}

function DialogFooter({children}: {children: React.ReactNode}) {
    return (
        <div className="p-6 flex flex-col lg:flex-row lg:justify-end gap-3 items-center">
            {children}
        </div>
    )
}

export {
    Dialog,
    DialogTrigger,
    DialogBody,
    DialogTitle,
    DialogHeader,
    DialogMiddle,
    DialogFooter
}
