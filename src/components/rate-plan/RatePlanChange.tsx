export default function RatePlanChange() {
  return (
    <div className="contents-wrap">
      <div className="contents-body">
        <div className="content-wrap">
          <div className="rate-plan-wrap">
            <div className="rate-plan-item">
              <div className="rate-plan-header">
                <div className="plan-grade">Free</div>
                <div className="plan-function">평생 무료</div>
                <div className="plan-explain">1개 점포에 5명의 직원이 무료로 사용하는 기본 운영 플랜</div>
              </div>
              <div className="rate-plan-cost">
                <div className="plan-cost-wrap">
                  <span className="plan-cost">0원</span>
                  <span>/월</span>
                </div>
                <div className="plan-btn-wrap">
                  <button className="service-btn block">
                    구독 하기 <i className="icon-subscribe"></i>
                  </button>
                </div>
              </div>
              <div className="plan-list-wrap">
                <div className="plan-list">
                  <div className="plan-list-tit">매장운영 (기본기능)</div>
                  <ul className="plan-item-list">
                    <li className="plan-list-item">점포수 1개</li>
                    <li className="plan-list-item">직원수 5명</li>
                    <li className="plan-list-item">메뉴 관리</li>
                    <li className="plan-list-item">가격 관리</li>
                    <li className="plan-list-item">카테고리 관리</li>
                    <li className="plan-list-item">시설물 관리</li>
                    <li className="plan-list-item">점검 관리</li>
                    <li className="plan-list-item">출퇴근 관리</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rate-plan-item use">
              <div className="rate-plan-header">
                <div className="plan-grade">Standard</div>
                <div className="plan-function">무료기능 + 재무 관리</div>
                <div className="plan-explain">5개 점포에 25명의 직원이 무료로 사용하는 비즈니스 운영 플랜</div>
              </div>
              <div className="rate-plan-cost">
                <div className="plan-cost-wrap">
                  <span className="plan-cost">19,000원</span>
                  <span>/월</span>
                </div>
                <div className="plan-btn-wrap">
                  <div className="service-btn block use-plan">이용중</div>
                </div>
              </div>
              <div className="plan-list-wrap">
                <div className="plan-list">
                  <div className="plan-list-tit">Free 플랜 모든 기능 포함</div>
                  <ul className="plan-item-list">
                    <li className="plan-list-item">기본 기능</li>
                    <li className="plan-list-item">점포 최대 5개</li>
                    <li className="plan-list-item">직원수 최대 25명</li>
                    <li className="plan-list-item">재무 관리</li>
                  </ul>
                </div>
                <div className="plan-list">
                  <div className="plan-list-tit">추가 기능</div>
                  <ul className="plan-item-list additional">
                    <li className="plan-list-item">재무 관리</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rate-plan-item">
              <div className="rate-plan-header">
                <div className="plan-grade">Enterprise</div>
                <div className="plan-function">STANDARD 기능 + 점포, 직원 무제한</div>
                <div className="plan-explain">점포수와 직원수에 제한이 없는 기업형 운영 플랜</div>
              </div>
              <div className="rate-plan-cost">
                <div className="plan-cost-wrap">
                  <span className="plan-cost">39,000원</span>
                  <span>/월</span>
                </div>
                <div className="plan-btn-wrap">
                  <button className="service-btn block">
                    구독 하기 <i className="icon-subscribe"></i>
                  </button>
                </div>
              </div>
              <div className="plan-list-wrap">
                <div className="plan-list">
                  <div className="plan-list-tit">Standard 플랜 모든 기능 포함</div>
                  <ul className="plan-item-list">
                    <li className="plan-list-item">점포 무제한 등록</li>
                    <li className="plan-list-item">직원 무제한 등록</li>
                  </ul>
                </div>
                <div className="plan-list ">
                  <div className="plan-list-tit">추가 기능</div>
                  <ul className="plan-item-list additional">
                    <li className="plan-list-item">직원 무제한</li>
                    <li className="plan-list-item">점포 무제한</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rate-plan-item">
              <div className="rate-plan-header">
                <div className="plan-grade">Franchis</div>
                <div className="plan-function">ENTERPRISE기능 + 가맹점 관리기능</div>
                <div className="plan-explain">직영 점포 운영과 가맹점 운영에 적합한 프랜차이즈 운영 플랜</div>
              </div>
              <div className="rate-plan-cost">
                <div className="plan-cost-wrap">
                  <span className="plan-cost">190,000원</span>
                  <span>/월</span>
                </div>
                <div className="plan-btn-wrap">
                  <button className="service-btn block">
                    구독 하기 <i className="icon-subscribe"></i>
                  </button>
                </div>
              </div>
              <div className="plan-list-wrap">
                <div className="plan-list">
                  <div className="plan-list-tit">Enterprise 플랜 모든 기능 포함</div>
                  <ul className="plan-item-list">
                    <li className="plan-list-item">가맹점 관리</li>
                    <li className="plan-list-item">계약 관리</li>
                    <li className="plan-list-item">점검 관리</li>
                    <li className="plan-list-item">마스터 상속 관리</li>
                    <li className="plan-list-item">통합 관리</li>
                  </ul>
                </div>
                <div className="plan-list ">
                  <div className="plan-list-tit">추가 기능</div>
                  <ul className="plan-item-list additional">
                    <li className="plan-list-item">가맹점 관리</li>
                    <li className="plan-list-item">계약 관리</li>
                    <li className="plan-list-item">점검 관리</li>
                    <li className="plan-list-item">마스터 상속 관리</li>
                    <li className="plan-list-item">통합 관리</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
