export default function CategoryEditPop() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header">
            <h2>마스터용 카테고리 등록, 수정</h2>
            <button className="modal-close"></button>
          </div>
          <div className="modal-body">
            <div className="pop-frame">
              <table className="pop-table">
                <colgroup>
                  <col width="120px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>Level 1</th>
                    <td>
                      <div className="filed-flx">
                        <div className="block">
                          <input type="text" className="input-frame" readOnly />
                        </div>
                        <span className="explain">BIM1001</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      운영여부<span className="red">*</span>
                    </th>
                    <td>
                      <div className="filed-flx">
                        <div className="toggle-btn">
                          <input type="checkbox" id="toggle-btn" />
                          <label className="slider" htmlFor="toggle-btn"></label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      고정형 여부<span className="red">*</span>
                    </th>
                    <td>
                      <div className="filed-flx">
                        <div className="toggle-btn">
                          <input type="checkbox" id="toggle-btn" />
                          <label className="slider" htmlFor="toggle-btn"></label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>카테고리 코드</th>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame" readOnly />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      카테고리 명 <span className="red">*</span>
                    </th>
                    <td>
                      <div className="block">
                        <div className="input-icon-frame err">
                          <input type="text" />
                          <button type="button" className="input-icon-btn del"></button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>등록일</th>
                    <td>
                      <div className="block">
                        <input type="text" className="input-frame" readOnly />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pop-btn-content">
              <button className="btn-form gray">취소</button>
              <button className="btn-form basic">저장</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
