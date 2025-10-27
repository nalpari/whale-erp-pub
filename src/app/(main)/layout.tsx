'use client'
import { ReactNode, useState } from 'react'
import Lnb from '@/components/ui/common/Lnb'

interface MainLayoutProps {
  children: ReactNode
}
export default function MainLayout({ children }: MainLayoutProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`wrap ${isOpen ? 'sm' : ''}`}>
      <Lnb isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="container">
        <div className="frame">{children}</div>
      </div>
    </div>
  )
}
