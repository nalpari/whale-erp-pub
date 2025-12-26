'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'

import AnimateHeight from 'react-animate-height'
import { useState } from 'react'
import DatePicker from '../ui/common/DatePicker'

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
                        <div className="work-info mb10">
                          <div className="work-badge blue">정직원</div>
                          <div className="staff-name">홍길동</div>
                          <div className="more-btn work">
                            <span className="icon-more"></span>
                            <div className="option-list act">
                              <button className="option-item">Partner Fuction 추가</button>
                              <button className="option-item">Partner Fuction 삭제</button>
                            </div>
                          </div>
                        </div>
                        <div className="work-info mb10">
                          <div className="work-badge green">파트</div>
                          <div className="staff-name">홍길동</div>
                        </div>
                        <table className="work-hours-table">
                          <colgroup>
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
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="work-hours-box disabled">
                                  <div className="work-hours-tab">
                                    <button className="work-time-tab act">오전</button>
                                    <button className="work-time-tab ">오후</button>
                                  </div>
                                  <div className="work-hours-inner">
                                    <div className="time-swiper hours">
                                      <Swiper
                                        spaceBetween={10}
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
                                        spaceBetween={10}
                                        slidesPerView={3}
                                        direction={'vertical'}
                                        navigation={true}
                                        modules={[Navigation]}
                                        loop={false}
                                        centeredSlides={true}
                                        className="mySwiper"
                                      >
                                        <SwiperSlide>
                                          <div className="number-box">00</div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                          <div className="number-box">30</div>
                                        </SwiperSlide>
                                      </Swiper>
                                    </div>
                                  </div>
                                  <div className="work-hours-preview">
                                    <div className="filed-flx g8">
                                      <span className="explain">오전</span>
                                      <div>
                                        <input type="text" className="input-frame xs" defaultValue={'00'} />
                                      </div>
                                      <span className="explain">시</span>
                                      <div>
                                        <input type="text" className="input-frame xs" defaultValue={'00'} />
                                      </div>
                                      <span className="explain">분</span>
                                      <span className="explain">부터</span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="work-hours-box disabled">
                                  <div className="work-hours-tab">
                                    <button className="work-time-tab act">오전</button>
                                    <button className="work-time-tab ">오후</button>
                                  </div>
                                  <div className="work-hours-inner">
                                    <div className="time-swiper hours">
                                      <Swiper
                                        spaceBetween={10}
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
                                        spaceBetween={10}
                                        slidesPerView={3}
                                        direction={'vertical'}
                                        navigation={true}
                                        modules={[Navigation]}
                                        loop={false}
                                        centeredSlides={true}
                                        className="mySwiper"
                                      >
                                        <SwiperSlide>
                                          <div className="number-box">00</div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                          <div className="number-box">30</div>
                                        </SwiperSlide>
                                      </Swiper>
                                    </div>
                                  </div>
                                  <div className="work-hours-preview">
                                    <div className="filed-flx g8">
                                      <span className="explain">오후</span>
                                      <div>
                                        <input type="text" className="input-frame xs" defaultValue={'00'} />
                                      </div>
                                      <span className="explain">시</span>
                                      <div>
                                        <input type="text" className="input-frame xs" defaultValue={'00'} />
                                      </div>
                                      <span className="explain">분</span>
                                      <span className="explain">까지</span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="work-hours-box">
                                  <div className="work-hours-tab">
                                    <button className="work-time-tab act">오전</button>
                                    <button className="work-time-tab ">오후</button>
                                  </div>
                                  <div className="work-hours-inner">
                                    <div className="time-swiper hours">
                                      <Swiper
                                        spaceBetween={10}
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
                                        spaceBetween={10}
                                        slidesPerView={3}
                                        direction={'vertical'}
                                        navigation={true}
                                        modules={[Navigation]}
                                        loop={false}
                                        centeredSlides={true}
                                        className="mySwiper"
                                      >
                                        <SwiperSlide>
                                          <div className="number-box">00</div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                          <div className="number-box">30</div>
                                        </SwiperSlide>
                                      </Swiper>
                                    </div>
                                  </div>
                                  <div className="work-hours-preview">
                                    <div className="filed-flx g8">
                                      <span className="explain">오후</span>
                                      <div>
                                        <input type="text" className="input-frame xs" defaultValue={'00'} />
                                      </div>
                                      <span className="explain">시</span>
                                      <div>
                                        <input type="text" className="input-frame xs" defaultValue={'00'} />
                                      </div>
                                      <span className="explain">분</span>
                                      <span className="explain">부터</span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="work-hours-box">
                                  <div className="work-hours-tab">
                                    <button className="work-time-tab act">오전</button>
                                    <button className="work-time-tab ">오후</button>
                                  </div>
                                  <div className="work-hours-inner">
                                    <div className="time-swiper hours">
                                      <Swiper
                                        spaceBetween={10}
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
                                        spaceBetween={10}
                                        slidesPerView={3}
                                        direction={'vertical'}
                                        navigation={true}
                                        modules={[Navigation]}
                                        loop={false}
                                        centeredSlides={true}
                                        className="mySwiper"
                                      >
                                        <SwiperSlide>
                                          <div className="number-box">00</div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                          <div className="number-box">30</div>
                                        </SwiperSlide>
                                      </Swiper>
                                    </div>
                                  </div>
                                  <div className="work-hours-preview">
                                    <div className="filed-flx g8">
                                      <span className="explain">오후</span>
                                      <div>
                                        <input type="text" className="input-frame xs" defaultValue={'00'} />
                                      </div>
                                      <span className="explain">시</span>
                                      <div>
                                        <input type="text" className="input-frame xs" defaultValue={'00'} />
                                      </div>
                                      <span className="explain">분</span>
                                      <span className="explain">까지</span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <th>평일 근무 요일</th>
                      <td>
                        <div className="filed-flx g8">
                          <button className="day-btn act">월</button>
                          <button className="day-btn act">화</button>
                          <button className="day-btn act">수</button>
                          <button className="day-btn">목</button>
                          <button className="day-btn act">금</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>토요일 격주 근무 여부</th>
                      <td>
                        <div className="filed-flx">
                          <div className="filed-check-flx">
                            <div className="radio-form-box">
                              <input type="radio" id="every-sat" />
                              <label htmlFor="every-sat">매주 토요일</label>
                            </div>
                            <div className="radio-form-box">
                              <input type="radio" id="biweek-sat" />
                              <label htmlFor="biweek-sat">토요일 격주</label>
                            </div>
                          </div>
                          <div className="filed-flx ml10">
                            <div className="filed-flx g8">
                              <div className="explain">토요일 첫 근무일</div>
                              <div className="block">
                                <DatePicker />
                              </div>
                            </div>
                            <div className="explain">※ 설정한 날짜를 격주 근무 시작일로 인식합니다.</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>일요일 격주 근무 여부</th>
                      <td>
                        <div className="filed-flx">
                          <div className="filed-check-flx">
                            <div className="radio-form-box">
                              <input type="radio" id="every-sun" />
                              <label htmlFor="every-sun">매주 일요일</label>
                            </div>
                            <div className="radio-form-box">
                              <input type="radio" id="biweek-sun" />
                              <label htmlFor="biweek-sun">일요일 격주</label>
                            </div>
                          </div>
                          <div className="filed-flx ml10">
                            <div className="filed-flx g8">
                              <div className="explain">일요일 첫 근무일</div>
                              <div className="block">
                                <DatePicker />
                              </div>
                            </div>
                            <div className="explain">※ 설정한 날짜를 격주 근무 시작일로 인식합니다.</div>
                          </div>
                        </div>
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
