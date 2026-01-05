import Link from 'next/link'

export default function BusinessPartnerJoin() {
  return (
    <div className="content-wrap">
      <div className="invitation-form">
        <div className="subscrip-tit">
          <p>BUSINESS PARTNER로 회원가입이 성공 했습니다.</p>
          <p>구독결제를 진행해 주세요.</p>
        </div>
        <div className="subscrip-form">
          <div className="subscrip-txt">구독을 위한 결제를 진행 합니다.</div>
          <table className="subscrip-table">
            <colgroup>
              <col width="60px" />
              <col width="300px" />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>선택</th>
                <th>결제 주기</th>
                <th>구독기간</th>
                <th>구독료</th>
                <th>구독료 혜택</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="radio-form-box no-txt">
                    <input type="radio" id="radio-box" />
                    <label htmlFor="radio-box"></label>
                  </div>
                </td>
                <td>월별 구독</td>
                <td>2025.01.01~2025.01.31</td>
                <td>
                  <div className="price-wrap">
                    <span className="discount">19,000원</span>
                  </div>
                </td>
                <td>
                  <div className="discount-wrap">구독료 혜택</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="radio-form-box no-txt">
                    <input type="radio" id="radio-box" />
                    <label htmlFor="radio-box"></label>
                  </div>
                </td>
                <td>6개월 구독</td>
                <td>2025.01.01~2025.05.31</td>
                <td>
                  <div className="price-wrap">
                    <span className="price">114,000원</span>
                    <span className="discount">108,300원</span>
                  </div>
                </td>
                <td>
                  5% 할인<span className="discount-money"> (월 18,050원)</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="radio-form-box no-txt">
                    <input type="radio" id="radio-box" />
                    <label htmlFor="radio-box"></label>
                  </div>
                </td>
                <td>연간 구독</td>
                <td>2025.01.01~2025.12.31</td>
                <td>
                  <div className="price-wrap">
                    <span className="price">228,000원</span>
                    <span className="discount">190,000원</span>
                  </div>
                </td>
                <td>
                  10% 할인 <span className="discount-money">(월 15,833원)</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="subscrip-guide">
            <div className="subscrip-guide-tit">유의사항</div>
            <div className="subscrip-guide-cont">
              <p>1) 월간 단위 상품은 매월 자동으로 결제가 이루어집니다.</p>
              <p>2) 1개월이 경과하기 전에 구독을 해지해도 구독 만료일까지 서비스를 이용할 수 있습니다.</p>
              <p style={{ paddingLeft: '15px' }}>
                구독 만료일 이후  서비스 이용은 불가하며 유료 결제는 이루어지지 않습니다
              </p>
              <p>3) 연간 단위의 상품은 1년의 가입을 유지하는 조건으로 할인 가격에 제공됩니다.</p>
              <p>4) 1년이 경과하기 전에 구독을 해지하면 정상가를 기준으로 사용한 금액을 공제하고 환불됩니다.</p>
              <p>5) 서비스를 아직 사용하지 않은 경우, 구매일로부터 7일 이내에 청약철회권을 행사할 수 있습니다.</p>
            </div>
          </div>
          <div className="subscrip-guide-link">
            <Link href="/">취소/환불 규정 자세히 알아보기</Link>
          </div>
        </div>
      </div>
      <div className="subscrip-form-footer">
        <button className="btn-form basic">구매하기</button>
      </div>
    </div>
  )
}
