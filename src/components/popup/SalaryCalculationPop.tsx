export default function SalaryCalculationPop() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog xl">
        <div className="modal-content">
          <div className="modal-header">
            <h2>연봉 및 통상시급 계산기</h2>
            <button className="modal-close"></button>
          </div>
          <div className="modal-body">
            <div className="pop-frame">
              <table className="calculation-hd-table">
                <colgroup>
                  <col width="100px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      계약분류 <span className="red">*</span>
                    </th>
                    <td>
                      <div className="filed-flx">
                        <div className="mx-160">
                          <select className="select-form">
                            <option value="">포괄연봉제</option>
                          </select>
                        </div>
                        <div className="mx-160">
                          <select className="select-form">
                            <option value="">2025년</option>
                          </select>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>통상시급</th>
                    <td>
                      <div className="filed-flx">
                        <div className="filed-flx g16">
                          <div className="filed-flx">
                            <div className="mx-160">
                              <input type="text" className="input-frame black al-r" defaultValue={'15,000'} />
                            </div>
                            <span className="explain">원</span>
                          </div>
                          <div className="filed-warning">
                            <span className="warning-icon"></span>
                            <span className="warning-txt">최저 시급 미달(10,300)</span>
                          </div>
                        </div>
                        <div className="filed-flx g8 auto-right">
                          <button className="btn-form outline s">계산하기</button>
                          <button className="btn-form outline s">초기화</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="calculation-table">
                <colgroup>
                  <col width="240px" />
                  <col width="90px" />
                  <col width="180px" />
                  <col width="160px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <div className="filed-flx">
                        <span>
                          주당 근무시간 <span className="red">*</span>
                        </span>
                        <div className="auto-right">
                          <button className="tooltip-btn">
                            <span className="tooltip-icon"></span>
                            <span className="tooltip-txt">
                              <i>한주에 직원이 근무해야 하는 시간을 입력합니다.</i>
                              <i>일반적으로 9 to 6 인 경우 하루 8시간 근무이며, 주단위로는 40시간입니다.</i>
                              <i>주당 15시간 이상 근무일 경우 주휴수당(근무시간/5)을 함께 계산합니다.</i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'70'} />
                      </div>
                    </td>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'3,135,000'} readOnly />
                      </div>
                    </td>
                    <th>
                      <div className="filed-flx">
                        <span>식대</span>
                        <div className="auto-right">
                          <button className="tooltip-btn">
                            <span className="tooltip-icon"></span>
                            <span className="tooltip-txt">
                              <i>식대는 비과세항목입니다.</i>
                              <i>식대를 입력하고, 급여에 포함할 경우 과세범위에서 제외됩니다.</i>
                              <i>식대를 입력하고, 급여에 포함하지 않을 경우 급여와는 별도로 지급해야 합니다.</i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="filed-flx">
                        <div className="toggle-wrap">
                          <span className="toggle-txt">급여에 포함</span>
                          <div className="toggle-btn">
                            <input type="checkbox" id="toggle-btn" />
                            <label className="slider" htmlFor="toggle-btn"></label>
                          </div>
                        </div>
                        <div className="block">
                          <input type="text" className="input-frame al-r" defaultValue={'200,000'} />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="filed-flx">
                        <span>월간 기본근무</span>
                        <div className="auto-right">
                          <button className="tooltip-btn">
                            <span className="tooltip-icon"></span>
                            <span className="tooltip-txt">
                              <i>한달에 직원이 근무해야 하는 시간을 표시합니다.</i>
                              <i>
                                일반적으로 주단위로는 40시간을 근무할 경우 월간 174시간이지만, 주휴시간(근무시간/5)을
                                함께 계산하면 209시간이 됩니다
                              </i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'70'} />
                      </div>
                    </td>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'3,135,000'} readOnly />
                      </div>
                    </td>
                    <th>
                      <div className="filed-flx">
                        <span>자가운전보조금</span>
                        <div className="auto-right">
                          <button className="tooltip-btn">
                            <span className="tooltip-icon"></span>
                            <span className="tooltip-txt">
                              <i>
                                자가운전보조금은 비과세항목입니다. 차량을 소유한 직원에게만 해당합니다.(차량 소유가
                                필수는 아님)
                              </i>
                              <i>자가운전보조금을 입력하고, 급여에 포함할 경우 과세범위에서 제외됩니다.</i>
                              <i>
                                자가운전보조금을 입력하고, 급여에 포함하지 않을 경우 급여와는 별도로 지급해야 합니다
                              </i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="filed-flx">
                        <div className="toggle-wrap">
                          <span className="toggle-txt">급여에 포함</span>
                          <div className="toggle-btn">
                            <input type="checkbox" id="toggle-btn" />
                            <label className="slider" htmlFor="toggle-btn"></label>
                          </div>
                        </div>
                        <div className="block">
                          <input type="text" className="input-frame al-r" defaultValue={'200,000'} />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="filed-flx">
                        <span>월간 연장근무</span>
                        <div className="auto-right">
                          <button className="tooltip-btn">
                            <span className="tooltip-icon"></span>
                            <span className="tooltip-txt">
                              <i>근로자가 법정 근로시간(1일 8시간, 주 40시간)을 초과하여 근무하는 시간입니다.</i>
                              <i>통상임금에 50%를 가산하여 지급해야 하는 추가 수당입니다.</i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'70'} />
                      </div>
                    </td>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'3,135,000'} readOnly />
                      </div>
                    </td>
                    <th>
                      <div className="filed-flx">
                        <span>육아수당</span>
                        <div className="auto-right">
                          <button className="tooltip-btn">
                            <span className="tooltip-icon"></span>
                            <span className="tooltip-txt">
                              <i>유아수당은 비과세항목입니다.</i>
                              <i>미취학 아동이 있는 직원에게만 해당합니다.</i>
                              <i>유아수당을 입력하고, 급여에 포함할 경우 과세범위에서 제외됩니다.</i>
                              <i>유아수당을 입력하고, 급여에 포함하지 않을 경우 급여와는 별도로 지급해야 합니다</i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="filed-flx">
                        <div className="toggle-wrap">
                          <span className="toggle-txt">급여에 포함</span>
                          <div className="toggle-btn">
                            <input type="checkbox" id="toggle-btn" />
                            <label className="slider" htmlFor="toggle-btn"></label>
                          </div>
                        </div>
                        <div className="block">
                          <input type="text" className="input-frame al-r" defaultValue={'200,000'} />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="filed-flx">
                        <span>월간 추가 휴일근무</span>
                        <div className="auto-right">
                          <button className="tooltip-btn">
                            <span className="tooltip-icon"></span>
                            <span className="tooltip-txt">
                              <i>근로자가 법정 근로시간(1일 8시간, 주 40시간)을 초과하여 휴일에 근무하는 시간입니다.</i>
                              <i>통상임금에 50%를 가산하여 지급해야 하는 추가 수당입니다.</i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'70'} />
                      </div>
                    </td>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'3,135,000'} readOnly />
                      </div>
                    </td>
                    <th></th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>
                      <div className="filed-flx">
                        <span>
                          월간 야간근무
                          <br /> (기본근무 중 야간근무 시간)
                        </span>
                        <div className="auto-right">
                          <button className="tooltip-btn">
                            <span className="tooltip-icon"></span>
                            <span className="tooltip-txt">
                              <i>근로자가 법정 근로시간(1일 8시간, 주 40시간) 내에 야간에 근무하는 시간입니다.</i>
                              <i>통상임금에 50%를 가산하여 지급해야 하는 추가 수당입니다.</i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'70'} />
                      </div>
                    </td>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'3,135,000'} readOnly />
                      </div>
                    </td>
                    <th></th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>
                      <div className="filed-flx">
                        <span>
                          월간 휴일근무
                          <br /> (기본근무 중 휴일근무 시간)
                        </span>
                        <div className="auto-right">
                          <button className="tooltip-btn">
                            <span className="tooltip-icon"></span>
                            <span className="tooltip-txt">
                              <i>근로자가 법정 근로시간(1일 8시간, 주 40시간) 내에 휴일에 근무하는 시간입니다.</i>
                              <i>통상임금에 50%를 가산하여 지급해야 하는 추가 수당입니다.</i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'70'} />
                      </div>
                    </td>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'3,135,000'} readOnly />
                      </div>
                    </td>
                    <th>월급여 총액</th>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'3,135,000'} readOnly />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <div className="filed-flx">
                        <span>월간 총 근무 시간</span>
                        <div className="auto-right">
                          <button className="tooltip-btn">
                            <span className="tooltip-icon"></span>
                            <span className="tooltip-txt">
                              <i>근로자가 월간 근무하는 총 근로시간을 표시합니다.</i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'70'} />
                      </div>
                    </td>
                    <td>
                      <div className="filed-warning">
                        <span className="warning-icon"></span>
                        <span className="warning-txt">주 52시간 초과</span>
                      </div>
                    </td>
                    <th>연봉 총액</th>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame al-r" defaultValue={'3,135,000'} readOnly />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pop-btn-content">
              <button className="btn-form gray">취소</button>
              <button className="btn-form basic">적용</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
