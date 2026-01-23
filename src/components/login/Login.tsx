import Image from "next/image";

export default function Login() {
  return (
    <div className="login-wrap">
      <div className="login-inner">
        <div className="login_header">
          <div className="logo">
            <Image src="/assets/images/contents/login_logo.svg" alt="logo" width={100} height={100} />
          </div>
          <div className="login_title">
            <span>WHALE ERP</span>
            <span>PARTNER OFFICE</span>
          </div>
        </div>
        <div className="login-form">
          <div className="login-form-tit">All in One 점포관리 플랫폼</div>
          <div className="login-form-box">
            <div className="login-form-box-item">
              <div className="input-icon-log-frame">
                <input type="text" placeholder="User ID" />
                <button type="button" className="input-icon-btn del" ></button>
              </div>
            </div>
            <div className="login-form-box-item">
              <div className="input-icon-log-frame">
                <input type="password" placeholder="Password" />
                <button type="button" className="input-icon-btn show" ></button>
                <button type="button" className="input-icon-btn hide" ></button>
              </div>
            </div>
          </div>
          <div className="login-form-btn">
            <button type="button" className="btn-log-frame basic block">LOGIN</button>
          </div>
          <div className="login-check-wrap">
            <div className="check-form-box">
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check">ID 저장</label>
            </div>
            <div className="find-btn-wrap">
              <button className="find-btn-item">ID / Password 찾기</button>
            </div>
          </div> 
          <div className="login-signup-wrap">
            <div className="login-signup-txt">
              <div className="login-signup-tit">처음 오셨나요?</div>
              <div className="login-signup-desc">요금제 선택하고 가입하기</div>
            </div>
            <div className="login-signup-btn-wrap">
              <button className="login-signup-btn">가입하기</button>
            </div>
          </div>
          <div className="another-login-wrap">
            <div className="another-login-tit">다른 방법으로 로그인</div>
            <div className="another-login-list">
              <button className="another-login-btn">
                <i className="icon kakao"></i>
                <span>카카오 계정 로그인</span>
              </button>
              <button className="another-login-btn">
                <i className="icon naver"></i>
                <span>네이버 계정 로그인</span>
              </button>
              <button className="another-login-btn">
                <i className="icon google"></i>
                <span>Google 계정 로그인</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="login-guide">
        <span>본 서비스는 BP 마스터 계정 또는 파트너오피스 로그인 권한이 부여된 직원만 이용할 수 있습니다.</span>
        <span>직원은 <i>직원용 App 계정</i>으로 로그인 하며 카카오 · 네이버 · 구글 간편 로그인을 지원합니다.</span>
      </div>
    </div>
  );
}