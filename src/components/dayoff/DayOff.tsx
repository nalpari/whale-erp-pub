import DatePicker from '../ui/common/DatePicker'

export default function DayOff() {
  return (
    <div className="contents-wrap">
      <div className="contents-body">
        <div className="content-wrap">
          <div className="flx-bx mb10">
            <div className="mx-160">
              <select name="" id="" className="select-form">
                <option value="">2025</option>
              </select>
            </div>
            <div className="auto-right g8">
              <button className="btn-form gray">목록</button>
              <button className="btn-form basic">저장</button>
            </div>
          </div>
          <table className="default-table">
            <colgroup>
              <col width="140px" />
              <col />
              <col width="140px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>본사/가맹점</th>
                <td>
                  <div className="block">
                    <input type="text" className="input-frame" readOnly />
                  </div>
                </td>
                <th>점포선택</th>
                <td>
                  <div className="block">
                    <select name="" id="" className="select-form">
                      <option value="">전체</option>
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-wrap">
          <div className="day-off-header">
            <div className="day-off-header-tit">본사 휴일</div>
            <div className="auto-right">
              <div className="toggle-wrap">
                <span className="toggle-txt">본사휴일</span>
                <div className="toggle-btn">
                  <input type="checkbox" id="toggle-btn" />
                  <label className="slider" htmlFor="toggle-btn"></label>
                </div>
              </div>
              <button className="btn-form outline add"></button>
            </div>
          </div>
          <div className="day-off-list">
            <table className="day-off-table">
              <colgroup>
                <col width="20.5%" />
                <col width="90px" />
                <col width="41.7%" />
                <col width="90px" />
                <col />
                <col width="42px" />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <div className="block">
                      <input type="text" className="input-frame" readOnly defaultValue=" 설연휴" />
                    </div>
                  </td>
                  <td></td>
                  <td>
                    <div className="date-picker-wrap">
                      <DatePicker />
                      <span>~</span>
                      <DatePicker />
                    </div>
                  </td>
                  <td>
                    <div className="toggle-wrap">
                      <span className="toggle-txt">영업</span>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="day-off-badge r">
                      <i className="do-circle"></i>
                      <span className="do-txt">공휴일</span>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div className="block">
                      <input type="text" className="input-frame" readOnly defaultValue=" 설연휴" />
                    </div>
                  </td>
                  <td></td>
                  <td>
                    <div className="mx-300">
                      <DatePicker />
                    </div>
                  </td>
                  <td>
                    <div className="toggle-wrap">
                      <span className="toggle-txt">영업</span>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div className="block">
                      <input type="text" className="input-frame" defaultValue=" 설연휴" />
                    </div>
                  </td>
                  <td>
                    <div className="toggle-wrap">
                      <span className="toggle-txt">기간</span>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="date-picker-wrap">
                      <DatePicker />
                      <span>~</span>
                      <DatePicker />
                    </div>
                  </td>
                  <td colSpan={2}>
                    <div className="filed-flx g8">
                      <button className="btn-form outline s act">본사</button>
                      <button className="btn-form outline s ">전체 본사 점포</button>
                      <button className="btn-form outline s act">전체 가맹점 점포</button>
                    </div>
                  </td>
                  <td>
                    <button className="btn-form outline minus"></button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="block">
                      <input type="text" className="input-frame" defaultValue=" 설연휴" />
                    </div>
                  </td>
                  <td>
                    <div className="toggle-wrap">
                      <span className="toggle-txt">기간</span>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="mx-300">
                      <DatePicker />
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <button className="btn-form outline minus"></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="content-wrap">
          <div className="day-off-header">
            <div className="day-off-header-tit">을지로3가점</div>
            <div className="auto-right">
              <div className="toggle-wrap">
                <span className="toggle-txt">점포 휴일</span>
                <div className="toggle-btn">
                  <input type="checkbox" id="toggle-btn" />
                  <label className="slider" htmlFor="toggle-btn"></label>
                </div>
              </div>
              <button className="btn-form outline add"></button>
            </div>
          </div>
          <div className="day-off-list">
            <table className="day-off-table">
              <colgroup>
                <col width="20.5%" />
                <col width="90px" />
                <col width="41.7%" />
                <col width="90px" />
                <col />
                <col width="42px" />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <div className="block">
                      <input type="text" className="input-frame" readOnly defaultValue=" 설연휴" />
                    </div>
                  </td>
                  <td></td>
                  <td>
                    <div className="date-picker-wrap">
                      <DatePicker />
                      <span>~</span>
                      <DatePicker />
                    </div>
                  </td>
                  <td>
                    <div className="toggle-wrap">
                      <span className="toggle-txt">영업</span>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="day-off-badge r">
                      <i className="do-circle"></i>
                      <span className="do-txt">공휴일</span>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div className="block">
                      <input type="text" className="input-frame" readOnly defaultValue=" 설연휴" />
                    </div>
                  </td>
                  <td></td>
                  <td>
                    <div className="mx-300">
                      <DatePicker />
                    </div>
                  </td>
                  <td>
                    <div className="toggle-wrap">
                      <span className="toggle-txt">영업</span>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div className="block">
                      <input type="text" className="input-frame" readOnly defaultValue=" 설연휴" />
                    </div>
                  </td>
                  <td></td>
                  <td>
                    <div className="date-picker-wrap">
                      <DatePicker />
                      <span>~</span>
                      <DatePicker />
                    </div>
                  </td>
                  <td>
                    <div className="toggle-wrap">
                      <span className="toggle-txt">영업</span>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="day-off-badge p">
                      <i className="do-circle"></i>
                      <span className="do-txt">본사 휴일</span>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div className="block">
                      <input type="text" className="input-frame" defaultValue=" 설연휴" />
                    </div>
                  </td>
                  <td>
                    <div className="toggle-wrap">
                      <span className="toggle-txt">기간</span>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="mx-300">
                      <DatePicker />
                    </div>
                  </td>
                  <td></td>
                  <td>
                    <div className="day-off-badge g">
                      <i className="do-circle"></i>
                      <span className="do-txt">점포 휴일</span>
                    </div>
                  </td>
                  <td>
                    <button className="btn-form outline minus"></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
