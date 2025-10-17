import { ReactNode } from 'react'
import Lnb from '@/components/ui/common/Lnb'

interface MainLayoutProps {
  children: ReactNode
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="wrap">
      <Lnb />
      <div className="container">
        <div className="frame">{children}</div>
      </div>
    </div>
  )
}
