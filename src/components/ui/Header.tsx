import Link from 'next/link'

import MyData from './common/MyData'
import ServiceTab from './common/ServiceTab'

export default function Header({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  return (
    <header>
      <div className="header-pc">
        <div className="data-wrap">
          <ServiceTab />
          <MyData />
        </div>
      </div>
      <div className="header-mb">
        <Link href="/">
          <img src="/assets/images/ui/mb_logo.svg" alt="logo" />
        </Link>
        <div className="list-btn-wrap">
          <button className={`menu-btn ${isOpen ? 'act' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
