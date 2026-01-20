"use client"
import { useState } from "react";

export default function FindId() {
  const [findId, setFindId] = useState(false);
  return (
    findId ? (
      <div className="find-form">
        <div className="find-form-header">
          <div className="find-form-header-tit">ID 찿기 완료</div>
          <div className="find-form-header-desc">회원정보에 등록된 이메일로 아이디를 찾을 수 있습니다.</div>
        </div>
        <div className="id-find">
          <span>Interplug</span>님의 ID찾기가 완료 되었습니다.
        </div>
        <div className="find-form-content">
          <div className="block">
            <input type="email" className="input-log-frame" placeholder="Email" readOnly/>
          </div>
        </div>
        <div className="find-form-btn">
          <button type="button" className="btn-log-frame basic l">ID로 비밀번호 찾기</button>
          <button type="button" className="btn-log-frame basic">로그인</button>
          <button type="button" className="btn-log-frame gray" onClick={() => setFindId(false)}>닫기</button>
        </div>
      </div>
    ) : (
      <div className="find-form">
        <div className="find-form-header">
          <div className="find-form-header-tit">ID 찿기</div>
          <div className="find-form-header-desc">회원정보에 등록된 이메일로 아이디를 찾을 수 있습니다.</div>
        </div>
        <div className="find-form-content">
          <div className="block">
            <input type="text" className="input-log-frame" placeholder="Name" />
          </div>
          <div className="red">이름과 이메일을 입력해 주세요.</div>
          <div className="block">
            <input type="email" className="input-log-frame" placeholder="Email" />
          </div>
          <div className="red">이름과 이메일을 입력해 주세요.</div>
        </div>
        <div className="find-form-btn">
          <button type="button" className="btn-log-frame basic" onClick={() => setFindId(true)}>ID 찿기</button>
          <button type="button" className="btn-log-frame gray">취소</button>
        </div>
      </div>
    )
  )
}