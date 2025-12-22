export default function WithdrawalPop() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog small">
        <div className="modal-content">
          <div className="modal-header">
            <h2>회원 탈퇴</h2>
            <button className="modal-close"></button>
          </div>
          <div className="modal-body">
            <div className="pop-form-content">
              <div className="pop-form-item">
                <div className="pop-form-tit">
                  탈퇴 사유 <span className="red">*</span>
                </div>
                <div className="pop-form-filed">
                  <select className="select-form">
                    <option value="">선택</option>
                  </select>
                </div>
              </div>
              <div className="pop-form-item">
                <div className="pop-form-tit">
                  탈퇴 사유 입력 <span className="red">*</span>
                </div>
                <div className="pop-form-filed">
                  <textarea className="textarea-form"></textarea>
                </div>
              </div>
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
