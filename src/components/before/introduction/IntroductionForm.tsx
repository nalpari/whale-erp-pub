import Image from 'next/image'
import IntroductionInquiry from './IntroductionInquiry'

export default function IntroductionForm() {
  return (
    <div className="sub-wrap">
      <div className="sub-wrap-inner">
        <div className="sub-wrap-header">
          <div className="sub-header-icon">
            <Image src="/assets/images/before_main/sub_whale.png" alt="introduction" width={228} height={126} />
          </div>
          <div className="sub-header-s-tit">Your Vision, Our Expertise</div>
          <div className="sub-header-b-tit">
            <span className="bold">매장에 딱 맞는 솔루션</span>
            <span>전문가와 함께 고민하세요.</span>
          </div>
          <div className="sub-header-desc">문의사항을 남겨 주시면 가장 적합한 방법을 안내 드리겠습니다.</div>
        </div>
        <IntroductionInquiry />
      </div>
    </div>
  )
}
