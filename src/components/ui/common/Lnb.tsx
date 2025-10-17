'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Lnb() {
  return (
    <div className="lnb">
      <button className="lnb-toggle-btn"></button>
      <div className="lnb-header">
        <Link href="/" className="lnb-logo">
          <Image src="/assets/images/ui/lnb_logo.svg" alt="logo" fill />
          <div className="lnb-logo-text">
            <span className="logo-main">whale ERP</span>
            <span>management System</span>
          </div>
        </Link>
      </div>
      <div className="lnb-menu-info">
        <div className="lnb-menu-icon">
          <Image src="/assets/images/ui/lnb_menu_img01.svg" alt="menu" fill />
        </div>
        <div className="lnb_menu_name">서비스 네이밍</div>
      </div>
      <div className="lnb-body">
        <ul className="lnb-list">
          <li className="lnb-item">
            <Link href="#" className="menu-depth01" onClick={(e) => e.preventDefault()}>
              <Image src="/assets/images/ui/lnb_menu_icon02.svg" alt="menu" fill />
              <span className="lnb-menu-name">Master data 관리</span>
            </Link>
            <ul className="lnb-list-depth02">
              <li className="lnb-depth02-item">
                <Link href="#" className="menu-depth02">
                  <span className="lnb-menu-name">Business Partner Master</span>
                </Link>
              </li>
              <li className="lnb-depth02-item">
                <Link href="#" className="menu-depth02">
                  <span className="lnb-menu-name">회원 Master</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
