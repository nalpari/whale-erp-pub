import Image from 'next/image'

export default function Franchise() {
  return (
    <div className="sub-wrap">
      <div className="sub-wrap-inner">
        <div className="sub-wrap-header">
          <div className="sub-header-icon">
            <Image src="/assets/images/before_main/sub_whale.png" alt="introduction" width={228} height={126} />
          </div>
          <div className="sub-header-s-tit">Your Vision, Our Expertise</div>
          <div className="sub-header-b-tit">
            <span className="bold">고객의 서비스에 집중하세요.</span>
            <span>기본 기능을 무료로 이용하실 수 있습니다.</span>
          </div>
          <div className="sub-header-desc">점포의 관리에 필요한 불필요한 시간을 절약해 보세요.</div>
          <div className="sub-header-btn-wrap">
            <button className="sub-header-btn free">
              무료로 시작하기 <i className="free-btn-arr"></i>
            </button>
            <button className="sub-header-btn inquiry">
              <i className="inquiry-icon"></i> 도입 문의하기
            </button>
          </div>
        </div>
        <div className="franchise-wrap">
          <div className="sub-category-content">
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/franchise_icon01.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">가맹점 관리</div>
              <div className="operation-desc">
                프랜차이즈 사업과 관련한 가맹점 정보를 <br />
                관리할 수 있습니다.
              </div>
            </div>
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/franchise_icon02.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">계약 관리</div>
              <div className="operation-desc">
                프랜차이즈 가맹점과 가맹 계약 및 물품공급 <br /> 계약 등 각종 계약 체결 기능을 지원합니다.
              </div>
            </div>
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/franchise_icon03.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">점검 관리</div>
              <div className="operation-desc">
                가맹점에 운영을 위한 각종 정기 점검 및 수시
                <br />
                점검을 수행합니다.
              </div>
            </div>
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/franchise_icon04.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">Master 관리</div>
              <div className="operation-desc">
                메뉴, 카테고리, 가격 등 각종 오더를 위한 <br />
                Master 데이터를 관리하고, 가맹점에 배포합니다.
              </div>
            </div>
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/franchise_icon05.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">재무 관리</div>
              <div className="operation-desc">가맹점의 재무정보를 손쉽게 취합하여 관리합니다.</div>
            </div>
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/franchise_icon06.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">통합 관리</div>
              <div className="operation-desc">
                WHALE ERP를 통해서 구독하고 있는 서비스를 <br />
                통합하여 관리할 수 있습니다.
              </div>
            </div>
            <div className="sub-category-item act">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/operation_icon09.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">
                Business Partner 가입하기 <button className="operation-btn"></button>
              </div>
              <div className="operation-desc">
                WHALE ERP의 Business Partner에 가입하시고, 프랜차이즈 사업에 필요한 기능을 사용해 보세요.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
