'use client'
import { useState } from 'react'

export default function SignupStep01({ setSignupStep }: { setSignupStep: (step: number) => void }) {
  const [step, setStep] = useState(1)
  return (
    <div className="signup-wrap">
      <div className="signup-step01-tab-wrap">
        <button className={`signup-step01-tab-btn ${step === 1 ? 'act' : ''}`} onClick={() => setStep(1)}>
          사업자등록번호로 가입하기
        </button>
        <button className={`signup-step01-tab-btn ${step === 2 ? 'act' : ''}`} onClick={() => setStep(2)}>
          초대 이메일로 가입하기
        </button>
      </div>
      {step === 1 ? (
        <div className="signup-step01-content-wrap">
          <div className="signup-step01-item">
            <div className="signup-step01-item-tit">사업자 등록 정보를 확인합니다.</div>
            <div className="signup-step01-item-input-wrap">
              <div className="signup-step01-item-input-label">
                대표자 성명 <span className="red">*</span>
              </div>
              <div className="signup-step01-item-input">
                <input type="text" className="input-frame" placeholder="대표자 성명을 입력해주세요." />
              </div>
              <div className="signup-message error mt10">대표자 성명을 다시 확인해서 입력해 주세요.</div>
            </div>
            <div className="signup-step01-item-input-wrap">
              <div className="signup-step01-item-input-label">
                개업일자 <span className="red">*</span>
              </div>
              <div className="signup-step01-item-input">
                <input type="text" className="input-frame" placeholder="개업일자를 입력해주세요." />
              </div>
              <div className="signup-message error mt10">개업일자를 다시 확인해서 입력해 주세요.</div>
            </div>
            <div className="signup-step01-item-input-wrap">
              <div className="signup-step01-item-input-label">
                사업자등록번호 <span className="red">*</span>
              </div>
              <div className="signup-step01-item-input">
                <input type="text" className="input-frame" placeholder="사업자등록번호를 입력해주세요." />
              </div>
              <div className="signup-message mt10">- 없이 숫자 10자리를 입력해 주세요</div>
              <div className="signup-message error mt10">사업자등록번호를 다시 확인해서 입력해 주세요.</div>
            </div>
            <div className="signup-step01-item-desc">
              <span>
                사업자 정보 확인(인증)에 문제가 있을 경우, 사업자등록증 사본 파일을 첨부하고{' '}
                <b>master@erpwhale.co.kr</b>로 연락처 및 신청인 정보를 보내주세요.
              </span>
              <span>사업자등록번호를 도용하여 가입 시 형사 처벌을 받을 수 있습니다.</span>
            </div>
          </div>
          <div className="signup-step01-item">
            <div className="signup-step01-item-tit">손쉽게 가입하기</div>
            <div className="signup-step01-item-desc">
              <span>
                사업자등록증 이미지를 Drag & Drop으로 옮기시면 정보가 자동으로 입력되고, 이후 사업자와 관련된 정보를
                입력할 필요가 없습니다.
              </span>
            </div>
            <div className="signup-step01-item-file">
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
      ) : (
        <div className="signup-step01-content-wrap">
          <div className="signup-step01-item">
            <div className="signup-step01-item-tit">Business Partner 코드를 확인합니다.</div>
            <div className="signup-step01-item-input-wrap">
              <div className="signup-step01-item-input">
                <input type="text" className="input-frame" placeholder="Business Partner 코드를 입력해 주세요." />
              </div>
              <div className="signup-message error mt10">Business Partner 코드를 다시 확인해서 입력해 주세요.</div>
            </div>
            <div className="signup-step01-item-desc">
              <span>초대 이메일에 기제된 Business Partner 코드를 입력해 주세요.</span>
              <span>
                Business Partner 코드(인증)에 문제가 있을 경우, 사업자등록증 사본 파일을 첨부하고{' '}
                <b>master@erpwhale.co.kr</b>로 연락처 및 신청인 정보를 보내주세요.
              </span>
              <span>사업자등록번호를 도용하여 가입 시 형사 처벌을 받을 수 있습니다.</span>
            </div>
          </div>
        </div>
      )}
      <div className="introduction-btn-wrap">
        <button className="introduction-btn" onClick={() => setSignupStep(2)}>
          인증하기
        </button>
      </div>
    </div>
  )
}
