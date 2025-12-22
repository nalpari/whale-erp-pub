import Link from 'next/link'
import '@/styles/publishpage.scss'

export default function PublishPage() {
  return (
    <div className="publish-list">
      <div className="p-header">
        <h1>Whale ERP</h1>
      </div>
      <div className="p-body">
        <div className="p-contents">
          {/* <div className="p-guide mb15">
            <div className="p-guide-header">Style Guide</div>
            <div className="p-guide-content">
              <div className="p-guide-link-wrap">
                <Link href={'/styleguide/gridsystem'}>Grid System</Link>
                <Link href={'/styleguide/desktopfont'}>Desktop Font</Link>
                <Link href={'/styleguide/mobilefont'}>Mobile Font</Link>
                <Link href={'/styleguide/textfield'}>Text Field / Selectors</Link>
                <Link href={'/styleguide/button'}>ButtonGuide</Link>
              </div>
            </div>
          </div> */}
          <div className="p-guide">
            <div className="p-guide-header">Publish Guide</div>
            <div className="p-guide-content">
              <p>
                ※ className은 케밥 케이스 사용
                <span> ex) &quot;sample-class&quot;</span>
              </p>
              <p>
                ※ img네이밍은 &quot;_&quot;로 사용, 번호 사용시 01, 02 와 같이 2자리 숫자 사용{' '}
                <span>ex) &quot;img_sample01&quot;</span>
              </p>
              <p>
                ※ button, select, checkbox, radio... 등 기본 설정은
                <span> Style Guide</span>에 정의된 내용만 사용
              </p>
              <p>※ scss파일 생성시 &quot;_&quot;를 앞에 붙힌 후 생성, 또한 해당 카테고리에 적합한 폴더에 생성</p>
            </div>
          </div>
          <div className="p-list-wrap">
            <h2>Publish List</h2>
            <div className="p-list-table">
              <table>
                <colgroup>
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '15%' }} />
                  <col />
                  <col style={{ width: '13%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '13%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Depth01</th>
                    <th>Depth02</th>
                    <th>파일명</th>
                    <th>비고</th>
                    <th>MarkUp</th>
                    <th>완료일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Grid list 공통</td>
                    <td>
                      <div>Business Partner 목록</div>
                      <div>회원 목록</div>
                      <div>마스터용 메뉴 목록</div>
                      <div>점포용 메뉴 목록</div>
                      <div>마스터용 가격 목록</div>
                      <div>마스터용 가격 이력 관리</div>
                      <div>점포용 가격 목록</div>
                      <div>점포용 가격 이력 관리</div>
                      <div>점포용 프로모션 가격 목록</div>
                    </td>
                    <td>
                      <Link href={'/masterlist'}>MasterList.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-17</td>
                  </tr>
                  <tr>
                    <td>Header 정보 공통</td>
                    <td>
                      <div>Business Partner 정보 상세조회</div>
                      <div>회원 정보 상세조회 </div>
                      <div>마스터용 메뉴 정보 상세조회</div>
                      <div>점포용 메뉴 정보 상세조회</div>
                      <div>점포용 프로모션 가격 정보 상세조회</div>
                    </td>
                    <td>
                      <Link href={'/masterdetail'}>MasterDetail.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-17</td>
                  </tr>
                  <tr>
                    <td>Invitation</td>
                    <td>가맹점 초대</td>
                    <td>
                      <Link href={'/invitation'}>Invitation.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-17</td>
                  </tr>
                  <tr>
                    <td>Business Partner Header 정보</td>
                    <td>Business Partner 정보 상세조회</td>
                    <td>
                      <Link href={'/masteredit'}>BPHeader.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-17</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
