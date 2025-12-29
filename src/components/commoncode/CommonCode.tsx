'use client'
import { Tooltip } from 'react-tooltip'
import Pagination from '../ui/Pagination'

export default function CommonCode() {
  return (
    <div className="data-list-wrap">
      <div className="data-list-header">
        <div className="data-header-right">
          <button className="btn-form basic">등록</button>
          <div className="data-count-select">
            <select name="" id="" className="select-form">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
              <option value="">50</option>
            </select>
          </div>
        </div>
      </div>
      <div className="data-list-bx">
        <div className="common-code-wrap">
          <div className="common-code-item">
            <ul className="detail-data-list">
              <li className="detail-data-item">
                <span>운영</span>
              </li>
              <li className="detail-data-item">
                <span>100200</span>
              </li>
              <li className="detail-data-item">
                <span>USER_TP</span>
              </li>
              <li className="detail-data-item">
                <span>USER_TP</span>
              </li>
              <li className="detail-data-item">
                <span>Business Partner 운영 여부</span>
              </li>
            </ul>
            <div className="code-right">
              <div className="more-btn">
                <span className="icon-more" id="more-btn-anchor-partner-function"></span>
                <Tooltip
                  className="option-list"
                  anchorSelect="#more-btn-anchor-partner-function"
                  place="left-end"
                  offset={0}
                  openOnClick={true} // 클릭으로 열기
                  clickable={true} // 툴팁 내부 클릭 가능
                  opacity={1}
                >
                  <button className="option-item">
                    <div>Relation code 1</div>
                    <div>홍길동</div>
                  </button>
                  <button className="option-item">
                    <div>Relation code 1</div>
                    <div>홍길동</div>
                  </button>
                  <button className="option-item">
                    <div>Relation code 1</div>
                    <div>홍길동</div>
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="common-code-item">
            <ul className="detail-data-list">
              <li className="detail-data-item">
                <span>운영</span>
              </li>
              <li className="detail-data-item">
                <span>100200</span>
              </li>
              <li className="detail-data-item">
                <span>USER_TP</span>
              </li>
              <li className="detail-data-item">
                <span>USER_TP</span>
              </li>
              <li className="detail-data-item">
                <span>Business Partner 운영 여부</span>
              </li>
            </ul>
            <div className="code-right">
              <button className="btn-form outline s">수정</button>
            </div>
          </div>
          <div className="common-code-item">
            <ul className="detail-data-list">
              <li className="detail-data-item">
                <span>운영</span>
              </li>
              <li className="detail-data-item">
                <span>100200</span>
              </li>
              <li className="detail-data-item">
                <span>USER_TP</span>
              </li>
              <li className="detail-data-item">
                <span>USER_TP</span>
              </li>
              <li className="detail-data-item">
                <span>Business Partner 운영 여부</span>
              </li>
            </ul>
            <div className="code-right">
              <div className="more-btn">
                <span className="icon-more" id="more-btn-anchor-partner-function"></span>
                <Tooltip
                  className="option-list"
                  anchorSelect="#more-btn-anchor-partner-function"
                  place="left-end"
                  offset={0}
                  openOnClick={true} // 클릭으로 열기
                  clickable={true} // 툴팁 내부 클릭 가능
                  opacity={1}
                >
                  <button className="option-item">
                    <div>Relation code 1</div>
                    <div>홍길동</div>
                  </button>
                  <button className="option-item">
                    <div>Relation code 1</div>
                    <div>홍길동</div>
                  </button>
                  <button className="option-item">
                    <div>Relation code 1</div>
                    <div>홍길동</div>
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="common-code-item">
            <ul className="detail-data-list">
              <li className="detail-data-item">
                <span>운영</span>
              </li>
              <li className="detail-data-item">
                <span>100200</span>
              </li>
              <li className="detail-data-item">
                <span>USER_TP</span>
              </li>
              <li className="detail-data-item">
                <span>USER_TP</span>
              </li>
              <li className="detail-data-item">
                <span>Business Partner 운영 여부</span>
              </li>
            </ul>
            <div className="code-right">
              <button className="btn-form outline s">수정</button>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  )
}
