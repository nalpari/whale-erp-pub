import Image from 'next/image'

export default function StoreOperation() {
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
        <div className="store-operation-wrap">
          <div className="sub-category-content">
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/operation_icon01.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">매장운영</div>
              <div className="operation-desc">
                직원의 근무 계획을 수립하고, 근로계약서 체결과 급여명세서를 발급할 수 있습니다.
              </div>
            </div>
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/operation_icon02.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">출퇴근 관리</div>
              <div className="operation-desc">
                점포 근무 직원의 출퇴근을 관리하고 <br /> 급여명세서에 출퇴근 현황을 반영할 수 있습니다.
              </div>
            </div>
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/operation_icon03.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">점포 관리</div>
              <div className="operation-desc">
                점포 정보를 등록하고, 점포 단위로 <br />
                직원과 재무 정보를 관리할 수 있습니다.
              </div>
            </div>
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/operation_icon04.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">점검 관리</div>
              <div className="operation-desc">
                점포의 점검 템플릿을 등록하고
                <br />
                정기/수시 점검을 실시 및 점점 결과를 관리합니다.
              </div>
            </div>
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/operation_icon05.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">시설물 관리</div>
              <div className="operation-desc">
                점포의 시설물 및 장비와 관련한 정보를 등록하고 각종 수리이력을 관리합니다.
              </div>
            </div>
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/operation_icon06.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">메뉴 관리</div>
              <div className="operation-desc">
                식당이나 카페에서 판매하는 메뉴를 <br /> 관리합니다.
              </div>
            </div>
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/operation_icon07.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">가격 관리</div>
              <div className="operation-desc">
                판매하는 메뉴에 대한 체계적인 <br />
                가격 정보를 관리합니다.
              </div>
            </div>
            <div className="sub-category-item">
              <div className="operation-icon">
                <Image src="/assets/images/before_main/operation_icon08.svg" alt="operation" width={64} height={64} />
              </div>
              <div className="operation-tit">카테고리 관리</div>
              <div className="operation-desc">메뉴를 구분할 카테고리 정보를 관리합니다.</div>
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
