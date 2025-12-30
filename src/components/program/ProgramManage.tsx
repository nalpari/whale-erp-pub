export default function ProgramManagement() {
  return (
    <div className="contents-wrap">
      <div className="contents-body">
        <div className="content-wrap">
          <table className="default-table">
            <colgroup>
              <col width="120px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>메뉴 검색</th>
                <td>
                  <input type="text" className="input-frame" />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div className="filed-flx">
                    <div className="auto-right g8">
                      <button className="btn-form gray">초기화</button>
                      <button className="btn-form basic">검색</button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="program-result">
            <div className="program-result-tit">검색결과</div>
            <div className="program-result-list-wrap">
              <ul className="program-result-list">
                <li className="program-result-item">Master</li>
                <li className="program-result-item">
                  <span>주문</span> 관리
                </li>
              </ul>
              <ul className="program-result-list">
                <li className="program-result-item">
                  <span>주문</span> 관리
                </li>
              </ul>
              <ul className="program-result-list">
                <li className="program-result-item">
                  <span>주문</span> 관리
                </li>
                <li className="program-result-item">
                  <span>주문</span> 관리
                </li>
              </ul>
              <ul className="program-result-list">
                <li className="program-result-item">통계 및 이력</li>
                <li className="program-result-item">통계 관리</li>
                <li className="program-result-item">
                  <span>주문</span> 관리
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-wrap">
          <div className="data-list-header">
            <div className="hierarchy-bx">
              <div className="hierarchy-tit">프로그램 계층 관리</div>
              <div className="hierarchy-txt">드래그 앤 드롭을 사용하여 동일 레벨 내 순서를 변경할 수 있습니다.</div>
            </div>
            <div className="data-header-right">
              <button className="btn-form basic s">
                <i className="plus"></i> 최상위 추가
              </button>
            </div>
          </div>
          <div className="hierarchy-wrap">
            <ul className="hierarchy-list depth01">
              <li className="hierarchy-item ">
                <div className="hierarchy-depth ">
                  <button className="order-btn"></button>
                  <div className="depth-inner">
                    <button className="depth-arr"></button>
                    <div className="depth-name">Master Data 관리</div>
                  </div>
                  <div className="depth-right">
                    <div className="depth-btn-wrap">
                      <button className="depth-btn create"></button>
                      <button className="depth-btn edit"></button>
                      <button className="depth-btn delete"></button>
                    </div>
                  </div>
                </div>
                <ul className="hierarchy-list depth02 ">
                  <li className="hierarchy-item disabled">
                    <div className="hierarchy-depth ">
                      <button className="order-btn"></button>
                      <div className="depth-inner">
                        <button className="depth-arr"></button>
                        <div className="depth-name">Business Partner Master</div>
                      </div>
                      <div className="depth-right">
                        <div className="disable-badge">비활성</div>
                        <div className="depth-btn-wrap">
                          <button className="depth-btn create"></button>
                          <button className="depth-btn edit"></button>
                          <button className="depth-btn delete"></button>
                        </div>
                      </div>
                    </div>
                    <ul className="hierarchy-list depth03">
                      <li className="hierarchy-item ">
                        <div className="hierarchy-depth ">
                          <button className="order-btn"></button>
                          <div className="depth-inner">
                            <div className="depth-name">Business Partner 관리</div>
                          </div>
                          <div className="depth-right">
                            <div className="path-name">/master-data/business-partner/m..</div>
                            <div className="depth-btn-wrap">
                              <button className="depth-btn edit"></button>
                              <button className="depth-btn delete"></button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="hierarchy-item ">
                        <div className="hierarchy-depth ">
                          <button className="order-btn"></button>
                          <div className="depth-inner">
                            <div className="depth-name">Business Partner 초대이메일</div>
                          </div>
                          <div className="depth-right">
                            <div className="path-name">/master-data/business-partner/m..</div>
                            <div className="depth-btn-wrap">
                              <button className="depth-btn edit"></button>
                              <button className="depth-btn delete"></button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="hierarchy-item">
                    <div className="hierarchy-depth ">
                      <button className="order-btn"></button>
                      <div className="depth-inner">
                        <button className="depth-arr"></button>
                        <div className="depth-name">Business Partner Master</div>
                      </div>
                      <div className="depth-right">
                        <div className="depth-btn-wrap">
                          <button className="depth-btn create"></button>
                          <button className="depth-btn edit"></button>
                          <button className="depth-btn delete"></button>
                        </div>
                      </div>
                    </div>
                    <ul className="hierarchy-list depth03">
                      <li className="hierarchy-item">
                        <div className="hierarchy-depth ">
                          <button className="order-btn"></button>
                          <div className="depth-inner">
                            <div className="depth-name">Business Partner 관리</div>
                          </div>
                          <div className="depth-right">
                            <div className="path-name">/master-data/business-partner/m..</div>
                            <div className="depth-btn-wrap">
                              <button className="depth-btn edit"></button>
                              <button className="depth-btn delete"></button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
