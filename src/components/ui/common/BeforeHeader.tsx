'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BeforeHeader() {
  const [isScrollDown, setIsScrollDown] = useState(false)

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const currentScrollY = window.scrollY

      // 스크롤 위치가 최상단(0)일 때는 동작하지 않음
      if (currentScrollY === 0) {
        return
      }

      if (event.deltaY > 0) {
        // 휠을 아래로 - off 클래스 추가
        setIsScrollDown(true)
      } else if (event.deltaY < 0) {
        // 휠을 위로 - off 클래스 제거
        setIsScrollDown(false)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className={`before-header ${isScrollDown ? 'off' : ''}`}>
      <div className="before-header-wrap">
        <div className="before-logo">
          <Link href="/main">
            <Image src="/assets/images/before_main/Logo.svg" alt="logo" fill />
          </Link>
        </div>
        <ul className="before-menu-list">
          <li className="before-menu-item">
            <Link href="/main">매장운영</Link>
          </li>
          <li className="before-menu-item">
            <Link href="/main">재무관리</Link>
          </li>
          <li className="before-menu-item">
            <Link href="/main">프랜차이즈</Link>
          </li>
          <li className="before-menu-item">
            <Link href="/main">요금안내</Link>
          </li>
        </ul>
        <div className="before-sub-menu">
          <ul className="before-sub-menu-list">
            <li className="before-sub-menu-item">
              <Link className="login" href="/main">
                <i className="icon-login"></i>LOGIN
              </Link>
            </li>
            <li className="before-sub-menu-item">
              <Link href="/main">도입문의</Link>
            </li>
            <li className="before-sub-menu-item">
              <Link href="/main">공지사항</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
