export default function ElectronicReceiptPop() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog large">
        <div className="modal-content mypage-sub">
          <div className="mypage-header">
            <h2>전자영수증 확인</h2>
            <button className="modal-close"></button>
          </div>
          <div className="mypage-body">
            <div className="pop-frame">
              <table className="receip-table col">
                <colgroup>
                  <col width="120px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>고객정보</th>
                    <td>홍길동 (010-71**-11**)</td>
                  </tr>
                </tbody>
              </table>
              <div className="receip-wrap">
                <div className="receip-tit">납부내역</div>
                <table className="receip-table">
                  <colgroup>
                    <col width="240px" />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>상품명</th>
                      <th>납부일</th>
                      <th>납부방법</th>
                      <th>금액(원)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="al-l bold">ERP_STANDARD</td>
                      <td>2025.10.28</td>
                      <td>계좌이체</td>
                      <td className="al-r">9,000원</td>
                    </tr>
                    <tr>
                      <td className="al-l bold">ERP_STANDARD</td>
                      <td>2025.10.28</td>
                      <td>신용카드</td>
                      <td className="al-r">9,000원</td>
                    </tr>
                    <tr>
                      <td className="al-l bold">ERP_ FREE</td>
                      <td>2025.10.28</td>
                      <td>계좌이체</td>
                      <td className="al-r">9,000원</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4}>
                        <div className="total-data">
                          <span>합계</span>
                          <span className="total-price">27,000원</span>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="today-info">
                <span>2025.12.04</span>
                <span>주식회사 인터플러그</span>
              </div>
            </div>
            <div className="pop-btn-content">
              <button className="btn-form gray">취소</button>
              <button className="btn-form basic">인쇄하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
