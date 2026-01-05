export default function SubscripPayPop() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>구독결제하기</h2>
            <button className="modal-close"></button>
          </div>
          <div className="modal-body">
            <div className="pop-frame">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>제품명</th>
                    <th>이용요금</th>
                    <th>청구시작일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="data">
                    <td className="al-l">ERP ENTERPRISE</td>
                    <td>9.900원 / 월</td>
                    <td>2025.12.26</td>
                  </tr>
                </tbody>
              </table>
              <div className="pay-btn-wrap">
                <div className="pay-btn-tit">결제수단 선택</div>
                <div className="pay-btn-item">
                  <button className="pay-btn act">
                    <i className="pay-btn-icon card"></i>
                    <span>신용 / 체크카드</span>
                  </button>
                  <button className="pay-btn">
                    <i className="pay-btn-icon kakao"></i>
                    <span>카카오페이</span>
                  </button>
                  <button className="pay-btn">
                    <i className="pay-btn-icon naver"></i>
                    <span>네이버페이</span>
                  </button>
                </div>
              </div>
              <div className="total-pay-wrap">
                <button className="total-pay-btn">
                  <span>결제하기</span>
                  <span className="total-price">9,900원</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
