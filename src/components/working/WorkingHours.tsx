'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'

import AnimateHeight from 'react-animate-height'
import { useState } from 'react'

export default function WorkingHours() {
  const [slideboxOpen, setSlideboxOpen] = useState(true)
  return (
    <div className="contents-wrap">
      <div className="contents-body">
        <div className="content-wrap">
          <div className={`slidebox-wrap ${slideboxOpen ? '' : 'close'}`}>
            <div className="slidebox-header">
              <h2>계약 근무 시간</h2>
              <div className="slidebox-btn-wrap">
                <button className="slidebox-btn">저장</button>
                <button className="slidebox-btn arr" onClick={() => setSlideboxOpen(!slideboxOpen)}>
                  <i className="arr-icon"></i>
                </button>
              </div>
            </div>
            <AnimateHeight duration={300} height={slideboxOpen ? 'auto' : 0}>
              <div className="slidebox-body">
                <table className="default-table">
                  <colgroup>
                    <col width="190px" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>평일 근무시간</th>
                      <td>
                        <table className="work-hours-table">
                          <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                          </colgroup>
                          <thead>
                            <tr>
                              <th colSpan={2}>
                                <div className="toggle-wrap">
                                  <span className="toggle-txt">근무유무</span>
                                  <div className="toggle-btn">
                                    <input type="checkbox" id="toggle-btn" />
                                    <label className="slider" htmlFor="toggle-btn"></label>
                                  </div>
                                </div>
                              </th>
                              <th colSpan={2}>
                                <div className="toggle-wrap">
                                  <span className="toggle-txt">휴게유무</span>
                                  <div className="toggle-btn">
                                    <input type="checkbox" id="toggle-btn" />
                                    <label className="slider" htmlFor="toggle-btn"></label>
                                  </div>
                                </div>
                              </th>
                            </tr>
                            <tr>
                              <th className="p0">
                                <button className="work-time-tab act">오전</button>
                              </th>
                              <th className="p0">
                                <button className="work-time-tab">오후</button>
                              </th>
                              <th className="p0">
                                <button className="work-time-tab ">오전</button>
                              </th>
                              <th className="p0">
                                <button className="work-time-tab act">오후</button>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan={2}>
                                <div className="work-hours-wrap">
                                  <div className="time-swiper hours">
                                    <Swiper
                                      spaceBetween={20}
                                      slidesPerView={3}
                                      direction={'vertical'}
                                      navigation={true}
                                      loop={true}
                                      centeredSlides={true}
                                      modules={[Navigation]}
                                      className="mySwiper"
                                    >
                                      {Array.from({ length: 12 }).map((_, index) => (
                                        <SwiperSlide key={index}>
                                          <div className="number-box">{index < 9 ? `0${index + 1}` : index + 1}</div>
                                        </SwiperSlide>
                                      ))}
                                    </Swiper>
                                  </div>
                                  <div className="time-colon">:</div>
                                  <div className="time-swiper minutes">
                                    <Swiper
                                      spaceBetween={20}
                                      slidesPerView={3}
                                      direction={'vertical'}
                                      navigation={true}
                                      modules={[Navigation]}
                                      loop={true}
                                      centeredSlides={true}
                                      className="mySwiper"
                                    >
                                      {Array.from({ length: 60 }).map((_, index) => (
                                        <SwiperSlide key={index}>
                                          <div className="number-box">{index < 10 ? `0${index}` : index}</div>
                                        </SwiperSlide>
                                      ))}
                                    </Swiper>
                                  </div>
                                </div>
                              </td>
                              <td colSpan={2}>월~금</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AnimateHeight>
          </div>
        </div>
      </div>
    </div>
  )
}
