'use client'
import { useState } from "react";
import FindId from "./find/FindId";
import FindPw from "./find/FindPw";

export default function FindIdPw() {
  const [tab, setTab] = useState('id');
  return (
    <div className="login-wrap find">
      <div className="find-inner">
        <div className="find-bx">
          <button className="find-close-btn"></button>
          <div className="find-header">
            <button className={`find-btn-item ${tab === 'id' ? 'act' : ''}`} onClick={() => setTab('id')}>ID 찿기</button>
            <button className={`find-btn-item ${tab === 'pw' ? 'act' : ''}`} onClick={() => setTab('pw')}>비밀번호 찾기</button>
          </div>
          <div className="find-body">
            {tab === 'id' ? <FindId /> : <FindPw />}
          </div>
        </div>
      </div>
    </div>
  )
}