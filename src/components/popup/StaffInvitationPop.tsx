import DatePicker from '../ui/common/DatePicker'

export default function StaffInvitationPop() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog large">
        <div className="modal-content">
          <div className="modal-header">
            <h2>직원 초대하기</h2>
            <button className="modal-close"></button>
          </div>
          <div className="modal-body">
            <div className="pop-frame">
              <table className="pop-table">
                <colgroup>
                  <col width="170px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      직원 소속 <span className="red">*</span>
                    </th>
                    <td>
                      <div className="filed-check-flx">
                        <div className="radio-form-box">
                          <input type="radio" name="operationStatus" id="operationStatus-consulting" />
                          <label htmlFor="operationStatus-consulting">본사</label>
                        </div>
                        <div className="radio-form-box">
                          <input type="radio" name="operationStatus" id="operationStatus-running" />
                          <label htmlFor="operationStatus-running">가맹점</label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      본사/가맹점 선택 <span className="red">*</span>
                    </th>
                    <td>
                      <div className="filed-flx">
                        <div className="block">
                          <select className="select-form">
                            <option value="">선택</option>
                          </select>
                        </div>
                        <div className="block">
                          <select className="select-form">
                            <option value="">선택</option>
                          </select>
                        </div>
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
                  </tr>
                  <tr>
                    <th>
                      직원명 <span className="red">*</span>
                    </th>
                    <td>
                      <div className="block">
                        <div className="input-icon-frame err">
                          <input type="text" />
                          <button type="button" className="input-icon-btn del"></button>
                        </div>
                      </div>
                      <div className="warning-txt mt5">* 필수 입력 항목입니다.</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      휴대폰 번호 <span className="red">*</span>
                    </th>
                    <td>
                      <div className="block">
                        <div className="input-icon-frame err">
                          <input type="text" />
                          <button type="button" className="input-icon-btn del"></button>
                        </div>
                      </div>
                      <div className="warning-txt mt5">* 필수 입력 항목입니다.</div>
                    </td>
                  </tr>
                  <tr>
                    <th>4대 보험 가입 유무</th>
                    <td>
                      <div className="filed-flx">
                        <button className="btn-form outline s act">건강보험, 국민연금</button>
                        <button className="btn-form outline s">고용보험, 산재보험</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      급여계산 주기/급여일 <span className="red">*</span>
                    </th>
                    <td>
                      <div className="filed-flx">
                        <div className="block">
                          <select className="select-form">
                            <option value="">선택</option>
                          </select>
                        </div>
                        <div className="block">
                          <select className="select-form">
                            <option value="">선택</option>
                          </select>
                        </div>
                        <div>
                          <input type="number" className="input-frame xs" defaultValue={5} />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      계약 기간 <span className="red">*</span>
                    </th>
                    <td>
                      <div className="filed-flx">
                        <div className="date-picker-wrap">
                          <DatePicker />
                          <span>~</span>
                          <DatePicker />
                        </div>
                        <div className="toggle-wrap">
                          <span className="toggle-txt">종료일 없음</span>
                          <div className="toggle-btn">
                            <input type="checkbox" id="toggle-btn" />
                            <label className="slider" htmlFor="toggle-btn"></label>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      업무 내용 <span className="red">*</span>
                    </th>
                    <td>
                      <div className="block">
                        <div className="input-icon-frame err">
                          <input type="text" />
                          <button type="button" className="input-icon-btn del"></button>
                        </div>
                      </div>
                      <div className="warning-txt mt5">* 필수 입력 항목입니다.</div>
                    </td>
                  </tr>
                  <tr>
                    <th>평일근무</th>
                    <td>
                      <div className="work-time-wrap">
                        <div className="work-time-item">
                          <div className="work-time-th">
                            <div className="toggle-wrap">
                              <span className="toggle-txt">운영시간</span>
                              <div className="toggle-btn">
                                <input type="checkbox" id="toggle-btn" />
                                <label className="slider" htmlFor="toggle-btn"></label>
                              </div>
                            </div>
                          </div>
                          <div className="work-time-td">
                            <div className="filed-flx g8">
                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">시</span>

                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">분</span>
                              <span className="explain">~</span>
                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">시</span>

                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">분</span>
                            </div>
                          </div>
                        </div>
                        <div className="work-time-item">
                          <div className="work-time-th">
                            <div className="toggle-wrap">
                              <span className="toggle-txt">휴게시간</span>
                              <div className="toggle-btn">
                                <input type="checkbox" id="toggle-btn" />
                                <label className="slider" htmlFor="toggle-btn"></label>
                              </div>
                            </div>
                          </div>
                          <div className="work-time-td">
                            <div className="filed-flx g8">
                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">시</span>

                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">분</span>
                              <span className="explain">~</span>
                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">시</span>

                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">분</span>
                            </div>
                          </div>
                        </div>
                        <div className="work-time-item">
                          <div className="work-time-th">
                            <div className="explain">근무요일</div>
                          </div>
                          <div className="work-time-td">
                            <div className="filed-flx g8">
                              <button className="day-btn act">월</button>
                              <button className="day-btn act">화</button>
                              <button className="day-btn act">수</button>
                              <button className="day-btn">목</button>
                              <button className="day-btn act">금</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>토요일 근무</th>
                    <td>
                      <div className="work-time-wrap">
                        <div className="work-time-item">
                          <div className="work-time-th">
                            <div className="toggle-wrap">
                              <span className="toggle-txt">운영시간</span>
                              <div className="toggle-btn">
                                <input type="checkbox" id="toggle-btn" />
                                <label className="slider" htmlFor="toggle-btn"></label>
                              </div>
                            </div>
                          </div>
                          <div className="work-time-td">
                            <div className="filed-flx g8">
                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">시</span>

                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">분</span>
                              <span className="explain">~</span>
                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">시</span>

                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">분</span>
                            </div>
                          </div>
                        </div>
                        <div className="work-time-item">
                          <div className="work-time-th">
                            <div className="toggle-wrap">
                              <span className="toggle-txt">휴게시간</span>
                              <div className="toggle-btn">
                                <input type="checkbox" id="toggle-btn" />
                                <label className="slider" htmlFor="toggle-btn"></label>
                              </div>
                            </div>
                          </div>
                          <div className="work-time-td">
                            <div className="filed-flx g8">
                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">시</span>

                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">분</span>
                              <span className="explain">~</span>
                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">시</span>

                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">분</span>
                            </div>
                          </div>
                        </div>
                        <div className="work-time-item">
                          <div className="work-time-th">
                            <div className="explain">격주 근무 유무</div>
                          </div>
                          <div className="work-time-td">
                            <div className="biweek-wrap">
                              <div className="filed-check-flx mb10">
                                <div className="radio-form-box">
                                  <input type="radio" name="satType" id="satType-every" />
                                  <label htmlFor="satType-every">매주 토요일</label>
                                </div>
                                <div className="radio-form-box">
                                  <input type="radio" name="satType" id="satType-bi" />
                                  <label htmlFor="satType-bi">토요일 격주</label>
                                </div>
                              </div>
                              <div className="filed-flx g8">
                                <div className="explain">토요일 첫 근무일</div>
                                <div className="block">
                                  <DatePicker />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>일요일 근무</th>
                    <td>
                      <div className="work-time-wrap">
                        <div className="work-time-item">
                          <div className="work-time-th">
                            <div className="toggle-wrap">
                              <span className="toggle-txt">운영시간</span>
                              <div className="toggle-btn">
                                <input type="checkbox" id="toggle-btn" />
                                <label className="slider" htmlFor="toggle-btn"></label>
                              </div>
                            </div>
                          </div>
                          <div className="work-time-td">
                            <div className="filed-flx g8">
                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">시</span>

                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">분</span>
                              <span className="explain">~</span>
                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">시</span>

                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">분</span>
                            </div>
                          </div>
                        </div>
                        <div className="work-time-item">
                          <div className="work-time-th">
                            <div className="toggle-wrap">
                              <span className="toggle-txt">휴게시간</span>
                              <div className="toggle-btn">
                                <input type="checkbox" id="toggle-btn" />
                                <label className="slider" htmlFor="toggle-btn"></label>
                              </div>
                            </div>
                          </div>
                          <div className="work-time-td">
                            <div className="filed-flx g8">
                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">시</span>

                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">분</span>
                              <span className="explain">~</span>
                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">시</span>

                              <div>
                                <input type="text" className="input-frame xs" defaultValue={'00'} />
                              </div>
                              <span className="explain">분</span>
                            </div>
                          </div>
                        </div>
                        <div className="work-time-item">
                          <div className="work-time-th">
                            <div className="explain">격주 근무 유무</div>
                          </div>
                          <div className="work-time-td">
                            <div className="biweek-wrap">
                              <div className="filed-check-flx mb10">
                                <div className="radio-form-box">
                                  <input type="radio" name="satType" id="satType-every" />
                                  <label htmlFor="satType-every">매주 일요일</label>
                                </div>
                                <div className="radio-form-box">
                                  <input type="radio" name="satType" id="satType-bi" />
                                  <label htmlFor="satType-bi">일요일 격주</label>
                                </div>
                              </div>
                              <div className="filed-flx g8">
                                <div className="explain">일요일 첫 근무일</div>
                                <div className="block">
                                  <DatePicker />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pop-btn-content">
              <button className="btn-form gray">취소</button>
              <button className="btn-form basic">초대하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
