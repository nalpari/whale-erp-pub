export default function SendEmailPop() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog large">
        <div className="modal-content">
          <div className="modal-header">
            <h2>이메일 발송</h2>
            <button className="modal-close"></button>
          </div>
          <div className="modal-body">
            <div className="pop-frame">
              <table className="pop-table">
                <colgroup>
                  <col width="120px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>보내는 사람</th>
                    <td>hoho@naver.co.kr</td>
                  </tr>
                  <tr>
                    <th>
                      받는 사람 <span className="red">*</span>
                    </th>
                    <td>
                      <div className="block">
                        <select className="select-form">
                          <option value="">선택</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>총 1,000명</th>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <div className="block">
                        <textarea
                          name=""
                          id=""
                          className="textarea-form"
                          placeholder={`※ 이메일 주소 직접 입력, 복수의 이메일 주소를 입력할 경우 쉼표(,)로 구분
예) khg@interplug.co.kr, hg123@interplug.co.kr`}
                        ></textarea>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <div className="filed-flx mb10">
                        <div>※ 이메일이 저장된 엑셀파일을 업로드하여 발송</div>
                        <button className="s-btn basic">
                          샘플 <i className="down"></i>
                        </button>
                        <button className="s-btn basic">유효성 검사</button>
                      </div>
                      <div className="filed-file mb10">
                        <input type="file" className="file-input" id="file-input" />
                        <label htmlFor="file-input" className="btn-form outline s">
                          파일 찾기
                        </label>
                      </div>
                      <div className="file-bx">
                        <div className="file-guide">Drag & Drop으로 파일을 옮겨주세요.</div>
                        <ul className="file-list">
                          <li className="file-item">
                            <div className="file-item-wrap">
                              <button className="file-name">을지로3가점 영업허가증.pdf</button>
                              <button className="file-delete"></button>
                            </div>
                          </li>
                          <li className="file-item">
                            <div className="file-item-wrap">
                              <button className="file-name">을지로3가점 영업허가증.pdf</button>
                              <button className="file-delete"></button>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="warning-txt mt5">* 업로드 실패 했습니다. 수정 후 다시 업로드 해주세요</div>
                    </td>
                  </tr>
                  <tr>
                    <th>발송방식</th>
                    <td>
                      <div className="filed-check-flx">
                        <div className="radio-form-box">
                          <input type="radio" name="sendMethod" id="sendMethod-sms" defaultChecked />
                          <label htmlFor="sendMethod-sms">SMS</label>
                        </div>
                        <div className="radio-form-box">
                          <input type="radio" name="sendMethod" id="sendMethod-mms" />
                          <label htmlFor="sendMethod-mms">MMS</label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      제목 <span className="red">*</span>
                    </th>
                    <td>
                      <div className="block">
                        <div className="input-icon-frame err">
                          <input type="text" />
                          <button type="button" className="input-icon-btn del"></button>
                        </div>
                      </div>
                      <div className="warning-txt mt5">* 필수 입력 항목입니다.</div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      발송 내용 <span className="red">*</span>
                    </th>
                    <td>
                      <div className="block">
                        <textarea name="" id="" className="textarea-form err"></textarea>
                      </div>
                      <div className="filed-flx mt5">
                        <div className="warning-txt">* 필수 입력 항목입니다.</div>
                        <div className="auto-right">
                          <span className="ds-b4-r">최대 2000자, 영문 및 숫자는 최대 4,000자</span>
                          <span className="ds-b3-sb">0/2,000자</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>첨부파일</th>
                    <td>
                      <div className="filed-file mb10">
                        <input type="file" className="file-input" id="file-input" />
                        <label htmlFor="file-input" className="btn-form outline s">
                          파일 찾기
                        </label>
                      </div>
                      <div className="file-bx">
                        <div className="file-guide">Drag & Drop으로 파일을 옮겨주세요.</div>
                        <ul className="file-list">
                          <li className="file-item">
                            <div className="file-item-wrap">
                              <button className="file-name">을지로3가점 영업허가증.pdf</button>
                              <button className="file-delete"></button>
                            </div>
                          </li>
                          <li className="file-item">
                            <div className="file-item-wrap">
                              <button className="file-name">을지로3가점 영업허가증.pdf</button>
                              <button className="file-delete"></button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pop-btn-content">
              <button className="btn-form gray">취소</button>
              <button className="btn-form basic">발송</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
