'use client'
import { Tooltip } from 'react-tooltip'

export default function MenuInfoCode() {
  return (
    <div className="contents-wrap">
      <div className="content-body">
        <div className="content-wrap">
          <table className="default-table">
            <colgroup>
              <col width="140px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>본사/가맹점 선택</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <select name="" id="" className="select-form">
                        <option value="">전체</option>
                      </select>
                    </div>
                    <div className="block">
                      <select name="" id="" className="select-form">
                        <option value="">전체</option>
                      </select>
                    </div>
                    <button className="btn-form basic">검색</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-wrap">
          <div className="preferences-tab">
            <button className="preferences-menu act">메뉴 분류</button>
            <button className="preferences-menu">마케팅 분류</button>
            <button className="preferences-menu">온도 분류</button>
          </div>
          <div className="preferences-contents">
            <div className="contents-btn">
              <button className="btn-form basic">저장</button>
            </div>
            <div className="preferences-content-wrap">
              <div className="preferences-guide">
                <span>1. 판매하시는 메뉴의 성격에 따라 분류를 등록합니다.</span>
                <span>2. 메뉴의 물리적 성격에 따라 음료, 쿠키, 베이커리, 기타 등으로 등록할 수 있습니다.</span>
              </div>
              <table className="default-table white">
                <colgroup>
                  <col width="180px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <div className="option-num-tit">
                        <span>메뉴 분류 #1</span>
                        <button className="sequence-btn"></button>
                      </div>
                    </th>
                    <td>
                      <div className="filed-flx">
                        <div className="block">
                          <input type="text" className="input-frame" />
                        </div>
                        <div className="auto-right">
                          <div className="more-btn">
                            <span className="icon-more" id="more-btn-anchor-partner-function"></span>
                            <Tooltip
                              className="option-list"
                              anchorSelect="#more-btn-anchor-partner-function"
                              place="right-end"
                              offset={0}
                              openOnClick={true} // 클릭으로 열기
                              clickable={true} // 툴팁 내부 클릭 가능
                              opacity={1}
                            >
                              <button className="option-item">Partner Fuction 추가</button>
                              <button className="option-item">Partner Fuction 삭제</button>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="option-num-tit">
                        <span>메뉴 분류 #2</span>
                        <button className="sequence-btn"></button>
                      </div>
                    </th>
                    <td>
                      <div className="filed-flx">
                        <div className="block">
                          <input type="text" className="input-frame" />
                        </div>
                        <div className="auto-right">
                          <div className="more-btn">
                            <span className="icon-more" id="more-btn-anchor-partner-function"></span>
                            <Tooltip
                              className="option-list"
                              anchorSelect="#more-btn-anchor-partner-function"
                              place="right-end"
                              offset={0}
                              openOnClick={true} // 클릭으로 열기
                              clickable={true} // 툴팁 내부 클릭 가능
                              opacity={1}
                            >
                              <button className="option-item">Partner Fuction 추가</button>
                              <button className="option-item">Partner Fuction 삭제</button>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
