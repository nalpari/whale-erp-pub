import Pagination from '../ui/Pagination'

export default function Notice() {
  return (
    <div className="contents-wrap">
      <div className="contents-body">
        <div className="content-wrap">
          <div className="notice-list-wrap">
            <ul className="notice-list">
              <li className="notice-list-item">
                <button className="notice-list-btn">
                  <span className="notice-tit">서버 교체 및 버전 업그레이드 작업 사전 안내</span>
                  <span className="notice-date">2026.01.20</span>
                </button>
              </li>
              <li className="notice-list-item">
                <button className="notice-list-btn">
                  <span className="notice-tit">원활한 서비스 이용을 위한 서버 교체 및 시스템 개선 작업 안내</span>
                  <span className="notice-date">2026.01.20</span>
                </button>
              </li>
              <li className="notice-list-item">
                <button className="notice-list-btn">
                  <span className="notice-tit">시스템 성능 개선을 위한 서버 교체·버전 업그레이드 안내</span>
                  <span className="notice-date">2026.01.20</span>
                </button>
              </li>
              <li className="notice-list-item">
                <button className="notice-list-btn">
                  <span className="notice-tit">
                    안정적인 서비스 운영을 위한 서버 교체 및 시스템 업그레이드 사전 안내
                  </span>
                  <span className="notice-date">2026.01.20</span>
                </button>
              </li>
              <li className="notice-list-item">
                <button className="notice-list-btn">
                  <span className="notice-tit">서버 교체 및 시스템 버전 업그레이드 작업 사전 공지</span>
                  <span className="notice-date">2026.01.20</span>
                </button>
              </li>
              <li className="notice-list-item">
                <button className="notice-list-btn">
                  <span className="notice-tit">쾌적한 서비스 제공을 위한 서버 교체 및 버전 업그레이드 사전 안내</span>
                  <span className="notice-date">2026.01.20</span>
                </button>
              </li>
              <li className="notice-list-item">
                <button className="notice-list-btn">
                  <span className="notice-tit">서버 교체 및 시스템 버전 업그레이드 작업 사전 공지</span>
                  <span className="notice-date">2026.01.20</span>
                </button>
              </li>
              <li className="notice-list-item">
                <button className="notice-list-btn">
                  <span className="notice-tit">원활한 서비스 이용을 위한 서버 교체 및 시스템 개선 작업 안내</span>
                  <span className="notice-date">2026.01.20</span>
                </button>
              </li>
              <li className="notice-list-item">
                <div className="notice-empty">등록된 공지사항이 없습니다.</div>
              </li>
            </ul>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}
