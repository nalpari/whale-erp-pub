export default function StoreWorkTable() {
  // 시간 배열 생성 (07:00 ~ 16:00)
  const hours = Array.from({ length: 10 }, (_, i) => i + 9)

  // 30분 단위 블록 생성 (총 20개: 09:00-09:30, 09:30-10:00, ...)
  // isGray는 12시30부터 2시전(13:59까지) true
  const timeBlocks = hours.flatMap((hour) => [
    {
      hour,
      minute: 0,
      isGray: hour > 12 && hour < 14, // 13:00
    },
    {
      hour,
      minute: 30,
      // 13:30
      isGray:
        (hour === 12 && 30 >= 30) || // 12:30
        hour === 13,
    },
  ])
  return (
    <div className="contents-wrap">
      <div className="contents-body">
        <div className="content-wrap">
          <div className="store-work-wrap">
            <div className="store-work-date-wrap">
              <div className="store-work-date">2025.01.01 (수)</div>
              <div className="store-work-data-wrap-list">
                <div className="store-work-data-wrap">
                  <div className="flx-bx">
                    <div className="work-info">
                      <div className="work-badge blue">정직원</div>
                      <div className="staff-name">홍길동</div>
                      <div className="store-work-time">07:00-15:00</div>
                    </div>
                    <div className="auto-right">
                      <div className="total-hours">8h</div>
                    </div>
                  </div>
                  <div className="staff-work-table">
                    <div className="time-blocks blue">
                      {timeBlocks.map((block, index) => (
                        <div key={index} className={`time-block ${block.isGray ? 'gray' : ''}`} />
                      ))}
                    </div>
                    <div className="time-header">
                      {hours.map((hour) => (
                        <div key={hour} className="time-label">
                          {String(hour).padStart(2, '0')}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="store-work-data-wrap">
                  <div className="flx-bx">
                    <div className="work-info">
                      <div className="work-badge green">파트</div>
                      <div className="staff-name">홍길동</div>
                      <div className="store-work-time">07:00-15:00</div>
                    </div>
                    <div className="auto-right">
                      <div className="total-hours">8h</div>
                    </div>
                  </div>
                  <div className="staff-work-table">
                    <div className="time-blocks green">
                      {timeBlocks.map((block, index) => (
                        <div key={index} className={`time-block ${block.isGray ? 'gray' : ''}`} />
                      ))}
                    </div>
                    <div className="time-header">
                      {hours.map((hour) => (
                        <div key={hour} className="time-label">
                          {String(hour).padStart(2, '0')}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="store-work-date-wrap">
              <div className="store-work-date">2025.01.01 (수)</div>
              <div className="store-work-data-wrap-list">
                <div className="store-work-data-wrap">
                  <div className="flx-bx">
                    <div className="work-info">
                      <div className="work-badge blue">정직원</div>
                      <div className="staff-name">홍길동</div>
                      <div className="store-work-time">07:00-15:00</div>
                    </div>
                    <div className="auto-right">
                      <div className="total-hours">8h</div>
                    </div>
                  </div>
                  <div className="staff-work-table">
                    <div className="time-blocks blue">
                      {timeBlocks.map((block, index) => (
                        <div key={index} className={`time-block ${block.isGray ? 'gray' : ''}`} />
                      ))}
                    </div>
                    <div className="time-header">
                      {hours.map((hour) => (
                        <div key={hour} className="time-label">
                          {String(hour).padStart(2, '0')}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="store-work-data-wrap">
                  <div className="flx-bx">
                    <div className="work-info">
                      <div className="work-badge green">파트</div>
                      <div className="staff-name">홍길동</div>
                      <div className="store-work-time">07:00-15:00</div>
                    </div>
                    <div className="auto-right">
                      <div className="total-hours">8h</div>
                    </div>
                  </div>
                  <div className="staff-work-table">
                    <div className="time-blocks green">
                      {timeBlocks.map((block, index) => (
                        <div key={index} className={`time-block ${block.isGray ? 'gray' : ''}`} />
                      ))}
                    </div>
                    <div className="time-header">
                      {hours.map((hour) => (
                        <div key={hour} className="time-label">
                          {String(hour).padStart(2, '0')}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="store-work-btn">
            <button className="btn-form outline s">엑셀파일 다운로드</button>
            <button className="btn-form outline s">엑셀파일 업로드</button>
            <button className="btn-form basic">계획 수립</button>
          </div>
        </div>
      </div>
    </div>
  )
}
