'use client'
import AnimateHeight from 'react-animate-height'
import { useState } from 'react'

export default function MasterSearch() {
  const [searchOpen, setSearchOpen] = useState(true)
  return (
    <div className={`search-wrap ${searchOpen ? '' : 'act'}`}>
      <div className="searh-result-wrap" onClick={() => setSearchOpen(!searchOpen)}>
        <div className="search-result">
          검색결과 <span>128건</span>
        </div>
        <button className="search-filed-btn"></button>
      </div>
      <AnimateHeight duration={300} height={searchOpen ? 'auto' : 0}>
        <div className="search-filed">
          <table className="default-table">
            <tbody>
              <tr>
                <th>매장</th>
                <td>
                  <div>
                    <select name="" id="" className="select-form">
                      <option value="">전체</option>
                    </select>
                  </div>
                </td>
                <th>처리여부</th>
                <td>
                  <div className="filed-check-flx">
                    <div className="radio-form-box">
                      <input type="radio" name="process" id="process-all" />
                      <label htmlFor="process-all">전체</label>
                    </div>
                    <div className="radio-form-box">
                      <input type="radio" name="process" id="process-all" />
                      <label htmlFor="process-all">전체</label>
                    </div>
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
