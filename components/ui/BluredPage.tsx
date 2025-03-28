import React from 'react'

export function BluredPage() {
  return (
    <>
    <div className="absolute w-80 h-80 blur-[300px] bg-colored left-0 pointer-events-none" />
    <div className="absolute w-80 h-80 blur-[300px] hidden lg:flex bg-colored right-0 pointer-events-none" />
    </>
  )
}
