export default function InvitationForm() {
  return (
    <div className="invitation-form">
      <div className="invitation-form-header">
        <div className="invitation-select-tit">본사</div>
        <div className="invitation-select-box">
          <select name="" id="" className="select-form">
            <option value="">선택</option>
          </select>
        </div>
      </div>
      <div className="invitation-form-content">
        <div className="invitation-cont-guide">
          <div className="invitation-cont-tit">가맹점을 WHALE ERP로 초대하시겠습니까?</div>
          <div className="invitation-guide-desc">
            <span>
              초대된 사업자가 가맹점으로 가입하면 <i>본사 BP명</i>님의 가맹점으로 등록됩니다.
            </span>
            <span>
              가맹점으로 등록된 사업자는 &#123;본사 BP명&#125; 님의 메뉴, 가격, 카테고리 등 정보를 공유 받을 수
              있습니다.
            </span>
            <span>님은 가맹점으로 초대된 사업자의 ERP 활동 내역을 조회할 수 있습니다.</span>
          </div>
        </div>
        <div className="invitation-cont-form">
          <div className="invitation-cont-tit">초대하고자 하는 사업자의 정보를 입력하세요.</div>
          <table className="default-table">
            <colgroup>
              <col width="160px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  사업자등록번호 <span className="red">*</span>
                </th>
                <td>
                  <div className="invitation-flx">
                    <div className="invitation-input">
                      <div className="input-icon-frame err">
                        <input type="text" />
                        <button type="button" className="input-icon-btn del"></button>
                      </div>
                    </div>
                    <div className="invitation-btn">
                      <button className="btn-form outline s">인증하기</button>
                    </div>
                    <div className="invitation-warning">유효한 사업자등록번호가 아닙니다</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  대표자 성명 <span className="red">*</span>
                </th>
                <td>
                  <div className="invitation-flx">
                    <div className="invitation-input">
                      <div className="input-icon-frame err">
                        <input type="text" />
                        <button type="button" className="input-icon-btn del"></button>
                      </div>
                    </div>
                    <div className="invitation-explain">※ 사업자등록증 상의 대표자명을 입력해 주세요.</div>
                    <div className="invitation-warning">※ 대표자 성명이 일치하지 않습니다.</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  대표자 휴대폰 번호 <span className="red">*</span>
                </th>
                <td>
                  <div className="invitation-flx">
                    <div className="invitation-input">
                      <div className="input-icon-frame err">
                        <input type="text" />
                        <button type="button" className="input-icon-btn del"></button>
                      </div>
                    </div>
                    <div className="invitation-explain">※ 대표자님의 휴대폰 번호를 입력해 주세요.</div>
                    <div className="invitation-warning">※ 대표자 휴대폰 번호가 일치하지 않습니다.</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  대표자 이메일 주소 <span className="red">*</span>
                </th>
                <td>
                  <div className="invitation-flx">
                    <div className="invitation-input">
                      <div className="input-icon-frame err">
                        <input type="text" />
                        <button type="button" className="input-icon-btn del"></button>
                      </div>
                    </div>
                    <div className="invitation-explain">※ 대표자님의 이메일 주소를 입력해 주세요.</div>
                    <div className="invitation-warning">※ 대표자 이메일 주소가 일치하지 않습니다.</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="invitation-cont-guide">
          <div className="invitation-guide-desc">
            <span>초대 이메일을 발송합니다.</span>
            <span>초대 이메일에 기재된 BUSINESS PARTNER 번호를 입력하고 회원가입을 하십시오.</span>
          </div>
        </div>
      </div>
      <div className="invitation-form-footer">
        <button className="btn-form gray">취소</button>
        <button className="btn-form basic">초대하기</button>
      </div>
    </div>
  )
}
