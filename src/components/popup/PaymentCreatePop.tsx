import Link from 'next/link'

export default function PaymentCreatePop() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog medium">
        <div className="modal-content mypage-sub">
          <div className="mypage-header">
            <h2>결제수단 등록</h2>
            <button className="modal-close"></button>
          </div>
          <div className="mypage-body">
            <div className="pop-frame">
              <div className="pay-create-guide">※ 본인명의 카드로 최대2개까지 등록이 가능합니다.</div>
              <table className="pop-table mb15">
                <colgroup>
                  <col width="130px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      결제카드 선택<span className="red"> *</span>
                    </th>
                    <td>
                      <div className="block">
                        <select className="select-form">
                          <option value="">신용 / 체크카드</option>
                          <option value="">카카오페이</option>
                          <option value="">네이버페이</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      카드번호<span className="red"> *</span>
                    </th>
                    <td>
                      <div className="block">
                        <input type="number" className="input-frame" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="pay-create-warning">등록하기 버튼 클릭 시 Error Message</div>
              <div className="approve-check-wrap">
                <div className="check-form-box">
                  <input type="checkbox" id="approve-check" />
                  <label htmlFor="approve-check">[카드등록] 개인정보 제3자 제공 동의 (필수)</label>
                </div>
                <Link href="/">보기</Link>
              </div>
            </div>
            <div className="pop-btn-content">
              <button className="btn-form basic">등록하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
