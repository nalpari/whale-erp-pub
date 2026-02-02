'use client'
import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import DatePicker from '../ui/common/DatePicker'
import { Tooltip } from 'react-tooltip'
import Editor from '../editor/Editor'
import Image from 'next/image'

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
              </tbody>
            </table>
            <div className="slide-table-wrap">
              <h3>Business Partner 정보</h3>
              <table className="default-table">
                <colgroup>
                  <col width="190px" />
                  <col />
                </colgroup>
                <tbody>
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
                          <div className="input-icon-frame err">
                            <input type="text" />
                            <button type="button" className="input-icon-btn del"></button>
                          </div>
                        </div>
                        <span className="explain">BMI1234</span>
                      </div>
                      <div className="warning-txt mt5">* 필수 입력 항목입니다.</div>
                    </td>
                  </tr>
                  <tr>
                    <th>브랜드명</th>
                    <td>
                      <div className="filed-flx">
                        <div className="mx-500">
                          <div className="input-icon-frame err">
                            <input type="text" />
                            <button type="button" className="input-icon-btn del"></button>
                          </div>
                        </div>
                        <button className="tooltip-btn">
                          <span className="tooltip-icon" id="my-anchor-element"></span>
                          <Tooltip className="tooltip-txt" anchorSelect="#my-anchor-element">
                            <div>브랜드명 설명브랜드명 </div>
                            <div>설명브랜드명 설명브랜드명 설명브랜드명 설명</div>
                          </Tooltip>
                        </button>
                      </div>
                      <div className="warning-txt mt5">* 필수 입력 항목입니다.</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      사업자등록번호<span className="red">*</span>
                    </th>
                    <td>
                      <div className="filed-flx">
                        <div className="mx-500">
                          <div className="input-icon-frame err">
                            <input type="text" />
                            <button type="button" className="input-icon-btn del"></button>
                          </div>
                        </div>
                        <span className="explain">BMI1234</span>
                      </div>
                      <div className="warning-txt mt5">* 필수 입력 항목입니다.</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      주소<span className="red">*</span>
                    </th>
                    <td>
                      <div className="filed-btn mb10">
                        <button className="btn-form outline s">주소 찾기</button>
                      </div>
                      <div className="filed-flx">
                        <div className="block">
                          <input type="text" className="input-frame" disabled />
                        </div>
                        <div className="block">
                          <div className="input-icon-frame err">
                            <input type="text" />
                            <button type="button" className="input-icon-btn del"></button>
                          </div>
                        </div>
                      </div>
                      <div className="warning-txt mt5">* 필수 입력 항목입니다.</div>
                    </td>
                  </tr>
                  <tr>
                    <th>LNB 로고</th>
                    <td>
                      <div className="filed-file mb10">
                        <input type="file" className="file-input" id="file-input" />
                        <label htmlFor="file-input" className="btn-form outline s">
                          파일 찾기
                        </label>
                      </div>
                      <div className="file-bx">
                        <div className="file-guide">Drag & Drop으로 파일을 옮겨주세요.</div>
                        <ul className="file-list">
                          <li className="file-item">
                            <div className="file-item-wrap">
                              <button className="file-name">을지로3가점 영업허가증.pdf</button>
                              <button className="file-delete"></button>
                              <button className="file-preview"></button>
                            </div>
                          </li>
                          <li className="file-item">
                            <div className="file-item-wrap">
                              <button className="file-name">을지로3가점 영업허가증.pdf</button>
                              <button className="file-delete"></button>
                              <button className="file-preview"></button>
                              <div className="toggle-wrap">
                                <span className="toggle-txt">자가여부</span>
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>LNB 로고</th>
                    <td>
                      <div className="filed-file mb10">
                        <input type="file" className="file-input" id="file-input" />
                        <label htmlFor="file-input" className="btn-form outline s">
                          파일 찾기
                        </label>
                      </div>
                      <div className="file-bx sumnail">
                        <div className="file-guide">Drag & Drop으로 파일을 옮겨주세요.</div>
                        <ul className="file-sumnail-list">
                          {Array.from({ length: 10 }).map((_, index) => (
                            <li className="file-item" key={index}>
                              <div className="file-sumnail-btn">
                                <div className="sumnail-img">
                                  <Image src="/assets/images/contents/thumb_img.png" alt="sumnail" fill />
                                </div>
                                <div className="sumnail-info">
                                  <div className="sumnail-info-tit">
                                    복숭아 아이스티복숭아 아이스티복숭아 아이스티.jpg
                                  </div>
                                  <button className="file-delete"></button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>임대 계약 만료일</th>
                    <td>
                      <div className="filed-flx">
                        <div className="date-picker-wrap">
                          <DatePicker />
                          <span>~</span>
                          <DatePicker />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Editor</th>
                    <td>
                      <Editor />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="slide-table-wrap">
              <h3>Partner Function</h3>
              <table className="default-table">
                <colgroup>
                  <col width="190px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>본사</th>
                    <td>
                      <div className="filed-flx">
                        <div className="mx-500">
                          <select name="" id="" className="select-form">
                            <option value="">전체</option>
                          </select>
                        </div>
                        <div className="auto-right">
                          <div className="toggle-wrap">
                            <div className="toggle-btn">
                              <input type="checkbox" id="toggle-btn" />
                              <label className="slider" htmlFor="toggle-btn"></label>
                            </div>
                          </div>
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
                    <th>가맹점</th>
                    <td>
                      <div className="filed-flx">
                        <div className="mx-500">
                          <select name="" id="" className="select-form">
                            <option value="">전체</option>
                          </select>
                        </div>
                        <div className="auto-right">
                          <div className="toggle-wrap">
                            <div className="toggle-btn">
                              <input type="checkbox" id="toggle-btn" />
                              <label className="slider" htmlFor="toggle-btn"></label>
                            </div>
                          </div>
                          <div className="more-btn">
                            <span className="icon-more" id="more-btn-anchor-franchise-function"></span>
                            <Tooltip
                              className="option-list"
                              anchorSelect="#more-btn-anchor-franchise-function"
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
            <div className="slide-table-wrap">
              <h3>옵션 정보</h3>
              <table className="master-option-table">
                <colgroup>
                  <col width="190px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th className="option-header-tit">옵션 SET 01</th>
                    <td>
                      <table className="option-header">
                        <colgroup>
                          <col />
                          <col width="150px" />
                          <col width="150px" />
                          <col width="200px" />
                          <col width="110px" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <td>
                              <div className="filed-flx">
                                <div className="option-name">
                                  옵션 SET명 <span className="red">*</span>
                                </div>
                                <div className="block">
                                  <input type="text" className="input-frame " />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="toggle-wrap">
                                <span className="toggle-txt">필수선택</span>
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="toggle-wrap">
                                <span className="toggle-txt">다중선택</span>
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="filed-flx">
                                <div className="option-name">노출순서</div>
                                <div className="block">
                                  <input type="text" className="input-frame" />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="filed-flx">
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                                <div className="more-btn">
                                  <span className="icon-more" id="more-btn-anchor-option-set-01"></span>
                                  <Tooltip
                                    className="option-list"
                                    anchorSelect="#more-btn-anchor-option-set-01"
                                    place="right-end"
                                    offset={0}
                                    openOnClick={true} // 클릭으로 열기
                                    clickable={true} // 툴팁 내부 클릭 가능
                                    opacity={1}
                                  >
                                    <button className="option-item">옵션 SET 추가</button>
                                    <button className="option-item">옵션 SET 삭제</button>
                                  </Tooltip>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="option-num-tit">
                        <span>옵션 01</span>
                        <button className="sequence-btn"></button>
                      </div>
                    </th>
                    <td>
                      <table className="option-list">
                        <colgroup>
                          <col />
                          <col width="240px" />
                          <col width="150px" />
                          <col width="110px" />
                          <col width="110px" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <td>
                              <div className="filed-flx">
                                <button className="btn-form outline s">옵션 찿기</button>
                                <div className="block">
                                  <input type="text" className="input-frame" />
                                </div>
                                <span className="explain">PDM10005</span>
                                <div className="store-badge org">미운영</div>
                              </div>
                            </td>
                            <td>
                              <div className="filed-flx">
                                <div className="option-name">추가가격</div>
                                <div className="block">
                                  <input type="text" className="input-frame" />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="toggle-wrap">
                                <span className="toggle-txt">수량입력</span>
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="toggle-wrap">
                                <span className="toggle-txt">디폴트</span>
                                <div className="radio-form-box no-txt">
                                  <input type="radio" name="quantity" id="quantity-yes" />
                                  <label htmlFor="quantity-yes"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="filed-flx">
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                                <div className="more-btn">
                                  <span className="icon-more" id="more-btn-anchor-option-01"></span>
                                  <Tooltip
                                    className="option-list"
                                    anchorSelect="#more-btn-anchor-option-01"
                                    place="left-end"
                                    offset={0}
                                    openOnClick={true} // 클릭으로 열기
                                    clickable={true} // 툴팁 내부 클릭 가능
                                    opacity={1}
                                  >
                                    <button className="option-item">옵션 추가</button>
                                    <button className="option-item">옵션 삭제</button>
                                  </Tooltip>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="option-num-tit">
                        <span>옵션 02</span>
                        <button className="sequence-btn"></button>
                      </div>
                    </th>
                    <td>
                      <table className="option-list">
                        <colgroup>
                          <col />
                          <col width="240px" />
                          <col width="150px" />
                          <col width="110px" />
                          <col width="110px" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <td>
                              <div className="filed-flx">
                                <button className="btn-form outline s">옵션 찿기</button>
                                <div className="block">
                                  <input type="text" className="input-frame" />
                                </div>
                                <span className="explain">PDM10005</span>
                                <div className="store-badge blue">운영</div>
                              </div>
                            </td>
                            <td>
                              <div className="filed-flx">
                                <div className="option-name">추가가격</div>
                                <div className="block">
                                  <input type="text" className="input-frame" />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="toggle-wrap">
                                <span className="toggle-txt">수량입력</span>
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="toggle-wrap">
                                <span className="toggle-txt">디폴트</span>
                                <div className="radio-form-box no-txt">
                                  <input type="radio" name="quantity" id="quantity-yes" />
                                  <label htmlFor="quantity-yes"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="filed-flx">
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                                <div className="more-btn">
                                  <span className="icon-more" id="more-btn-anchor-option-02"></span>
                                  <Tooltip
                                    className="option-list"
                                    anchorSelect="#more-btn-anchor-option-02"
                                    place="left-end"
                                    offset={0}
                                    openOnClick={true} // 클릭으로 열기
                                    clickable={true} // 툴팁 내부 클릭 가능
                                    opacity={1}
                                  >
                                    <button className="option-item">옵션 추가</button>
                                    <button className="option-item">옵션 삭제</button>
                                  </Tooltip>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="master-option-table">
                <colgroup>
                  <col width="190px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th className="option-header-tit">옵션 SET 02</th>
                    <td>
                      <table className="option-header">
                        <colgroup>
                          <col />
                          <col width="150px" />
                          <col width="150px" />
                          <col width="200px" />
                          <col width="80px" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <td>
                              <div className="filed-flx">
                                <div className="option-name">
                                  옵션 SET명 <span className="red">*</span>
                                </div>
                                <div className="block">
                                  <input type="text" className="input-frame" />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="toggle-wrap">
                                <span className="toggle-txt">필수선택</span>
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="toggle-wrap">
                                <span className="toggle-txt">다중선택</span>
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="filed-flx">
                                <div className="option-name">노출순서</div>
                                <div className="block">
                                  <input type="text" className="input-frame" />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="filed-flx">
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="option-num-tit">
                        <span>옵션 01</span>
                        <button className="sequence-btn"></button>
                      </div>
                    </th>
                    <td>
                      <table className="option-list">
                        <colgroup>
                          <col />
                          <col width="240px" />
                          <col width="150px" />
                          <col width="110px" />
                          <col width="80px" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <td>
                              <div className="filed-flx">
                                <button className="btn-form outline s">옵션 찿기</button>
                                <div className="block">
                                  <input type="text" className="input-frame" />
                                </div>
                                <span className="explain">PDM10005</span>
                                <div className="store-badge org">미운영</div>
                              </div>
                            </td>
                            <td>
                              <div className="filed-flx">
                                <div className="option-name">추가가격</div>
                                <div className="block">
                                  <input type="text" className="input-frame" />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="toggle-wrap">
                                <span className="toggle-txt">수량입력</span>
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="toggle-wrap">
                                <span className="toggle-txt">디폴트</span>
                                <div className="radio-form-box no-txt">
                                  <input type="radio" name="quantity" id="quantity-yes" />
                                  <label htmlFor="quantity-yes"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="filed-flx">
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="option-num-tit">
                        <span>옵션 02</span>
                        <button className="sequence-btn"></button>
                      </div>
                    </th>
                    <td>
                      <table className="option-list">
                        <colgroup>
                          <col />
                          <col width="240px" />
                          <col width="150px" />
                          <col width="110px" />
                          <col width="80px" />
                        </colgroup>
                        <tbody>
                          <tr>
                            <td>
                              <div className="filed-flx">
                                <button className="btn-form outline s">옵션 찿기</button>
                                <div className="block">
                                  <input type="text" className="input-frame" />
                                </div>
                                <span className="explain">PDM10005</span>
                                <div className="store-badge blue">운영</div>
                              </div>
                            </td>
                            <td>
                              <div className="filed-flx">
                                <div className="option-name">추가가격</div>
                                <div className="block">
                                  <input type="text" className="input-frame" />
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="toggle-wrap">
                                <span className="toggle-txt">수량입력</span>
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="toggle-wrap">
                                <span className="toggle-txt">디폴트</span>
                                <div className="radio-form-box no-txt">
                                  <input type="radio" name="quantity" id="quantity-yes" />
                                  <label htmlFor="quantity-yes"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="filed-flx">
                                <div className="toggle-btn">
                                  <input type="checkbox" id="toggle-btn" />
                                  <label className="slider" htmlFor="toggle-btn"></label>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="slide-table-wrap">
              <h3>카테고리 정보</h3>
              <table className="default-table white">
                <colgroup>
                  <col width="190px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      카테고리 선택 <span className="red">*</span>
                    </th>
                    <td>
                      <div className="filed-flx">
                        <div className="mx-500">
                          <select name="" id="" className="select-form">
                            <option value="">전체</option>
                          </select>
                        </div>
                        <button className="btn-form outline s">추가</button>
                      </div>
                      <ul className="category-list">
                        <li className="category-item">
                          <span className="category-name">COFFEE</span>
                          <button className="file-delete"></button>
                        </li>
                        <li className="category-item">
                          <span className="category-name">
                            NON COFFEE<i> 미운영</i>
                          </span>
                          <button className="file-delete"></button>
                        </li>
                        <li className="category-item">
                          <span className="category-name">
                            ADE&TEA<i> 미운영</i>
                          </span>
                          <button className="file-delete"></button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </AnimateHeight>
      </div>
    </div>
  )
}
