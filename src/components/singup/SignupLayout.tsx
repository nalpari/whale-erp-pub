'use client'
import Image from 'next/image'
import SignupStep01 from './SignupStep01'
import SignupStep02 from './SignupStep02'
import { useState } from 'react'

export default function SignupLayout() {
  const [signupStep, setSignupStep] = useState(1)
  return (
    <div className="sub-wrap">
      <div className="sub-wrap-inner">
        <div className="sub-wrap-header">
          <div className="sub-header-icon">
            <Image src="/assets/images/before_main/sub_whale.png" alt="introduction" width={228} height={126} />
          </div>
          <div className="sub-header-b-tit">
            <span className="bold">Business Partner 가입</span>
            <span>최고의 파트너십, 지금 확인해 보세요.</span>
          </div>
          <div className="sub-header-desc">가입 문의를 남겨 주시면 귀사에 가장 적합한 협력 모델을 제안해 드립니다</div>
        </div>
        {signupStep === 1 && <SignupStep01 setSignupStep={setSignupStep} />}
        {signupStep === 2 && <SignupStep02 />}
      </div>
    </div>
  )
}
