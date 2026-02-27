export default function SignupStep04({ setSignupStep }: { setSignupStep: (step: number) => void }) {
  return (
    <div className="signup-wrap">
      <div className="signup-form-wrap">
        <div className="signup-form-header">
          <div className="signup-form-header-tit">사업자 운영 정보 등록</div>
          <div className="signup-form-header-desc">
            <span>사업자와 관련한 상세 정보를 입력해 주세요.</span>
          </div>
        </div>
        <div className="signup-form-content">
          <div className="signup-form-content-item">
            <div className="signup-form-content-item-tit">본사</div>
            <div className="block">
              <input type="text" className="input-frame" readOnly />
            </div>
          </div>
          <div className="signup-form-content-item">
            <div className="signup-form-content-item-tit">
              브랜드명 <span className="red">*</span>
            </div>
            <div className="block">
              <input type="text" className="input-frame" />
            </div>
            <div className="signup-txt-message ">※ 프랜차이즈의 브랜드명을 입력해 주세요.</div>
            <div className="signup-txt-message err">※ 브랜드명을 입력해 주세요.</div>
          </div>
          <div className="signup-form-content-item">
            <div className="signup-form-content-item-tit">
              주소 <span className="red">*</span>
            </div>
            <div className="singup-flx-item">
              <button className="btn-form">주소 찾기</button>
              <div className="block">
                <input type="text" className="input-frame" placeholder="(우편번호) 도로명/지번" readOnly />
              </div>
              <div className="block">
                <input type="text" className="input-frame" />
              </div>
            </div>
            <div className="signup-txt-message ">※ 사업자등록증 상의 사업자명을 입력해 주세요.</div>
            <div className="signup-txt-message err">※ 주소를 입력해 주세요.</div>
          </div>
          <div className="signup-form-content-item">
            <div className="signup-form-content-item-tit">
              이메일 <span className="red">*</span>
            </div>
            <div className="block">
              <input type="text" className="input-frame" />
            </div>
            <div className="signup-txt-message err">※ 이메일을 입력해 주세요.</div>
          </div>
          <div className="signup-form-content-item">
            <div className="signup-form-content-item-tit">
              영업 분류 <span className="red">*</span>
            </div>
            <div className="block">
              <select className="select-form">
                <option value="">선택</option>
              </select>
            </div>
            <div className="signup-txt-message err">※ 영업 분류를 선택해 주세요.</div>
          </div>
          <div className="signup-form-content-item">
            <div className="signup-form-content-item-tit">로고 등록</div>
            <div className="block">
              <div className="filed-file">
                <input type="file" className="file-input" id="file-input" />
                <label htmlFor="file-input" className="btn-form">
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
            </div>
          </div>
        </div>
      </div>
      <div className="introduction-btn-wrap">
        <button className="introduction-btn gray" onClick={() => setSignupStep(3)}>
          이전으로 이동
        </button>
        <button className="introduction-btn" onClick={() => setSignupStep(5)}>
          다음으로 이동
        </button>
      </div>
    </div>
  )
}
