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
      </div>
    </div>
  )
}
