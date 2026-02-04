export default function Alert() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog small">
        <div className="modal-content">
          <div className="modal-body">
            <div className="pop-frame">
              <div className="alert-txt">
                <span>변경 내용을 저장 하시겠습니까?</span>
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
