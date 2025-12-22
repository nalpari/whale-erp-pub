export default function AddSotreMenuPop() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header">
            <h2>점포 메뉴 추가</h2>
            <button className="modal-close"></button>
          </div>
          <div className="modal-body">
            <div className="pop-guide">
              선택한 마스터용 카테고리 모든 마스터용 카테고리를 점포용 카테고리로 추가할 수 있습니다. 추가를 진행할
              점포를 선택해 주세요.
            </div>
            <table className="pop-table">
              <colgroup>
                <col width="120px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>
                    옵션 <span className="red">*</span>
                  </th>
                  <td>
                    <div className="filed-flx">
                      <div className="filed-check-flx">
                        <div className="radio-form-box">
                          <input type="radio" name="option" id="option-all" />
                          <label htmlFor="option-all">선택한 카테고리만 추가</label>
                        </div>
                        <div className="radio-form-box">
                          <input type="radio" name="option" id="option-all" />
                          <label htmlFor="option-all">모든 마스터 카테고리 추가</label>
                        </div>
                      </div>
                      <button className="tooltip-btn">
                        <span className="tooltip-icon"></span>
                        <span className="tooltip-txt">
                          <b>1. 선택한 메뉴만 추가</b>
                          <i>리스트에서 선택한 메뉴만 점포용 메뉴에 추가합니다.</i>
                          <b>2. 모든 마스터 메뉴 추가</b>
                          <i>
                            리스트에서 선택한 메뉴와 상관없이 사업자가 등록한 모든 마스터용 메뉴를 점포용 메뉴에
                            추가합니다.
                          </i>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>운영여부 선택</th>
                  <td>
                    <div className="filed-flx">
                      <div className="filed-check-flx">
                        <div className="radio-form-box">
                          <input type="radio" name="option" id="option-all" />
                          <label htmlFor="option-all">운영</label>
                        </div>
                        <div className="radio-form-box">
                          <input type="radio" name="option" id="option-all" />
                          <label htmlFor="option-all">미운영</label>
                        </div>
                      </div>
                      <button className="tooltip-btn">
                        <span className="tooltip-icon"></span>
                        <span className="tooltip-txt">
                          <i>점포용 메뉴를 생성할 때 생성 후 바로 사용할 수 있는지 여부를 선택합니다.</i>
                          <i>‘운영’으로 체크하시면 점포용 메뉴가 생성 후 바로 고객의 APP에 노출됩니다.</i>
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    점포 선택<span className="red">*</span>
                  </th>
                  <td>
                    <div className="filed-flx">
                      <div className="block">
                        <select name="" id="" className="select-form">
                          <option value="">전체</option>
                        </select>
                      </div>
                      <button className="btn-form outline s">추가</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="add-store-list">
              <li className="add-store-list-item">
                <span>전체 점포</span>
                <button className="file-delete"></button>
              </li>
              <li className="add-store-list-item">
                <span>힘이나는커피생활무교점</span>
                <button className="file-delete"></button>
              </li>
              <li className="add-store-list-item">
                <span>힘이나는커피생활 을지로3가점</span>
                <button className="file-delete"></button>
              </li>
            </ul>
            <div className="pop-btn-content">
              <button className="btn-form gray">취소</button>
              <button className="btn-form basic">동기화</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
