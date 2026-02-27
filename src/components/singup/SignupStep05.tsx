export default function SignupStep05({ setSignupStep }: { setSignupStep: (step: number) => void }) {
  return (
    <div className="signup-wrap">
      <div className="signup-form-wrap">
        <div className="signup-form-header">
          <div className="signup-form-header-tit">로그인 계정(MASTER ID와 비밀번호) 설정</div>
          <div className="signup-form-header-desc">
            <span>WHALE ERP의 PARTNER OFFICE에 로그인할 수 있는 계정을 설정해 주세요.</span>
          </div>
        </div>
        <div className="signup-form-content">
          <div className="signup-form-content-item">
            <div className="signup-form-content-item-tit">MASTER ID</div>
            <div className="singup-flx-item">
              <div className="block">
                <input type="text" className="input-frame" />
              </div>
              <button className="btn-form">중복체크</button>
            </div>
            <div className="signup-txt-message ">※ 영문, 숫자 포함  8자 이상 입력</div>
          </div>
          <div className="signup-form-content-item">
            <div className="signup-form-content-item-tit">비밀번호</div>
            <div className="block">
              <input type="text" className="input-frame" />
            </div>
            <div className="signup-txt-message ">※ 영문, 숫자, 특수문자를 포함하여 8자 이상 입력</div>
          </div>
          <div className="signup-form-content-item">
            <div className="signup-form-content-item-tit">비밀번호 재입력</div>
            <div className="block">
              <input type="text" className="input-frame" />
            </div>
            <div className="signup-txt-message ">※ 상단에서 입력한 비밀번호를 다시 입력</div>
          </div>
        </div>
        <div className="singup-account-guide">
          <span>본 계정은 MASTER 계정입니다.</span>
          <span>직원들과 계정을 공유할 경우 보안문제가 발생할 수 있습니다.</span>
          <span>
            직원이 함께 이용하시기를 원하시면 직원이 직원 회원으로 등록하고, 점주님이 직원별로 관리자 계정을 부여하는
            것을 권장합니다.
          </span>
        </div>
      </div>
      <div className="introduction-btn-wrap">
        <button className="introduction-btn gray" onClick={() => setSignupStep(4)}>
          이전으로 이동
        </button>
        <button className="introduction-btn" onClick={() => setSignupStep(6)}>
          가입 완료
        </button>
      </div>
    </div>
  )
}
