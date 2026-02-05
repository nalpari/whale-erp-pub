export default function Contact() {
  return (
    <div className="contents-wrap">
      <div className="contents-body">
        <div className="content-wrap">
          <div className="contact-wrap">
            <div className="contact-filed">
              <div className="contact-filed-flx">
                <div className="filed-item">
                  <div className="filed-tit">이름</div>
                  <div className="filed-input">
                    <div className="input-icon-frame ">
                      <input type="text" readOnly defaultValue={'홍길동'} />
                    </div>
                  </div>
                </div>
                <div className="filed-item">
                  <div className="filed-tit">
                    휴대전화 번호<span className="red">*</span>
                  </div>
                  <div className="filed-input">
                    <div className="input-icon-frame err">
                      <input type="text" defaultValue={'010-1234-5678'} />
                      <button type="button" className="input-icon-btn del"></button>
                    </div>
                  </div>
                  <div className="filed-error mt5">※ 숫자만 허용</div>
                </div>
                <div className="filed-item">
                  <div className="filed-tit">
                    이메일 <span className="red">*</span>
                  </div>
                  <div className="filed-input">
                    <div className="input-icon-frame">
                      <input type="text" defaultValue={'test@interplug.co.kr'} />
                      <button type="button" className="input-icon-btn del"></button>
                    </div>
                  </div>
                  <div className="filed-error mt5">※ 이메일 형식에 맞지 않습니다.</div>
                </div>
              </div>
            </div>
            <div className="contact-filed">
              <div className="filed-item">
                <div className="filed-tit">
                  문의유형 <span className="s">(유형중 1개만 선택해 주세요 )</span> <span className="red">*</span>
                </div>
                <div className="filed-input">
                  <div className="contact-check-wrap">
                    <button className="contact-btn outline">유형1</button>
                    <button className="contact-btn outline act">유형2</button>
                    <button className="contact-btn outline">유형3</button>
                    <button className="contact-btn outline ">기타</button>
                  </div>
                </div>
                <div className="filed-error mt5">※ 문의유형을 선택해 주세요.</div>
              </div>
            </div>
            <div className="contact-filed">
              <div className="filed-item">
                <div className="filed-tit">
                  문의내용 <span className="red">*</span>
                </div>
                <div className="filed-input">
                  <textarea className="textarea-form err" placeholder="궁금하신 내용을 입력해 주세요." />
                </div>
                <div className="filed-error mt5">※ 최소 10자 이상 입력해 주세요.</div>
              </div>
            </div>
          </div>
          <div className="contact-btn-wrap">
            <button className="btn-form gray">취소</button>
            <button className="btn-form basic">제출</button>
          </div>
        </div>
      </div>
    </div>
  )
}
