import Image from 'next/image'

export default function BeforeMain() {
  return (
    <div className="before-main">
      <section className="main-section01">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="/assets/images/before_main/main_section01.webm" type="video/webm" />
        </video>
        <div className="section-inner">
          <div className="erp-tit-wrap">
            <Image
              className="whale-img"
              src="/assets/images/before_main/whale_img.png"
              alt="erp_txt"
              width={526}
              height={291}
            />
          </div>
          <div className="erp-txt-wrap">
            <div className="erp-txt-tit">your smart choice</div>
            <div className="erp-txt-desc">all in one store management platform</div>
          </div>
        </div>
      </section>
      <section className="main-section02">
        <div className="section-inner"></div>
      </section>
    </div>
  )
}
