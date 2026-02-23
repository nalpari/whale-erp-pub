import Image from 'next/image'

export default function FinancialManagement() {
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
        <div className="financial-management-wrap">
          <div className="sub-category-content">
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/financial_icon01.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">재무현황 조회</div>
              <div className="operation-desc">
                입금/출금 정보를 기준으로 점포별 재무 정보를
                <br /> 한눈에 조회하고 분석할 수 있습니다.
              </div>
            </div>
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/financial_icon02.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">매입/매출 등록</div>
              <div className="operation-desc">
                은행 거래 내역을 스크래핑하여 AI를 통해
                <br />
                자동으로 계정을 분류합니다.
              </div>
            </div>
            <div className="sub-category-item act">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/operation_icon09.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">무료로 시작하기</div>
              <div className="operation-desc">WHALE ERP를 지금 시작해 보세요.</div>
              <button className="operation-btn"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
