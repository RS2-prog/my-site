import React from 'react'
import { PageContentProps } from './NavigationMenu'

const Label: React.FC<PageContentProps> = ({ id, label }) => {
  return (
    <div 
      id={id}
      className='font-mono text-[32px] relative inline-block after:absolute after:left-0 after:top-1/2 after:w-full after:h-full after:border-b-[1px] after:border-black after:-translate-y-1/2 '
    >
      {label}
    </div>
  )
}

export default Label
