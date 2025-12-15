'use client'
import AnimateHeight from 'react-animate-height'
import { useState } from 'react'

export default function MasterSearch() {
  const [searchOpen, setSearchOpen] = useState(true)
  return (
    <div className={`search-wrap ${searchOpen ? '' : 'act'}`}>
      <div className="searh-result-wrap">
        <div className="search-result">
          검색결과 <span>128건</span>
        </div>
        <button className="search-filed-btn" onClick={() => setSearchOpen(!searchOpen)}></button>
      </div>
      <AnimateHeight duration={300} height={searchOpen ? 'auto' : 0}>
        <div className="search-filed">
          <table className="default-table">
            <colgroup>
              <col width="120px" />
              <col />
              <col width="120px" />
              <col />
              <col width="120px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>본사</th>
                <td>
                  <div className="data-filed">
                    <select name="" id="" className="select-form">
                      <option value="">전체</option>
                    </select>
                  </div>
                </td>
                <th>가맹점</th>
                <td>
                  <div className="data-filed">
                    <select name="" id="" className="select-form">
                      <option value="">전체</option>
                    </select>
                  </div>
                </td>
                <th>대표자명</th>
                <td>
                  <div className="data-filed">
                    <input type="text" className="input-frame" />
                  </div>
                </td>
              </tr>
              <tr>
                <th>운영여부</th>
                <td>
                  <div className="filed-check-flx">
                    <div className="radio-form-box">
                      <input type="radio" name="process" id="process-all" />
                      <label htmlFor="process-all">전체</label>
                    </div>
                    <div className="radio-form-box">
                      <input type="radio" name="process" id="process-all" />
                      <label htmlFor="process-all">상담중</label>
                    </div>
                    <div className="radio-form-box">
                      <input type="radio" name="process" id="process-all" />
                      <label htmlFor="process-all">운영</label>
                    </div>
                    <div className="radio-form-box">
                      <input type="radio" name="process" id="process-all" />
                      <label htmlFor="process-all">종료</label>
                    </div>
                  </div>
                </td>
                <th>서비스</th>
                <td>
                  <div className="data-filed">
                    <select name="" id="" className="select-form">
                      <option value="">전체</option>
                    </select>
                  </div>
                </td>
                <th>등록일</th>
                <td>
                  <div className="date-picker-custom">
                    <select name="" id="" className="select-form">
                      <option value="">전체</option>
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btn-filed">
            <button className="btn-form gray">닫기</button>
            <button className="btn-form gray">초기화</button>
            <button className="btn-form basic">검색</button>
          </div>
        </div>
      </AnimateHeight>
    </div>
  )
}
