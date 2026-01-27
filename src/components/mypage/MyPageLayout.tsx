import MyPageTab01Layout from "./mypagetab/MyPageTab01Layout";

export default function MyPageLayout() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog mypage">
        <div className="modal-content">
          <div className="mypage-header">
            <h2>MYPAGE</h2>
            <button className="modal-close"></button>
          </div>
          <div className="mypage-body">
            <div className="pop-frame">
              <div className="mypage-tab">
                <button className="mypage-tab-item act">사업자정보 확인 및 수정</button>
                <button className="mypage-tab-item">서비스 구독현황</button>
                <button className="mypage-tab-item">구독료청구 및 납부현황</button>
                <button className="mypage-tab-item">정산현황</button>
                <button className="mypage-tab-item">결제수단관리</button>
                <button className="mypage-tab-item">비밀번호변경</button>
              </div>
              <MyPageTab01Layout />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}