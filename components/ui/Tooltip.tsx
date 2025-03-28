import React from 'react'
import * as Tool from "@radix-ui/react-tooltip"
import { cn } from '../libs/utils';

const classNames = {
    content: "data-[state=open]:animate-scale-in data-[state=instant-open]:animate-scale-out data-[state=delayed-open]:animate-scale-in data-[state=closed]:animate-scale-out select-none rounded-lg bg-secondary/60 backdrop-blur-sm py-3 px-6",
}
function Tooltip({children, ...props}: {children: React.ReactNode} & React.ComponentPropsWithoutRef<typeof Tool.Root>) {
  return (
    <Tool.Provider>
        <Tool.Root {...props}>
            {children}
        </Tool.Root>
    </Tool.Provider>
  )
}
function TooltipTrigger({children, ...props}: {children:React.ReactNode} & React.ComponentPropsWithoutRef<typeof Tool.Trigger>) {
    return(
        <Tool.Trigger {...props}>
            {children}
        </Tool.Trigger>
    )
}
function TooltipBody({children, className, ...props}: {children:React.ReactNode;className?:string} & React.ComponentPropsWithoutRef<typeof Tool.Content>) {
    return(
        <Tool.Portal>
            <Tool.Content className={cn(classNames["content"], className)} {...props}>
                {children}
                <Tool.Arrow className=' fill-secondary/60' />
            </Tool.Content>
        </Tool.Portal>
    )
}
export {
    Tooltip,
    TooltipTrigger,
    TooltipBody
}