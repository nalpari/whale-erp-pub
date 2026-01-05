export default function ComparisonPop() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog large">
        <div className="modal-content">
          <div className="modal-header">
            <h2>ERP 요금제 기능 비교</h2>
            <button className="modal-close"></button>
          </div>
          <div className="modal-body">
            <div className="pop-frame">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>요금제명</th>
                    <th>FREE</th>
                    <th>STANDARD</th>
                    <th>ENTERPRISE</th>
                    <th>FRANCHISE</th>
                  </tr>
                  <tr>
                    <th>
                      <button className="comparison-btn">수정</button>
                    </th>
                    <th>
                      <button className="comparison-btn">수정</button>
                    </th>
                    <th>
                      <button className="comparison-btn">수정</button>
                    </th>
                    <th>
                      <button className="comparison-btn">수정</button>
                    </th>
                    <th>
                      <button className="comparison-btn">수정</button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="data">
                    <td className="al-l">점포</td>
                    <td>1</td>
                    <td></td>
                    <td>25</td>
                    <td>25</td>
                  </tr>
                  <tr className="data">
                    <td className="al-l">직원</td>
                    <td>1</td>
                    <td></td>
                    <td>무제한</td>
                    <td>무제한</td>
                  </tr>
                  <tr className="data">
                    <td className="al-l">기능</td>
                    <td>8</td>
                    <td></td>
                    <td>20</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td className="al-l">점포관리</td>
                    <td>
                      <i className="comparison-check"></i>
                    </td>
                    <td></td>
                    <td>
                      <i className="comparison-check"></i>
                    </td>
                    <td>
                      <i className="comparison-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="al-l">직원관리</td>
                    <td>
                      <i className="comparison-check"></i>
                    </td>
                    <td></td>
                    <td>
                      <i className="comparison-check"></i>
                    </td>
                    <td>
                      <i className="comparison-check"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
