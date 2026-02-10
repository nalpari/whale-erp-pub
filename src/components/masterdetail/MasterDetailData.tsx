'use client'
import { useState } from 'react'
import AnimateHeight from 'react-animate-height'

export default function MasterDetailData() {
  const [slideboxOpen, setSlideboxOpen] = useState(true)
  return (
    <div className="master-detail-data">
      <div className={`slidebox-wrap ${slideboxOpen ? '' : 'close'}`}>
        <div className="slidebox-header">
          <h2>메뉴 Detail 정보 관리</h2>
          <div className="slidebox-btn-wrap">
            <button className="slidebox-btn">수정</button>
            <button className="slidebox-btn arr" onClick={() => setSlideboxOpen(!slideboxOpen)}>
              <i className="arr-icon"></i>
            </button>
          </div>
        </div>
        <AnimateHeight duration={300} height={slideboxOpen ? 'auto' : 0}>
          <div className="slidebox-body">
            <div className="detail-data-wrap">
              <table className="detail-data-table">
                <colgroup>
                  <col width="200px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>운영여부 및 메뉴 그룹</th>
                    <td>
                      <ul className="detail-data-list">
                        <li className="detail-data-item">
                          <span className="detail-data-text">운영</span>
                        </li>
                        <li className="detail-data-item">
                          <span className="detail-data-text">마스터용</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Business Partner 및 점포</th>
                    <td>
                      <ul className="detail-data-list">
                        <li className="detail-data-item">
                          <span className="detail-data-text">주식회사 따름인 </span>
                        </li>
                        <li className="detail-data-item">
                          <span className="detail-data-text">을지로3가점</span>
                        </li>
                        <li className="detail-data-item">
                          <span className="detail-data-text">샵힘이나는커피생활 을지로3가점</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>메뉴 타입 및 분류</th>
                    <td>
                      <ul className="detail-data-list">
                        <li className="detail-data-item">
                          <span className="detail-data-text">메뉴</span>
                        </li>
                        <li className="detail-data-item">
                          <span className="detail-data-text">음료</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>메뉴명</th>
                    <td>
                      <ul className="detail-data-list">
                        <li className="detail-data-item">
                          <span className="detail-data-text">아이스아메리카노</span>
                        </li>
                        <li className="detail-data-item">
                          <span className="detail-data-text">SCM20251001</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>메뉴 구분</th>
                    <td>
                      <ul className="detail-data-list">
                        <li className="detail-data-item">
                          <span className="detail-data-text">제품</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>마케팅 분류</th>
                    <td>
                      <ul className="detail-data-list">
                        <li className="detail-data-item">
                          <span className="detail-data-text">NEW, BEST, EVENT</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>대표자 정보</th>
                    <td>
                      <ul className="detail-data-list">
                        <li className="detail-data-item">
                          <span className="detail-data-text">김철수</span>
                        </li>
                        <li className="detail-data-item">
                          <div className="detail-data-flx">
                            <span className="detail-data-text">010-2222-4444</span>
                            <button className="detail-data-btn">SMS 전송</button>
                          </div>
                        </li>
                        <li className="detail-data-item">
                          <div className="detail-data-flx">
                            <span className="detail-data-text">abc@abc.co.kr</span>
                            <button className="detail-data-btn">이메일 전송</button>
                          </div>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>온도 분류</th>
                    <td>
                      <ul className="detail-data-list">
                        <li className="detail-data-item">
                          <span className="detail-data-text">HOT, COLD</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>
                      <ul className="detail-data-list">
                        <li className="detail-data-item">
                          <span className="detail-data-text">힘원두를 원두로 사용한 기본 아이스아메리카노</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>이미지 정보</th>
                    <td>
                      <ul className="detail-data-list">
                        <li className="detail-data-item">
                          <button className="detail-data-btn">코튼크림 신메뉴 목록이미지.jpg</button>
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
      <div className={`slidebox-wrap ${slideboxOpen ? '' : 'close'}`}>
        <div className="slidebox-header">
          <h2>세트 메뉴 구성</h2>
          <div className="slidebox-btn-wrap">
            <button className="slidebox-btn">수정</button>
            <button className="slidebox-btn arr" onClick={() => setSlideboxOpen(!slideboxOpen)}>
              <i className="arr-icon"></i>
            </button>
          </div>
        </div>
        <AnimateHeight duration={300} height={slideboxOpen ? 'auto' : 0}>
          <div className="slidebox-body">
            <div className="detail-data-wrap">
              <table className="detail-data-table">
                <colgroup>
                  <col width="200px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>컴포넌트 메뉴 #1</th>
                    <td>
                      <ul className="detail-data-list">
                        <li className="detail-data-item">
                          <span className="detail-data-text">
                            <span>(운영)</span> 아이스아메리카노
                          </span>
                        </li>
                        <li className="detail-data-item">
                          <span className="detail-data-text">BMI1234</span>
                        </li>
                        <li className="detail-data-item">
                          <span className="detail-data-text">1개</span>
                        </li>
                        <li className="detail-data-item">
                          <span className="detail-data-text">HOT, ICED</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>컴포넌트 메뉴 #2</th>
                    <td>
                      <ul className="detail-data-list">
                        <li className="detail-data-item">
                          <span className="detail-data-text">
                            <span className="red">(미운영)</span> 초코칩쿠키
                          </span>
                        </li>
                        <li className="detail-data-item">
                          <span className="detail-data-text">BMI1234</span>
                        </li>
                        <li className="detail-data-item">
                          <span className="detail-data-text">2개</span>
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

      <div className={`slidebox-wrap ${slideboxOpen ? '' : 'close'}`}>
        <div className="slidebox-header">
          <h2>세트 메뉴 구성</h2>
          <div className="slidebox-btn-wrap">
            <button className="slidebox-btn">수정</button>
            <button className="slidebox-btn arr" onClick={() => setSlideboxOpen(!slideboxOpen)}>
              <i className="arr-icon"></i>
            </button>
          </div>
        </div>
        <AnimateHeight duration={300} height={slideboxOpen ? 'auto' : 0}>
          <div className="slidebox-body">
            <div className="detail-data-wrap">
              <table className="detail-data-table">
                <colgroup>
                  <col width="200px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>옵션 SET #1</th>
                    <td>
                      <div className="data-option-wrap">
                        <div className="data-option-item">
                          <ul className="detail-data-list">
                            <li className="detail-data-item">
                              <span className="detail-data-text">
                                <span>(운영)</span> 아이스아메리카노
                              </span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">BMI1234</span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">1개</span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">HOT, ICED</span>
                            </li>
                          </ul>
                        </div>
                        <div className="data-option-item">
                          <ul className="detail-data-list">
                            <li className="detail-data-item">
                              <span className="detail-data-text">
                                <span>(운영)</span> 아이스아메리카노
                              </span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">BMI1234</span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">1개</span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">HOT, ICED</span>
                            </li>
                          </ul>
                          <ul className="detail-data-list">
                            <li className="detail-data-item">
                              <span className="detail-data-text">
                                <span>(운영)</span> 아이스아메리카노
                              </span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">BMI1234</span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">1개</span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">HOT, ICED</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>옵션 SET #2</th>
                    <td>
                      <div className="data-option-wrap">
                        <div className="data-option-item">
                          <ul className="detail-data-list">
                            <li className="detail-data-item">
                              <span className="detail-data-text">
                                <span>(운영)</span> 아이스아메리카노
                              </span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">BMI1234</span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">1개</span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">HOT, ICED</span>
                            </li>
                          </ul>
                        </div>
                        <div className="data-option-item">
                          <ul className="detail-data-list">
                            <li className="detail-data-item">
                              <span className="detail-data-text">
                                <span className="red">(미운영)</span> 아이스아메리카노
                              </span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">BMI1234</span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">1개</span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">HOT, ICED</span>
                            </li>
                          </ul>
                          <ul className="detail-data-list">
                            <li className="detail-data-item">
                              <span className="detail-data-text">
                                <span className="red">(미운영)</span> 아이스아메리카노
                              </span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">BMI1234</span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">1개</span>
                            </li>
                            <li className="detail-data-item">
                              <span className="detail-data-text">HOT, ICED</span>
                            </li>
                          </ul>
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
      <div className="contract-history-wrap">
        <div className="contract-history-header">
          <h2>계약 이력</h2>
        </div>
        <div className="contract-history-body">
          <table className="part-paystub-table">
            <colgroup>
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>계약서 전송일시</th>
                <th>계약서 열람일시</th>
                <th>전자서명 일시</th>
                <th>서명자 정보</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025.01.01 21:10:11</td>
                <td>2025.01.01 21:10:11</td>
                <td>2025.01.01 21:10:11</td>
                <td>홍길동(hs_admin)</td>
              </tr>
              <tr>
                <td>2025.01.01 21:10:11</td>
                <td>2025.01.01 21:10:11</td>
                <td>2025.01.01 21:10:11</td>
                <td>홍길동(hs_admin)</td>
              </tr>
              <tr>
                <td>2025.01.01 21:10:11</td>
                <td>2025.01.01 21:10:11</td>
                <td>2025.01.01 21:10:11</td>
                <td>홍길동(hs_admin)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="detail-data-info-wrap">
        <table className="default-table">
          <colgroup>
            <col width="120px" />
            <col />
            <col width="120px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>등록자</th>
              <td>
                <div className="data-filed">
                  <input type="text" className="input-frame" defaultValue={'홍길동(hs_admin)'} disabled />
                </div>
              </td>
              <th>등록일시</th>
              <td>
                <div className="data-filed">
                  <input type="text" className="input-frame" defaultValue={'2025.01.01 21:10:11'} disabled />
                </div>
              </td>
            </tr>
            <tr>
              <th>최종 수정자</th>
              <td>
                <div className="data-filed">
                  <input type="text" className="input-frame" defaultValue={'홍길동(hs_admin)'} disabled />
                </div>
              </td>
              <th>최종 수정일시</th>
              <td>
                <div className="data-filed">
                  <input type="text" className="input-frame" defaultValue={'2025.01.01 21:10:11'} disabled />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
