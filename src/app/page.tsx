'use client'
import { useState } from 'react'
import Lnb from '@/components/ui/common/Lnb'
import FullDownMenu from '@/components/ui/common/FullDownMenu'
import Header from '@/components/ui/Header'
import LoginMain from '@/components/main/LoginMain'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`wrap ${isOpen ? 'sm' : ''}`}>
      <Lnb isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="main-container">
        <div className="header-wrap">
          <FullDownMenu />
          <Header />
        </div>
        <LoginMain />
      </div>
    </div>
  )
}
