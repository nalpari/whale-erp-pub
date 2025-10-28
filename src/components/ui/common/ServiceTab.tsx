'use client'
import AnimateHeight from 'react-animate-height'
import { useState } from 'react'

export default function ServiceTab() {
  const [tabOpen, setTabOpen] = useState(false)
  return (
    <div className={`service-tab ${tabOpen ? 'act' : ''}`}>
      <div className="service-menu">
        <div className="service-guide">서비스 바로가기</div>
        <div className="service-menu-list">
          <button className="service-item icon01">
            <img src="/assets/images/common/service_icon01.svg" alt="service-icon01" />
          </button>
          <button className="service-item icon02">
            <img src="/assets/images/common/service_icon02.svg" alt="service-icon02" />
          </button>
          <button className="service-item icon03">
            <img src="/assets/images/common/service_icon03.svg" alt="service-icon03" />
          </button>
          <button className="service-item icon04">
            <img src="/assets/images/common/service_icon04.svg" alt="service-icon04" />
          </button>
          <button className="service-item service-tab" onClick={() => setTabOpen(!tabOpen)}></button>
        </div>
      </div>
      <AnimateHeight duration={200} height={tabOpen ? 'auto' : 0} animateOpacity>
        <div className="service-menu-list-wrap">
          {Array.from({ length: 8 }).map((_, index) => (
            <button className="service-menu-list-item" key={index}>
              <div className="service-item-icon">
                <img src="/assets/images/common/service_icon01.svg" alt="" />
              </div>
              <div className="service-item-name">서비스명</div>
            </button>
          ))}
        </div>
      </AnimateHeight>
    </div>
  )
}
