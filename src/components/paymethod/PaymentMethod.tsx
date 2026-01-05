export default function PaymentMethod() {
  return (
    <div className="contents-wrap">
      <div className="contents-body">
        <div className="content-wrap">
          <div className="pay-method-wrap">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="pay-method-item" key={index}>
                <div className="pay-method-inner">
                  <div className="pay-method-tit">현대 ZERO Ed3(할인카드)</div>
                  <div className="pay-method-num">12345*****123*</div>
                  <button className="pay-method-btn">삭제</button>
                </div>
                <div className="pay-method-date">
                  <span>등록일</span>
                  <span>2025.11.12 10:10:12</span>
                </div>
              </div>
            ))}
          </div>
          <div className="pay-method-btn-wrap">
            <button className="pay-method-btn">
              <i className="create"></i> 결제수단 등록
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
