export default function ContactSuccessPop() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog contact">
        <div className="modal-content">
          <div className="modal-header">
            <button className="modal-close"></button>
          </div>
          <div className="modal-body">
            <div className="contact-success-wrap">
              <div className="contact-name">홍길동 님</div>
              <div className="contact-txt">
                <span>문의사항이 성공적으로 접수되었습니다.</span>
                <span>입력해주신 이메일 또는 휴대전화 번호로 연락 드리겠습니다.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
