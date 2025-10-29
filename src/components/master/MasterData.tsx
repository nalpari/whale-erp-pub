'use client'
import { useState } from 'react'
import AnimateHeight from 'react-animate-height'

export default function MasterData() {
  const [slideboxOpen, setSlideboxOpen] = useState(true)
  return (
    <>
      <div className={`slidebox-wrap ${slideboxOpen ? '' : 'close'}`}>
        <div className="slidebox-header">
          <h2>계약서 템플릿 Header 정보</h2>
          <div className="slidebox-btn-wrap">
            <button className="slidebox-btn">수정</button>
            <button className="slidebox-btn">삭제</button>
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
                <col width="120px" />
                <col />
                <col width="120px" />
                <col />
                <col width="120px" />
                <col />
              </colgroup>
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
                        <input type="radio" name="process1" id="process1-all" />
                        <label htmlFor="process1-all">전체</label>
                      </div>
                      <div className="radio-form-box">
                        <input type="radio" name="process1" id="process1-part" />
                        <label htmlFor="process1-part">부분</label>
                      </div>
                    </div>
                  </td>
                  <th>처리여부</th>
                  <td>
                    <div className="filed-check-flx">
                      <div className="check-form-box">
                        <input type="checkbox" name="process2" id="process2-all" />
                        <label htmlFor="process2-all">전체</label>
                      </div>
                      <div className="check-form-box">
                        <input type="checkbox" name="process2" id="process2-part" />
                        <label htmlFor="process2-part">부분</label>
                      </div>
                    </div>
                  </td>
                </tr>
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
                  <td colSpan={3}>
                    <input type="text" className="input-frame" />
                  </td>
                </tr>
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
                        <input type="radio" name="process3" id="process3-all" />
                        <label htmlFor="process3-all">전체</label>
                      </div>
                      <div className="radio-form-box">
                        <input type="radio" name="process3" id="process3-part" />
                        <label htmlFor="process3-part">부분</label>
                      </div>
                    </div>
                  </td>
                  <th>처리여부</th>
                  <td>
                    <div className="filed-check-flx">
                      <div className="radio-form-box">
                        <input type="radio" name="process4" id="process4-all" />
                        <label htmlFor="process4-all">전체</label>
                      </div>
                      <div className="radio-form-box">
                        <input type="radio" name="process4" id="process4-part" />
                        <label htmlFor="process4-part">부분</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>매장</th>
                  <td colSpan={5}>
                    <div>
                      <select name="" id="" className="select-form">
                        <option value="">전체</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>매장</th>
                  <td colSpan={5}>
                    <div>
                      <select name="" id="" className="select-form">
                        <option value="">전체</option>
                      </select>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="slide-table-wrap">
              <h3>계약서 템플릿 목록</h3>
              <table className="default-table">
                <colgroup>
                  <col width="120px" />
                  <col />
                  <col width="120px" />
                  <col />
                </colgroup>
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
            </div>
          </div>
        </AnimateHeight>
      </div>
    </>
  )
}
