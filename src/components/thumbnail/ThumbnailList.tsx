import Image from 'next/image'
import Pagination from '../ui/Pagination'

export default function ThumbnailList() {
  const dummyLength = 8
  return (
    <div className="data-list-wrap">
      <div className="data-list-header">
        <div className="data-header-right">
          <button className="list-count-btn list"></button>
          <button className="list-count-btn thumb"></button>
          <button className="btn-form basic">등록</button>
          <div className="data-count-select">
            <select name="" id="" className="select-form">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
              <option value="">50</option>
            </select>
          </div>
        </div>
      </div>
      <div className="data-list-bx">
        {dummyLength > 0 ? (
          <>
            <div className="thumb-list-wrap">
              {Array.from({ length: dummyLength }).map((_, index) => (
                <div className="thumb-item" key={index}>
                  <div className="thumb-item-img">
                    <div className="thumb-badge-wrap">
                      <span className="thumb-badge new">NEW</span>
                      <span className="thumb-badge best">BEST</span>
                      <span className="thumb-badge event">EVENT</span>
                    </div>
                    <Image src="/assets/images/contents/thumb_img.png" alt="thumb-item-img" fill />
                    <div className="temp-badge-wrap">
                      <span className="temp-badge hot"></span>
                      <span className="temp-badge cold"></span>
                    </div>
                  </div>
                  <div className="thumb-item-info">
                    <div className="thumb-item-info-tit">
                      <div className="info-tit-left">
                        <div className="store-badge blue">운영</div>
                        <div className="store-badge org">미운영</div>
                        <div className="info-tit">복숭아 아이스티</div>
                      </div>
                      <div className="info-tit-right">
                        <div className="check-form-box no-txt">
                          <input type="checkbox" id="check99" className="check-input" />
                          <label htmlFor="check99"></label>
                        </div>
                      </div>
                    </div>
                    <div className="thumb-item-info-desc">
                      <table className="thum-desc-table">
                        <colgroup>
                          <col width="70px" />
                          <col />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th>소속</th>
                            <td>
                              <ul className="thum-data-list">
                                <li className="thum-data-item">
                                  <span className="thum-data-text">주식회사 따름인</span>
                                </li>
                                <li className="thum-data-item">
                                  <span className="thum-data-text">을지로3가점</span>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th>mapping</th>
                            <td>
                              <ul className="thum-data-list">
                                <li className="thum-data-item">
                                  <span className="thum-data-text">본사 마스터</span>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th>노출 순서</th>
                            <td>
                              <ul className="thum-data-list">
                                <li className="thum-data-item">
                                  <input type="text" className="input-frame small" />
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th>카테고리</th>
                            <td>
                              <ul className="thum-data-list">
                                <li className="thum-data-item">
                                  <span className="thum-data-text">ADE&TEA, TEA, SIGNATURE</span>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th>등록일</th>
                            <td>
                              <ul className="thum-data-list">
                                <li className="thum-data-item">
                                  <span className="thum-data-text">2025-01-01</span>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th>가 격</th>
                            <td>
                              <ul className="thum-data-list">
                                <li className="thum-data-item">
                                  <span className="thum-data-text">
                                    <i className="price">3,000원 </i>
                                    <i className="discount">1,500원</i>
                                  </span>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination />
          </>
        ) : (
          <div className="empty-wrap">
            <div className="empty-data">등록된 메뉴가 없습니다.</div>
          </div>
        )}
      </div>
    </div>
  )
}
