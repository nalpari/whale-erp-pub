'use client'
import { Tooltip } from 'react-tooltip'
import DatePicker from '../ui/common/DatePicker'

export default function PayStub() {
  return (
    <div className="contents-wrap">
      <div className="contents-btn">
        <button className="btn-form outline s">이메일 전송</button>
        <button className="btn-form outline s">급여명세서 다운로드</button>
        <button className="btn-form basic">목록</button>
        <button className="btn-form gray ">삭제</button>
        <button className="btn-form basic">저장</button>
      </div>
      <div className="contents-body">
        <div className="content-wrap">
          <table className="default-table">
            <colgroup>
              <col width="160px" />
              <col />
              <col width="160px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>본사 선택</th>
                <td>
                  <div className="block">
                    <select className="select-form">
                      <option value="">선택</option>
                    </select>
                  </div>
                </td>
                <th>가맹점 선택</th>
                <td>
                  <div className="block">
                    <select className="select-form">
                      <option value="">선택</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <th>점포 선택</th>
                <td>
                  <div className="block">
                    <select className="select-form">
                      <option value="">선택</option>
                    </select>
                  </div>
                </td>
                <th>
                  직원명 <span className="red">*</span>
                </th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <select className="select-form">
                        <option value="">선택</option>
                      </select>
                    </div>
                    <button className="btn-form outline s act">이전 급여정보 불러오기</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  급여 지급월 <span className="red">*</span>
                </th>
                <td>
                  <div className="block">
                    <select className="select-form">
                      <option value="">선택</option>
                    </select>
                  </div>
                </td>
                <th>지급일</th>
                <td>
                  <div className="block">
                    <input type="text" className="input-frame" readOnly />
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  정산 기간 <span className="red">*</span>
                </th>
                <td className="val-top">
                  <div className="date-picker-wrap">
                    <DatePicker />
                    <span>~</span>
                    <DatePicker />
                  </div>
                </td>
                <th>파일로 대체</th>
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
            </tbody>
          </table>
        </div>
        <div className="content-wrap">
          <table className="default-table">
            <colgroup>
              <col width="160px" />
              <col />
              <col width="160px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  기본급 <span className="red">*</span>
                </th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
                <th>국민연금</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>식대</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
                <th>건강보험</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>자가운전보조금</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
                <th>고용보험</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>육아수당</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
                <th>장기요양보험</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>연장수당</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
                <th>소득세</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>야간수당</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
                <th>지방소득세</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>월간 휴일근무 수당</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
                <td colSpan={2}>
                  <div className="filed-flx">
                    <div className="block">
                      <select name="" id="" className="select-form">
                        <option value="">선택</option>
                      </select>
                    </div>
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>월간 휴일근무 수당</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                    <button className="btn-form outline s act">불러오기</button>
                  </div>
                </td>
                <td colSpan={2}>
                  <div className="filed-flx">
                    <div className="block">
                      <select name="" id="" className="select-form">
                        <option value="">선택</option>
                      </select>
                    </div>
                    <div className="block">
                      <input type="text" className="input-frame al-r  " />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>직책 상여</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r  " />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
                <td colSpan={2}></td>
              </tr>
              <tr>
                <th>인센티브</th>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r  " />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
                <th className="filed-th" colSpan={2}>
                  <div className="filed-flx">
                    <span className="bold-tit">공제금액</span>
                    <div className="block">
                      <input type="text" className="input-frame blue al-r" readOnly />
                    </div>
                    <span className="won">원</span>
                  </div>
                </th>
              </tr>
              <tr>
                <th className="filed-th" colSpan={2}>
                  <div className="filed-flx">
                    <span className="bold-tit">지급액계</span>
                    <div className="block">
                      <input type="text" className="input-frame blue al-r" readOnly />
                    </div>
                    <span className="won">원</span>
                  </div>
                </th>
                <th className="filed-th" colSpan={2}>
                  <div className="filed-flx">
                    <span className="bold-tit">실지급액</span>
                    <div className="block">
                      <input type="text" className="input-frame blue al-r" readOnly />
                    </div>
                    <span className="won">원</span>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-wrap">
          <table className="default-table white">
            <colgroup>
              <col width="190px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>산출식/산출방법 및 지급액</th>
                <td>
                  <div className="paystub-guide">
                    <span>기본급 : 월간 기본근무 시간 (209시간)  × 통상시급 (10,000원) = 2,297,784</span>
                    <span>연장수당 : 연장 근무 시간(2시간) × 통상시급 × 1.5 (15,000원) = 30,000</span>
                    <span>야간수당 : 야간 근무 시간(2시간) × 통상시급 × 0.5 (5,000원) = 10,000</span>
                    <span>월간 휴일 근무 수당 : 월간 휴일 근무 시간(2시간) × 통상시급 × 0.5 (5,000원) = 10,000</span>
                    <span>추가근무수당 : 추가 근무 시간(2시간) × 통상시급 × 1.5 (15,000원) = 30,000</span>
                    <span>만근상여 : 근무 기간 중 지각, 조퇴, 결근이 없는 경우 지급 = 30,000</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-wrap">
          <div className={`slidebox-wrap`}>
            <div className="slidebox-header">
              <h2>등록 및 수정 이력</h2>
            </div>
            <div className="slidebox-body">
              <div className="detail-data-wrap">
                <table className="detail-data-table">
                  <colgroup>
                    <col width="200px" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>등록자/등록일</th>
                      <td>
                        <ul className="detail-data-list">
                          <li className="detail-data-item">
                            <span className="detail-data-text">홍길동</span>
                          </li>
                          <li className="detail-data-item">
                            <span className="detail-data-text">2025.01.01</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>최근수정자/최근수정일</th>
                      <td>
                        <ul className="detail-data-list">
                          <li className="detail-data-item">
                            <span className="detail-data-text">홍길동</span>
                          </li>
                          <li className="detail-data-item">
                            <span className="detail-data-text">2025.01.01</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrap">
          <table className="part-paystub-table">
            <thead>
              <tr>
                <th>날짜/요일</th>
                <th>근무시간</th>
                <th>시급</th>
                <th>지급액계</th>
                <th>공제액</th>
                <th>차인금액</th>
              </tr>
            </thead>
            <tbody>
              <tr className="gray">
                <td>전주 근무시간(월~화)</td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr>
                <td>2025.01.02 (수)</td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr>
                <td>2025.01.03 (목)</td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr>
                <td>2025.01.04 (금)</td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr>
                <td>2025.01.05 (토)</td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr>
                <td>2025.01.06 (일)</td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr className="yellow">
                <td>주간소계</td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr className="yellow">
                <td>주휴 수당</td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr className="yellow">
                <td>주간 합계(주휴 포함) </td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr>
                <td>2025.01.07 (월)</td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr>
                <td>2025.01.31 (금)</td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr className="yellow">
                <td>주간소계</td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr className="yellow">
                <td>주휴 수당</td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr className="yellow">
                <td>주간 합계(주휴 포함) </td>
                <td className="al-r">13</td>
                <td className="al-r">11,000</td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr className="blue">
                <td>급여 소계</td>
                <td className="al-r">13</td>
                <td className="al-r"></td>
                <td className="al-r">99,000</td>
                <td className="al-r">3,267</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr className="blue">
                <td>공제액</td>
                <td className="al-r"></td>
                <td className="al-r"></td>
                <td className="al-r"></td>
                <td className="al-r"></td>
                <td className="al-r">95,733</td>
              </tr>
              <tr className="blue">
                <td>상여금(만근 상여)</td>
                <td>
                  <div className="toggle-btn">
                    <input type="checkbox" id="toggle-btn-mangeun" />
                    <label className="slider" htmlFor="toggle-btn-mangeun"></label>
                  </div>
                </td>
                <td className="al-r"></td>
                <td className="al-r">357,500</td>
                <td className="al-r">990</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr className="blue">
                <td>상여금(직급 상여)</td>
                <td>
                  <div className="toggle-btn">
                    <input type="checkbox" id="toggle-btn2" />
                    <label className="slider" htmlFor="toggle-btn2"></label>
                  </div>
                </td>
                <td className="al-r"></td>
                <td className="al-r">357,500</td>
                <td className="al-r">990</td>
                <td className="al-r">95,733</td>
              </tr>
              <tr className="blue">
                <td>급여 합계</td>
                <td></td>
                <td className="al-r"></td>
                <td className="al-r">2,017,700</td>
                <td className="al-r"></td>
                <td className="al-r">1,951,116</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-wrap">
          <div className="contents-btn">
            <button className="btn-form outline s">계약 시간 적용</button>
          </div>
          <table className="part-time-table">
            <colgroup>
              <col width="200px" />
              <col width="240px" />
              <col />
              <col width="200px" />
              <col width="300px" />
            </colgroup>
            <thead>
              <tr>
                <th>날짜/요일</th>
                <th>출퇴근 현황</th>
                <th>
                  <div className="filed-flx center">
                    <span>근무 시간 수정</span>
                    <button className="tooltip-btn black">
                      <span className="tooltip-icon" id="tooltip-btn-anchor-work-time"></span>
                      <Tooltip className="tooltip-txt" anchorSelect="#tooltip-btn-anchor-work-time">
                        <div>근무 시간을 입력하지 않을 경우 해당 날짜는 출근하지 않은 날짜로 인식합니다.</div>
                        <div>총근무시간은 출근시간에서 퇴근시간까지의 모든 시간을 입력하세요.</div>
                        <div>휴게시간은 총근무시간에서 제외하고 급여명세서에 표시됩니다.</div>
                        <div>예: 총근무시간 9시간, 휴게시간 60분일 경우 8시간 근무로 표시됩니다.</div>
                      </Tooltip>
                    </button>
                  </div>
                </th>
                <th>계약 시급</th>
                <th>적용 시급</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025.01.01 (월)</td>
                <td>9시간 00분(09:00 ~ 18:00)</td>
                <td>
                  <div className="filed-flx">
                    <div className="filed-flx g8">
                      <div className="mx-100">
                        <select name="" id="" className="select-form">
                          <option value="">08</option>
                        </select>
                      </div>
                      <span className="won">시간</span>
                      <div className="mx-100">
                        <select name="" id="" className="select-form">
                          <option value="">00</option>
                        </select>
                      </div>
                      <span className="won">분</span>
                    </div>
                    <div className="auto-right">
                      <div className="filed-flx g8">
                        <span className="won">휴게</span>
                        <div className="mx-100">
                          <select name="" id="" className="select-form">
                            <option value="">00</option>
                          </select>
                        </div>
                        <span className="won">분</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="al-r">11,000</td>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2025.01.01 (월)</td>
                <td>9시간 00분(09:00 ~ 18:00)</td>
                <td>
                  <div className="filed-flx">
                    <div className="filed-flx g8">
                      <div className="mx-100">
                        <select name="" id="" className="select-form">
                          <option value="">08</option>
                        </select>
                      </div>
                      <span className="won">시간</span>
                      <div className="mx-100">
                        <select name="" id="" className="select-form">
                          <option value="">00</option>
                        </select>
                      </div>
                      <span className="won">분</span>
                    </div>
                    <div className="auto-right">
                      <div className="filed-flx g8">
                        <span className="won">휴게</span>
                        <div className="mx-100">
                          <select name="" id="" className="select-form">
                            <option value="">00</option>
                          </select>
                        </div>
                        <span className="won">분</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="al-r">11,000</td>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
              </tr>
              <tr className="disabled">
                <td>2025.01.01 (월)</td>
                <td></td>
                <td>
                  <div className="filed-flx">
                    <div className="filed-flx g8">
                      <div className="mx-100">
                        <select name="" id="" className="select-form">
                          <option value="">08</option>
                        </select>
                      </div>
                      <span className="won">시간</span>
                      <div className="mx-100">
                        <select name="" id="" className="select-form">
                          <option value="">00</option>
                        </select>
                      </div>
                      <span className="won">분</span>
                    </div>
                    <div className="auto-right">
                      <div className="filed-flx g8">
                        <span className="won">휴게</span>
                        <div className="mx-100">
                          <select name="" id="" className="select-form">
                            <option value="">00</option>
                          </select>
                        </div>
                        <span className="won">분</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="al-r">11,000</td>
                <td>
                  <div className="filed-flx">
                    <div className="block">
                      <input type="text" className="input-frame al-r" />
                    </div>
                    <span className="won">원</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
