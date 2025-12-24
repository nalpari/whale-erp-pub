import DatePicker from '../ui/common/DatePicker'

export default function CommuteManagement() {
  return (
    <div className="contents-wrap">
      <div className="contents-btn">
        <button className="btn-form basic">목록</button>
      </div>
      <div className="contents-body">
        <div className="content-wrap">
          <table className="default-table">
            <colgroup>
              <col width="160px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>본사/가맹점</th>
                <td>
                  <div className="filed-flx">
                    <div className="mx-500">
                      <input type="text" className="input-frame" readOnly />
                    </div>
                    <div className="mx-500">
                      <input type="text" className="input-frame" readOnly />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>점포</th>
                <td>
                  <div className="mx-500">
                    <input type="text" className="input-frame" readOnly />
                  </div>
                </td>
              </tr>
              <tr>
                <th>직원명</th>
                <td>
                  <div className="filed-flx">
                    <div className="mx-500">
                      <input type="text" className="input-frame" readOnly />
                    </div>
                    <span className="explain">BIM1001</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  기간 설정 <span className="red">*</span>
                </th>
                <td>
                  <div className="filed-flx">
                    <div className="date-picker-wrap">
                      <DatePicker />
                      <span>~</span>
                      <DatePicker />
                    </div>
                    <button className="btn-form outline s">검색</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-wrap">
          <div className="commute-wrap">
            <div className="commute-bx">
              <div className="commute-header">2025.12.18 (월)</div>
              <div className="commute-body">
                <ul className="commute-list">
                  <li className="commute-item">
                    <div className="commute-time">
                      <div className="commute-time-item">
                        <div className="commute-time-tit">출근시간</div>
                        <div className="commute-time-desc">09:30</div>
                      </div>
                      <div className="commute-time-item">
                        <div className="commute-time-tit">퇴근시간</div>
                        <div className="commute-time-desc">16:30</div>
                      </div>
                    </div>
                    <div className="work-time">
                      <div className="work-time-tit">근무시간</div>
                      <div className="work-time-desc">24시간 30분</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="commute-bx">
              <div className="commute-header">2025.12.18 (월)</div>
              <div className="commute-body">
                <ul className="commute-list">
                  <li className="commute-item">
                    <div className="commute-time">
                      <div className="commute-time-item">
                        <div className="commute-time-tit">출근시간</div>
                        <div className="commute-time-desc">09:30</div>
                      </div>
                      <div className="commute-time-item">
                        <div className="commute-time-tit">퇴근시간</div>
                        <div className="commute-time-desc">16:30</div>
                      </div>
                    </div>
                    <div className="work-time">
                      <div className="work-time-tit">근무시간</div>
                      <div className="work-time-desc">8시간 30분</div>
                    </div>
                  </li>
                  <li className="commute-item">
                    <div className="commute-time">
                      <div className="commute-time-item">
                        <div className="commute-time-tit">출근시간</div>
                        <div className="commute-time-desc">18:30</div>
                      </div>
                      <div className="commute-time-item">
                        <div className="commute-time-tit">퇴근시간</div>
                        <div className="commute-time-desc">20:30</div>
                      </div>
                    </div>
                    <div className="work-time">
                      <div className="work-time-tit">근무시간</div>
                      <div className="work-time-desc">2시간</div>
                    </div>
                  </li>
                  <li className="commute-item">
                    <div className="work-time-total">
                      <div className="work-time-total-tit">총 근무시간</div>
                      <div className="work-time-total-desc">10시간 30분</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="commute-bx red-bx">
              <div className="commute-header">2025.12.18 (월)</div>
              <div className="commute-body">
                <ul className="commute-list">
                  <li className="commute-item">
                    <div className="commute-time">
                      <div className="commute-time-item">
                        <div className="commute-time-tit">출근시간</div>
                        <div className="commute-time-desc">09:30</div>
                      </div>
                      <div className="commute-time-item">
                        <div className="commute-time-tit">퇴근시간</div>
                        <div className="commute-time-desc">16:30</div>
                      </div>
                    </div>
                    <div className="work-time">
                      <div className="no-work">결근</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="commute-bx gray-bx">
              <div className="commute-header">2025.12.23 (토)</div>
              <div className="commute-body">
                <ul className="commute-list">
                  <li className="commute-item">
                    <div className="commute-time">
                      <div className="commute-time-item">
                        <div className="commute-time-tit">출근시간</div>
                        <div className="commute-time-desc">09:30</div>
                      </div>
                      <div className="commute-time-item">
                        <div className="commute-time-tit">퇴근시간</div>
                        <div className="commute-time-desc">16:30</div>
                      </div>
                    </div>
                    <div className="work-time">
                      <div className="work-time-tit">근무시간</div>
                      <div className="work-time-desc">24시간 30분</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
