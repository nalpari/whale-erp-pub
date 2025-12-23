export default function StorePromotion() {
  return (
    <div className="contents-wrap">
      <div className="contents-btn">
        <button className="btn-form gray">목록</button>
        <button className="btn-form basic">저장</button>
      </div>
      <div className="contents-body">
        <div className="content-wrap">
          <table className="default-table">
            <colgroup>
              <col width="180px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>시설물 및 장비 소유</th>
                <td>
                  <div className="filed-check-flx">
                    <div className="radio-form-box">
                      <input type="radio" name="operationStatus" id="operationStatus-consulting" />
                      <label htmlFor="operationStatus-consulting">본사</label>
                    </div>
                    <div className="radio-form-box">
                      <input type="radio" name="operationStatus" id="operationStatus-running" />
                      <label htmlFor="operationStatus-running">가맹점 </label>
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
                    <div className="mx-500">
                      <select name="" id="" className="select-form">
                        <option value="">전체</option>
                      </select>
                    </div>
                    <div className="mx-500">
                      <select name="" id="" className="select-form">
                        <option value="">전체</option>
                      </select>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>점포 선택</th>
                <td>
                  <div className="mx-500">
                    <select name="" id="" className="select-form">
                      <option value="">전체</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  프로모션 명 <span className="red">*</span>
                </th>
                <td>
                  <div className="mx-500">
                    <input type="text" className="input-frame" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-wrap">
          <div className="content-header">프로모션 메뉴 구성</div>
          <div className="promotion-header">
            <div className="flx-bx">
              <div className="flx-bx">
                <div className="filed-tit">
                  할인 분류 <span className="red">*</span>
                </div>
                <div className="mx-500">
                  <input type="text" className="input-frame" />
                </div>
              </div>
              <div className="flx-bx">
                <div className="filed-tit">할인가/할인율 </div>
                <div className="flx-bx g10">
                  <div className="mx-500">
                    <input type="text" className="input-frame" />
                  </div>
                  <span>원</span>
                  <button className="btn-form outline s">적용</button>
                </div>
              </div>
            </div>
          </div>
          <div className="promotion-body">
            <table className="promotion-table">
              <colgroup>
                <col width="180px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>
                    <div className="check-form-box">
                      <input type="checkbox" id="check-box" />
                      <label htmlFor="check-box">메뉴 01</label>
                    </div>
                  </th>
                  <td>
                    <div className="flx-bx">
                      <div className="flx-bx flx1">
                        <div className="block">
                          <select name="" id="" className="select-form">
                            <option value="">전체</option>
                          </select>
                        </div>
                      </div>
                      <div className="flx-bx">
                        <div className="filed-tit">판매가</div>
                        <div className="block">
                          <input type="text" className="input-frame" readOnly />
                        </div>
                      </div>
                      <div className="flx-bx">
                        <div className="filed-tit">할인가</div>
                        <div className="block">
                          <input type="text" className="input-frame" readOnly />
                        </div>
                      </div>
                      <div className="flx-bx">
                        <div className="filed-tit">
                          프로모션가 <span className="red">*</span>
                        </div>
                        <div className="block">
                          <input type="text" className="input-frame" readOnly />
                        </div>
                      </div>
                      <div className="auto-right">
                        <div className="more-btn">
                          <span className="icon-more"></span>
                          <div className="option-list">
                            <button className="option-item">Partner Fuction 추가</button>
                            <button className="option-item">Partner Fuction 삭제</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div className="check-form-box">
                      <input type="checkbox" id="check-box" />
                      <label htmlFor="check-box">메뉴 01</label>
                    </div>
                  </th>
                  <td>
                    <div className="flx-bx">
                      <div className="flx-bx flx1">
                        <div className="block">
                          <select name="" id="" className="select-form">
                            <option value="">전체</option>
                          </select>
                        </div>
                      </div>
                      <div className="flx-bx">
                        <div className="filed-tit">판매가</div>
                        <div className="block">
                          <input type="text" className="input-frame" readOnly />
                        </div>
                      </div>
                      <div className="flx-bx">
                        <div className="filed-tit">할인가</div>
                        <div className="block">
                          <input type="text" className="input-frame" readOnly />
                        </div>
                      </div>
                      <div className="flx-bx">
                        <div className="filed-tit">
                          프로모션가 <span className="red">*</span>
                        </div>
                        <div className="block">
                          <input type="text" className="input-frame" readOnly />
                        </div>
                      </div>
                      <div className="auto-right">
                        <div className="more-btn">
                          <span className="icon-more"></span>
                          <div className="option-list act">
                            <button className="option-item">Partner Fuction 추가</button>
                            <button className="option-item">Partner Fuction 삭제</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div className="check-form-box">
                      <input type="checkbox" id="check-box" />
                      <label htmlFor="check-box">메뉴 01</label>
                    </div>
                  </th>
                  <td>
                    <div className="flx-bx">
                      <div className="flx-bx flx1">
                        <div className="block">
                          <select name="" id="" className="select-form">
                            <option value="">전체</option>
                          </select>
                        </div>
                      </div>
                      <div className="flx-bx">
                        <div className="filed-tit">판매가</div>
                        <div className="block">
                          <input type="text" className="input-frame" readOnly />
                        </div>
                      </div>
                      <div className="flx-bx">
                        <div className="filed-tit">할인가</div>
                        <div className="block">
                          <input type="text" className="input-frame" readOnly />
                        </div>
                      </div>
                      <div className="flx-bx">
                        <div className="filed-tit">
                          프로모션가 <span className="red">*</span>
                        </div>
                        <div className="block">
                          <input type="text" className="input-frame" readOnly />
                        </div>
                      </div>
                      <div className="auto-right">
                        <div className="more-btn">
                          <span className="icon-more"></span>
                          <div className="option-list">
                            <button className="option-item">Partner Fuction 추가</button>
                            <button className="option-item">Partner Fuction 삭제</button>
                          </div>
                        </div>
                      </div>
                    </div>
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
