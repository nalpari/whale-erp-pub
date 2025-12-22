'use client'
import { useState } from 'react'
import AnimateHeight from 'react-animate-height'

export default function MasterEdit() {
  const [slideboxOpen, setSlideboxOpen] = useState(true)
  return (
    <div className="master-detail-data">
      <div className={`slidebox-wrap ${slideboxOpen ? '' : 'close'}`}>
        <div className="slidebox-header">
          <h2>Business Partner Header 정보 관리</h2>
          <div className="slidebox-btn-wrap">
            <button className="slidebox-btn">임시저장</button>
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
                <tr>
                  <th>운영여부</th>
                  <td>
                    <div className="filed-check-flx">
                      <div className="radio-form-box">
                        <input type="radio" name="operationStatus" id="operationStatus-consulting" />
                        <label htmlFor="operationStatus-consulting">상담중</label>
                      </div>
                      <div className="radio-form-box">
                        <input type="radio" name="operationStatus" id="operationStatus-running" />
                        <label htmlFor="operationStatus-running">운영</label>
                      </div>
                      <div className="radio-form-box">
                        <input type="radio" name="operationStatus" id="operationStatus-ended" />
                        <label htmlFor="operationStatus-ended">종료</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    대표 Partner Function <span className="red">*</span>
                  </th>
                  <td>
                    <div className="mx-500">
                      <select name="" id="" className="select-form">
                        <option value="">전체</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>BP 그룹</th>
                  <td>
                    <div className="filed-check-flx">
                      <div className="radio-form-box">
                        <input type="radio" name="bpGroup" id="bpGroup-platform" />
                        <label htmlFor="bpGroup-platform">플랫폼</label>
                      </div>
                      <div className="radio-form-box">
                        <input type="radio" name="bpGroup" id="bpGroup-asp" />
                        <label htmlFor="bpGroup-asp">ASP</label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>가입 방식</th>
                  <td>
                    <div className="mx-500">
                      <input type="text" className="input-frame" readOnly defaultValue={'직접 가입'} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    Master ID <span className="red">*</span>
                  </th>
                  <td>
                    <div className="filed-flx">
                      <div className="mx-500">
                        <input type="text" className="input-frame" readOnly defaultValue={'Hc-1234567'} />
                      </div>
                      <button className="btn-form outline s">중복 확인</button>
                      <span className="explain">
                        ※ WHALE ERP의 Partner Office에 로그인할 때 사용할 ID를 입력해 주세요.
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    업체명 <span className="red">*</span>
                  </th>
                  <td>
                    <div className="filed-flx">
                      <div className="mx-500">
                        <input type="text" className="input-frame" defaultValue={'주식회사 따름인'} />
                      </div>
                      <span className="explain">BMI1234</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>업체명(영문)</th>
                  <td>
                    <div className="filed-flx">
                      <div className="mx-500">
                        <input type="text" className="input-frame" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>BP Description</th>
                  <td>
                    <div className="filed-flx">
                      <div className="mx-500">
                        <input type="text" className="input-frame" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>브랜드명</th>
                  <td>
                    <div className="filed-flx">
                      <div className="mx-500">
                        <input type="text" className="input-frame" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    사업자등록번호 <span className="red">*</span>
                  </th>
                  <td>
                    <div className="filed-flx">
                      <div className="mx-500">
                        <input type="text" className="input-frame" />
                      </div>
                      <span className="explain">※ 숫자만 허용</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimateHeight>
      </div>
    </div>
  )
}
