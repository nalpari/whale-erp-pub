'use client'
import { useRouter } from 'next/navigation'

export default function SingupStep03({ setSignupStep }: { setSignupStep: (step: number) => void }) {
  const router = useRouter()
  return (
    <div className="signup-wrap">
      <div className="signup-form-wrap">
        <div className="signup-form-header">
          <div className="signup-form-header-tit">사업자 유형 선택</div>
          <div className="signup-form-header-desc">
            <span>대표자 본인인증에 성공하였습니다.</span>
            <span>사업자 유형을 선택해 주세요.</span>
          </div>
        </div>
        <div className="signup-bussiness-type-wrap">
          <div className="signup-bussiness-type-tit">사업자 유형</div>
          <div className="signup-bussiness-type-list">
            <div className="signup-bussiness-type-item">
              <div className="signup-bussiness-type-item-tit">
                <div className="signup-bussiness-type-item-name">프랜차이즈 본사</div>
                <div className="radio-form-box no-txt">
                  <input type="radio" id="franchise-boss" name="bussiness-type" />
                  <label htmlFor="franchise-boss"></label>
                </div>
              </div>
              <div className="signup-bussiness-type-item-desc">
                <span>
                  프랜차이즈업을 영위하는 본사 사업자에 해당합니다. 가맹점을 보유하고 있으며, 가맹점에서도 WHALE ERP를
                  사용할 예정입니다.
                </span>
              </div>
            </div>
            <div className="signup-bussiness-type-item act">
              <div className="signup-bussiness-type-item-tit">
                <div className="signup-bussiness-type-item-name">프랜차이즈 가맹점</div>
                <div className="radio-form-box no-txt">
                  <input type="radio" id="franchise-franchise" name="bussiness-type" defaultChecked />
                  <label htmlFor="franchise-franchise"></label>
                </div>
              </div>
              <div className="signup-bussiness-type-item-desc">
                <span>
                  프랜차이즈의 가맹점 사업자에 해당합니다.
                  <br /> ※ 본사 소속으로 본 시스템을 이용하시려면 본사에 초청을 요청해야 합니다.
                </span>
              </div>
            </div>
            <div className="signup-bussiness-type-item">
              <div className="signup-bussiness-type-item-tit">
                <div className="signup-bussiness-type-item-name">일반 사업장</div>
                <div className="radio-form-box no-txt">
                  <input type="radio" id="general-shop" name="bussiness-type" />
                  <label htmlFor="general-shop"></label>
                </div>
              </div>
              <div className="signup-bussiness-type-item-desc">
                <span>
                  단독 매장을 운영하는 사업자에 해당합니다. 프랜차이즈 가맹점이지만, 독자적인 운영을 원하실 경우에도
                  선택해 주세요.
                </span>
              </div>
            </div>
            <div className="signup-bussiness-type-item">
              <div className="signup-bussiness-type-item-tit">
                <div className="signup-bussiness-type-item-name">대표 메뉴</div>
              </div>
              <div className="signup-bussiness-type-item-desc">
                <span>판매하시는 대표 메뉴를 입력해 주세요.(예 : 커피)</span>
                <span>ERP 사용 환경을 자동으로 추천해 드립니다.</span>
              </div>
              <div className="block mt15">
                <input type="text" className="input-frame" placeholder="ex)커피" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="introduction-btn-wrap">
        <button className="introduction-btn gray" onClick={() => router.push('/main')}>
          가입 취소
        </button>
        <button className="introduction-btn" onClick={() => setSignupStep(4)}>
          다음으로 이동
        </button>
      </div>
    </div>
  )
}
