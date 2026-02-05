export default function NoticePop() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog notice">
        <div className="modal-content">
          <div className="modal-header">
            <button className="modal-close"></button>
          </div>
          <div className="modal-body">
            <div className="notice-wrap">
              <div className="notice-header">
                <div className="notice-date">2026.01.20</div>
                <div className="notice-tit">서버 교체 및 버전 업그레이드 작업 사전 안내</div>
              </div>
              <div className="notice-content">
                <p>
                  안정적인 서비스 제공과 성능 향상을 위해 아래와 같이 서버 교체 및 시스템 버전 업그레이드 작업이
                  예정되어 있어 사전에 안내드립니다. 보다 안정적이고 향상된 서비스를 제공해 드리기 위한 작업이오니
                  이용에 불편을 드리게 된 점 양해 부탁드립니다. 감사합니다.
                </p>
              </div>
              <div className="notice-file">
                <div className="notice-file-tit">첨부파일</div>
                <ul className="notice-file-list">
                  <li className="notice-file-item">
                    <button className="notice-file-btn">가격정책 개인정보 보로방침 업데이트.PDF</button>
                  </li>
                  <li className="notice-file-item">
                    <button className="notice-file-btn">가격정책 개인정보 보로방침 업데이트.PDF</button>
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
