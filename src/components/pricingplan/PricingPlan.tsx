'use client'
import { useState } from 'react'
import AnimateHeight from 'react-animate-height'

export default function PricingPlan() {
  const [slideboxOpen, setSlideboxOpen] = useState(true)
  return (
    <div className="contents-wrap">
      <div className="contents-body">
        <div className="content-wrap">
          <div className={`slidebox-wrap ${slideboxOpen ? '' : 'close'}`}>
            <div className="slidebox-header">
              <h2>Header</h2>
              <div className="slidebox-btn-wrap">
                <button className="slidebox-btn">취소</button>
                <button className="slidebox-btn">저장</button>
                <button className="slidebox-btn arr" onClick={() => setSlideboxOpen(!slideboxOpen)}>
                  <i className="arr-icon"></i>
                </button>
              </div>
            </div>
            <AnimateHeight duration={300} height={slideboxOpen ? 'auto' : 0}>
              <div className="slidebox-body">
                <table className="default-table">
                  <colgroup>
                    <col width="190px" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr className="header-row">
                      <th>요금제명</th>
                      <td>STANDARD</td>
                    </tr>
                    <tr>
                      <th>
                        점포 <span className="red">*</span>
                      </th>
                      <td>
                        <div className="filed-flx">
                          <div className="mx-200">
                            <input type="text" className="input-frame" />
                          </div>
                          <div className="toggle-wrap">
                            <span className="toggle-txt">제한없음</span>
                            <div className="toggle-btn">
                              <input type="checkbox" id="toggle-btn" />
                              <label className="slider" htmlFor="toggle-btn"></label>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        직원 <span className="red">*</span>
                      </th>
                      <td>
                        <div className="filed-flx">
                          <div className="mx-200">
                            <input type="text" className="input-frame" disabled />
                          </div>
                          <div className="toggle-wrap">
                            <span className="toggle-txt">제한없음</span>
                            <div className="toggle-btn">
                              <input type="checkbox" id="toggle-btn" />
                              <label className="slider" htmlFor="toggle-btn"></label>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        포함기능 <span className="red">*</span>
                      </th>
                      <td>
                        <div className="pricing-check-wrap">
                          <button className="pricing-btn outline">점포관리</button>
                          <button className="pricing-btn outline act">직원관리</button>
                          <button className="pricing-btn outline">메뉴관리</button>
                          <button className="pricing-btn outline act">가격관리</button>
                          <button className="pricing-btn outline">카테고리관리</button>
                          <button className="pricing-btn outline act">시설물관리</button>
                          <button className="pricing-btn outline act">점검관리</button>
                          <button className="pricing-btn outline">출퇴근관리</button>
                          <button className="pricing-btn outline">재무관리</button>
                          <button className="pricing-btn outline">가맹점 관리</button>
                          <button className="pricing-btn outline">통계관리</button>
                          <button className="pricing-btn outline">마스터상속</button>
                          <button className="pricing-btn outline">통합관리</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AnimateHeight>
          </div>
        </div>
      </div>
    </div>
  )
}
