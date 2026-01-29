'use client'
import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { Tooltip } from 'react-tooltip'

export default function AuthorityTable() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['depth-01', 'depth-01-01']))

  const handleToggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const handleAllClose = () => {
    setOpenItems(new Set())
  }
  return (
    <div className="contents-wrap">
      <div className="contents-btn">
        <button className="btn-form gray">목록</button>
        <button className="btn-form gray">권한 관리자</button>
        <button className="btn-form gray ">삭제</button>
        <button className="btn-form basic">저장</button>
      </div>
      <div className="contents-body">
        <div className="content-wrap">
          <table className="default-table">
            <colgroup>
              <col width="180px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>권한 소유</th>
                <td>
                  <div className="filed-check-flx">
                    <div className="radio-form-box">
                      <input type="radio" name="authority-owner" id="authority-owner-01" />
                      <label htmlFor="authority-owner-01">플렛폼</label>
                    </div>
                    <div className="radio-form-box">
                      <input type="radio" name="authority-owner" id="authority-owner-02" />
                      <label htmlFor="authority-owner-02">본사</label>
                    </div>
                    <div className="radio-form-box">
                      <input type="radio" name="authority-owner" id="authority-owner-03" />
                      <label htmlFor="authority-owner-03">가맹점</label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>본사/가맹점 선택</th>
                <td>
                  <div className="filed-flx">
                    <div className="mx-500">
                      <select name="" id="" className="select-form">
                        <option value="">전체</option>
                      </select>
                    </div>
                    <div className="mx-500">
                      <select name="" id="" className="select-form">
                        <option value="">전체</option>
                      </select>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  권한명 <span className="red">*</span>
                </th>
                <td>
                  <div className="mx-500">
                    <input type="text" className="input-frame" />
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  운영여부 <span className="red">*</span>
                </th>
                <td>
                  <div className="filed-flx">
                    <div className="filed-check-flx">
                      <div className="radio-form-box">
                        <input type="radio" name="authority-status" id="authority-status-01" />
                        <label htmlFor="authority-status-01">운영</label>
                      </div>
                      <div className="radio-form-box">
                        <input type="radio" name="authority-status" id="authority-status-02" />
                        <label htmlFor="authority-status-02">미운영</label>
                      </div>
                    </div>
                    <div className="explain">※ ‘운영’인 경우에만 관리자에게 권한을 부여할 수 있습니다.</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>권한 설명</th>
                <td>
                  <div className="block">
                    <input type="text" className="input-frame" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-wrap">
          <div className="authority-table-wrap">
            <div className="authority-table-header">
              <button className="tooltip-btn">
                <span className="tooltip-icon" id="tooltip-btn-anchor"></span>
                <Tooltip className="tooltip-txt" anchorSelect="#tooltip-btn-anchor" opacity={1}>
                  <div>기존에 등록된 메뉴별 권한을 copy하여 현재 조회/등록 중인 권한을 만들 수 있습니다.</div>
                </Tooltip>
              </button>
              <div className="default-txt">다른 권한 COPY</div>
              <div className="hierarchy-select">
                <select name="" id="" className="select-form">
                  <option value="">선택</option>
                </select>
              </div>
              <div className="hierarchy-select">
                <select name="" id="" className="select-form">
                  <option value="">선택</option>
                </select>
              </div>
              <button className="btn-form basic">적용하기</button>
              <button className="btn-form gray">
                <i className="check"></i>Read
              </button>
              <button className="btn-form outline s">Create, Delete</button>
              <button className="btn-form gray">
                <i className="check"></i>Update
              </button>
              <button className="btn-form basic s">
                <i className="plus"></i> 최상위 추가
              </button>
              <button className="btn-form gray s" onClick={handleAllClose}>
                All Close
              </button>
            </div>
            <div className="hierarchy-wrap">
              <ul className="hierarchy-list depth01">
                <li className={`hierarchy-item ${openItems.has('depth-01') ? 'open' : ''}`}>
                  <div className="hierarchy-depth">
                    <button className="order-btn"></button>
                    <div className="depth-inner">
                      <button
                        className="depth-arr"
                        aria-label="하위 메뉴 토글"
                        onClick={() => handleToggleItem('depth-01')}
                      ></button>
                      <div className="depth-name">Master Data</div>
                    </div>
                    <div className="depth-right">
                      <div className="authority-check">
                        <div className="check-form-box">
                          <input type="checkbox" id="checkbox-01" />
                          <label htmlFor="checkbox-01">Read</label>
                        </div>
                        <div className="check-form-box">
                          <input type="checkbox" id="checkbox-02" />
                          <label htmlFor="checkbox-02">Create, Delete</label>
                        </div>
                        <div className="check-form-box">
                          <input type="checkbox" id="checkbox-03" />
                          <label htmlFor="checkbox-03">Update</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <AnimateHeight duration={300} height={openItems.has('depth-01') ? 'auto' : 0}>
                    <ul className="hierarchy-list depth02">
                      <li className={`hierarchy-item ${openItems.has('depth-01-01') ? 'open' : ''}`}>
                        <div className="hierarchy-depth">
                          <button className="order-btn"></button>
                          <div className="depth-inner">
                            <button
                              className="depth-arr"
                              onClick={() => handleToggleItem('depth-01-01')}
                              aria-label="하위 메뉴 토글"
                            ></button>
                            <div className="depth-name">Product Master</div>
                          </div>
                          <div className="depth-right">
                            <div className="authority-check">
                              <div className="check-form-box">
                                <input type="checkbox" id="checkbox-01" />
                                <label htmlFor="checkbox-01">Read</label>
                              </div>
                              <div className="check-form-box">
                                <input type="checkbox" id="checkbox-02" />
                                <label htmlFor="checkbox-02">Create, Delete</label>
                              </div>
                              <div className="check-form-box">
                                <input type="checkbox" id="checkbox-03" />
                                <label htmlFor="checkbox-03">Update</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AnimateHeight duration={300} height={openItems.has('depth-01-01') ? 'auto' : 0}>
                          <ul className="hierarchy-list depth03">
                            <li className="hierarchy-item">
                              <div className="hierarchy-depth">
                                <button className="order-btn"></button>
                                <div className="depth-inner">
                                  <div className="depth-name">Product</div>
                                </div>
                                <div className="depth-right">
                                  <div className="authority-check">
                                    <div className="check-form-box">
                                      <input type="checkbox" id="checkbox-01" />
                                      <label htmlFor="checkbox-01">Read</label>
                                    </div>
                                    <div className="check-form-box">
                                      <input type="checkbox" id="checkbox-02" />
                                      <label htmlFor="checkbox-02">Create, Delete</label>
                                    </div>
                                    <div className="check-form-box">
                                      <input type="checkbox" id="checkbox-03" />
                                      <label htmlFor="checkbox-03">Update</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="hierarchy-item">
                              <div className="hierarchy-depth">
                                <button className="order-btn"></button>
                                <div className="depth-inner">
                                  <div className="depth-name">Sales BOM List</div>
                                </div>
                                <div className="depth-right">
                                  <div className="authority-check">
                                    <div className="check-form-box">
                                      <input type="checkbox" id="checkbox-01" />
                                      <label htmlFor="checkbox-01">Read</label>
                                    </div>
                                    <div className="check-form-box">
                                      <input type="checkbox" id="checkbox-02" />
                                      <label htmlFor="checkbox-02">Create, Delete</label>
                                    </div>
                                    <div className="check-form-box">
                                      <input type="checkbox" id="checkbox-03" />
                                      <label htmlFor="checkbox-03">Update</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </AnimateHeight>
                      </li>
                      <li className={`hierarchy-item ${openItems.has('depth-01-02') ? 'open' : ''}`}>
                        <div className="hierarchy-depth">
                          <button className="order-btn"></button>
                          <div className="depth-inner">
                            <button
                              className="depth-arr"
                              onClick={() => handleToggleItem('depth-01-02')}
                              aria-label="하위 메뉴 토글"
                            ></button>
                            <div className="depth-name">Master Data</div>
                          </div>
                          <div className="depth-right">
                            <div className="authority-check">
                              <div className="check-form-box">
                                <input type="checkbox" id="checkbox-01" />
                                <label htmlFor="checkbox-01">Read</label>
                              </div>
                              <div className="check-form-box">
                                <input type="checkbox" id="checkbox-02" />
                                <label htmlFor="checkbox-02">Create, Delete</label>
                              </div>
                              <div className="check-form-box">
                                <input type="checkbox" id="checkbox-03" />
                                <label htmlFor="checkbox-03">Update</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AnimateHeight duration={300} height={openItems.has('depth-01-02') ? 'auto' : 0}>
                          <ul className="hierarchy-list depth03">
                            <li className="hierarchy-item">
                              <div className="hierarchy-depth">
                                <button className="order-btn"></button>
                                <div className="depth-inner">
                                  <div className="depth-name">Customer Master</div>
                                </div>
                                <div className="depth-right">
                                  <div className="authority-check">
                                    <div className="check-form-box">
                                      <input type="checkbox" id="checkbox-01" />
                                      <label htmlFor="checkbox-01">Read</label>
                                    </div>
                                    <div className="check-form-box">
                                      <input type="checkbox" id="checkbox-02" />
                                      <label htmlFor="checkbox-02">Create, Delete</label>
                                    </div>
                                    <div className="check-form-box">
                                      <input type="checkbox" id="checkbox-03" />
                                      <label htmlFor="checkbox-03">Update</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </AnimateHeight>
                      </li>
                    </ul>
                  </AnimateHeight>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
