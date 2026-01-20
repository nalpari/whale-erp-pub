export default function FindPw() {
  return (
    <div className="find-form">
      <div className="find-form-header">
        <div className="find-form-header-tit">비밀번호 찾기</div>
        <div className="find-form-header-desc">회원정보에 등록된 이메일로 비밀번호를 찾을 수 있습니다.</div>
      </div>
      <div className="find-form-content">
        <div className="block">
          <input type="text" className="input-log-frame" placeholder="Name" />
        </div>
        <div className="red">이름과 이메일을 입력해 주세요.</div>
        <div className="block">
          <input type="text" className="input-log-frame" placeholder="ID" />
        </div>
        <div className="red">이름과 이메일을 입력해 주세요.</div>
        <div className="block">
          <input type="email" className="input-log-frame" placeholder="Email" />
        </div>
        <div className="red">이름과 이메일을 입력해 주세요.</div>
      </div>
      <div className="find-form-btn">
        <button type="button" className="btn-log-frame basic">비밀번호 찿기</button>
        <button type="button" className="btn-log-frame gray">취소</button>
      </div>
    </div>
  )
}