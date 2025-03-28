import React from 'react'
import { cn } from '../libs/utils'

type HeadingProps = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
  className?: string
}

export default function Heading({ children, size = 'md', className }: HeadingProps) {
  const sizeClasses = {
    sm: 'text-xs lg:text-sm font-bold',
    md: 'text-sm lg:text-base font-bold',
    lg: 'text-base lg:text-lg font-extrabold',
    xl: 'text-lg lg:text-xl font-extrabold',
    '2xl': 'text-xl lg:text-2xl font-black',
    '3xl': 'text-2xl lg:text-3xl font-black',
    '4xl': 'text-3xl lg:text-4xl font-black',
    '5xl': 'text-4xl lg:text-5xl font-black',
    '6xl': 'text-5xl lg:text-6xl font-black',
    '7xl': 'text-6xl lg:text-7xl font-black',
    '8xl': 'text-7xl lg:text-8xl font-black',
    '9xl': 'text-8xl lg:text-9xl font-black',
  }

  return (
    <div >
      <h1 className={cn(`${sizeClasses[size]} font-bold`, className)}>{children}</h1>
    </div>
  )
}
