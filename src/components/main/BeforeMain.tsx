'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
        <div className="section-inner">
          <div className="section02-txt-wrap">
            <div className="section02-txt-s-tit">store management platform</div>
            <div className="section02-txt-b-tit">
              <span>당신의 스마트한 선택</span>
              <span className="bold">매장에 필요한 업무를 한 곳에서!</span>
            </div>
            <div className="section02-txt-desc">
              <span>매장의 직원 관리, 근무관리, 급여·정산, 매출과 손익 분석까지.</span>
              <span>WHALE ERP은 매장 운영에 필요한 모든 업무를 쉽고 간편하게 관리할 수 있습니다.</span>
            </div>
          </div>
          <div className="section02-swiper-wrap">
            <Swiper
              slidesPerView={3}
              spaceBetween={235}
              className="mySwiper"
              navigation={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
              speed={1500}
            >
              <SwiperSlide>
                <div className="section-swip-item">
                  <div className="swip-item-head">
                    <span className="s-tit">Smart Biz</span>
                    <span className="b-tit">Whale ERP</span>
                  </div>
                  <div className="swip-item-img"></div>
                  <div className="swip-item-info">
                    <div className="info-txt">Introduction</div>
                    <div className="info-tit">관리업무</div>
                    <div className="info-desc">점포/시설 관리, 직원/근무관리 등 매장 운영 시스템 완비</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="section-swip-item">
                  <div className="swip-item-head">
                    <span className="s-tit">Smart Biz</span>
                    <span className="b-tit">Whale ERP</span>
                  </div>
                  <div className="swip-item-img"></div>
                  <div className="swip-item-info">
                    <div className="info-txt">Introduction</div>
                    <div className="info-tit">재무관리</div>
                    <div className="info-desc">은행 계좌를 자동으로 수집하여 편리한 점포 재무 관리 지원</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="section-swip-item">
                  <div className="swip-item-head">
                    <span className="s-tit">Smart Biz</span>
                    <span className="b-tit">Whale ERP</span>
                  </div>
                  <div className="swip-item-img"></div>
                  <div className="swip-item-info">
                    <div className="info-txt">Introduction</div>
                    <div className="info-tit">판매기능 지원</div>
                    <div className="info-desc">부가 서비스 구독을 통한 효율적판매 시스템 운영</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="section-swip-item">
                  <div className="swip-item-head">
                    <span className="s-tit">Smart Biz</span>
                    <span className="b-tit">Whale ERP</span>
                  </div>
                  <div className="swip-item-img"></div>
                  <div className="swip-item-info">
                    <div className="info-txt">Introduction</div>
                    <div className="info-tit">관리업무</div>
                    <div className="info-desc">점포/시설 관리, 직원/근무관리 등 매장 운영 시스템 완비</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="main-section03">
        <div className="section-inner">
          <div className="device-info-wrap">
            <div className="device-comment">
              <div className="comment-tit">
                <span>점포운영에</span>
                <span className="bold">필요한 모든 것을 지원합니다.</span>
              </div>
              <div className="comment-desc">반복되는 번거로운 업무, WHALE ERP로 손쉽게 해결</div>
            </div>
            <div className="device-wrap">
              <div className="device-item">
                <Swiper
                  slidesPerView={1}
                  className="screen-swiper"
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Pagination, Autoplay]}
                  speed={500}
                >
                  <SwiperSlide>
                    <div className="device-item-img">
                      <Image src="/assets/images/before_main/screen_pc.png" alt="device-item-img" fill />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="device-item-img">
                      <Image src="/assets/images/before_main/screen_pc.png" alt="device-item-img" fill />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="device-item-img">
                      <Image src="/assets/images/before_main/screen_pc.png" alt="device-item-img" fill />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="store-info-list">
            <div className="store-info-item">
              <div className="store-info-item-tit">매장 및 직원관리</div>
              <div className="store-info-data">
                <div className="data-item">
                  <div className="data-item-tit">급여 자동 발행</div>
                  <div className="data-item-desc">주휴수당, 4대 보험 포함 급여 정산 및 명세서 자동 생성</div>
                </div>
                <div className="data-item">
                  <div className="data-item-tit">운영 뼈대 구축</div>
                  <div className="data-item-desc">점포·시설·근무 관리를 한 곳에서 간편하게 처리</div>
                </div>
              </div>
              <button className="store-info-btn">
                기능 상세 보기 <i className="icon-arrow-right"></i>
              </button>
            </div>
            <div className="store-info-item ">
              <div className="store-info-item-tit">재무관리</div>
              <div className="store-info-data">
                <div className="data-item">
                  <div className="data-item-tit">매출 통합 관리</div>
                  <div className="data-item-desc">은행 계좌 및 카드사 매출 데이터 자동 수집</div>
                </div>
                <div className="data-item">
                  <div className="data-item-tit">손익 분석 자동화</div>
                  <div className="data-item-desc">매출과 지출을 분석하여 매장의재무 상태 진단</div>
                </div>
              </div>
              <button className="store-info-btn">
                기능 상세 보기 <i className="icon-arrow-right"></i>
              </button>
            </div>
            <div className="store-info-item ">
              <div className="store-info-item-tit">프랜차이즈 관리</div>
              <div className="store-info-data">
                <div className="data-item">
                  <div className="data-item-tit">다점포 통합 대시보드</div>
                  <div className="data-item-desc">여러 매장의 현황을 한눈에 비교하고 동시 관리</div>
                </div>
                <div className="data-item">
                  <div className="data-item-tit">운영 표준화</div>
                  <div className="data-item-desc">표준 매뉴얼로 모든 지점의 서비스 퀄리티 유지</div>
                </div>
              </div>
              <button className="store-info-btn">
                기능 상세 보기 <i className="icon-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="main-section04">
        <div className="section-inner">
          <div className="device-info-wrap mb">
            <div className="device-comment ">
              <div className="comment-tit">
                <span>매장운영에 필요한</span>
                <span className="bold">다양한 부가서비스를 제공합니다.</span>
              </div>
              <div className="comment-desc">우리 매장에 꼭 필요한 옵션으로 WHALE ERP의 기능을 업그레이드 하세요.</div>
            </div>
            <div className="mb-device-wrap">
              <div className="mb-device-item">
                <Swiper
                  slidesPerView={1}
                  className="screen-swiper"
                  pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  modules={[Pagination, Autoplay]}
                  speed={500}
                >
                  <SwiperSlide>
                    <div className="device-item-img">
                      <Image src="/assets/images/before_main/screen_mb.png" alt="device-item-img" fill />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="device-item-img">
                      <Image src="/assets/images/before_main/screen_mb.png" alt="device-item-img" fill />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="device-item-img">
                      <Image src="/assets/images/before_main/screen_mb.png" alt="device-item-img" fill />
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="custom-pagination"></div>
              </div>
              <div className="mb-device-info">
                <div className="mb-device-info-tit-s">픽업오더 APP</div>
                <div className="mb-device-info-tit-b">26.03 오픈예정</div>
                <div className="mb-device-info-desc">
                  불필요한 고객 평가 부담은 덜고, 매장 운영에 집중할 수 있는 픽업오더. 주문은 미리 받고 매장 회전율을
                  극대화하세요.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-section05">
        <div className="section-inner">
          <div className="section05-head">
            <div className="head-tit">
              <span>오픈 예정 서비스</span>
              <span className="bold">올인원 Coming Soon!</span>
            </div>
            <div className="head-desc">
              <span>테이블 오더, 키오스크, 재고 관리</span>
              <span>사장님의 고민을 해결할 지원군들이 차례로 도착할 예정입니다.</span>
            </div>
          </div>
          <div className="section05-service-list">
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              pagination={{
                type: 'progressbar',
              }}
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="service-swiper"
              speed={1000}
            >
              <SwiperSlide>
                <div className="service-item">
                  <div className="service-icon">
                    <Image src="/assets/images/before_main/service_icon01.png" alt="service-icon" fill />
                  </div>
                  <div className="service-info-wrap">
                    <div className="service-name-wrap">
                      <div className="service-tit">WHALE ERP</div>
                      <div className="service-name">테이블 오더</div>
                    </div>
                    <button className="service-arr"></button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-item">
                  <div className="service-icon">
                    <Image src="/assets/images/before_main/service_icon02.png" alt="service-icon" fill />
                  </div>
                  <div className="service-info-wrap">
                    <div className="service-name-wrap">
                      <div className="service-tit">WHALE ERP</div>
                      <div className="service-name">모바일 오더</div>
                    </div>
                    <button className="service-arr"></button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-item">
                  <div className="service-icon">
                    <Image src="/assets/images/before_main/service_icon03.png" alt="service-icon" fill />
                  </div>
                  <div className="service-info-wrap">
                    <div className="service-name-wrap">
                      <div className="service-tit">WHALE ERP</div>
                      <div className="service-name">POS</div>
                    </div>
                    <button className="service-arr"></button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-item">
                  <div className="service-icon">
                    <Image src="/assets/images/before_main/service_icon04.png" alt="service-icon" fill />
                  </div>
                  <div className="service-info-wrap">
                    <div className="service-name-wrap">
                      <div className="service-tit">WHALE ERP</div>
                      <div className="service-name">키오스크</div>
                    </div>
                    <button className="service-arr"></button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-item">
                  <div className="service-icon">
                    <Image src="/assets/images/before_main/service_icon05.png" alt="service-icon" fill />
                  </div>
                  <div className="service-info-wrap">
                    <div className="service-name-wrap">
                      <div className="service-tit">WHALE ERP</div>
                      <div className="service-name">재고관리</div>
                    </div>
                    <button className="service-arr"></button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-item">
                  <div className="service-icon">
                    <Image src="/assets/images/before_main/service_icon06.png" alt="service-icon" fill />
                  </div>
                  <div className="service-info-wrap">
                    <div className="service-name-wrap">
                      <div className="service-tit">WHALE ERP</div>
                      <div className="service-name">발주관리</div>
                    </div>
                    <button className="service-arr"></button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-item">
                  <div className="service-icon">
                    <Image src="/assets/images/before_main/service_icon07.png" alt="service-icon" fill />
                  </div>
                  <div className="service-info-wrap">
                    <div className="service-name-wrap">
                      <div className="service-tit">WHALE ERP</div>
                      <div className="service-name">레시피 관리</div>
                    </div>
                    <button className="service-arr"></button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-item">
                  <div className="service-icon">
                    <Image src="/assets/images/before_main/service_icon08.png" alt="service-icon" fill />
                  </div>
                  <div className="service-info-wrap">
                    <div className="service-name-wrap">
                      <div className="service-tit">WHALE ERP</div>
                      <div className="service-name">대기 관리</div>
                    </div>
                    <button className="service-arr"></button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-item">
                  <div className="service-icon">
                    <Image src="/assets/images/before_main/service_icon09.png" alt="service-icon" fill />
                  </div>
                  <div className="service-info-wrap">
                    <div className="service-name-wrap">
                      <div className="service-tit">WHALE ERP</div>
                      <div className="service-name">예약관리</div>
                    </div>
                    <button className="service-arr"></button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  )
}
