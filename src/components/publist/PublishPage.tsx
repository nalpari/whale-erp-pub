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
                    <td rowSpan={3}>공통 모음</td>
                    <td>Grid list 공통</td>
                    <td>
                      <Link href={'/masterlist'}>MasterList.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>Header 정보 공통</td>
                    <td>
                      <Link href={'/masterdetail'}>MasterDetail.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>Master Edit 공통</td>
                    <td>
                      <Link href={'/masteredit'}>MasterEdit.tsx</Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td rowSpan={6}>MasterData</td>
                    <td>가맹점 초대</td>
                    <td>
                      <Link href={'/invitation'}>Invitation.tsx</Link>
                    </td>
                    <td>Invitation</td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>회원탈퇴 팝업</td>
                    <td>
                      <Link href={'/popup/withdrawal'}>Withdrawal.tsx</Link>
                    </td>
                    <td>Withdrawal</td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>썸네일 리스트</td>
                    <td>
                      <Link href={'/thumbnail'}>ThumbnailList.tsx</Link>
                    </td>
                    <td>ThumbnailList</td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>점포 메뉴 추가</td>
                    <td>
                      <Link href={'/popup/addmenu'}>AddSotreMenuPop.tsx</Link>
                    </td>
                    <td>AddSotreMenuPop</td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>마스터용 카테고리 등록, 수정</td>
                    <td>
                      <Link href={'/popup/categoryedit'}>CategoryEditPop.tsx</Link>
                    </td>
                    <td>AddSotreMenuPop</td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td>점포용 프로모션 가격 관리</td>
                    <td>
                      <Link href={'/promotion'}>StorePromotion.tsx</Link>
                    </td>
                    <td>StorePromotion</td>
                    <td></td>
                    <td className="c red">2025-12-24</td>
                  </tr>
                  <tr>
                    <td rowSpan={6}>직원관리</td>
                    <td>직원 초대 팝업</td>
                    <td>
                      <Link href={'/popup/invitation'}>StaffInvitationPop.tsx</Link>
                    </td>
                    <td>StaffInvitationPop</td>
                    <td></td>
                    <td className="c red">2025-12-30</td>
                  </tr>
                  <tr>
                    <td>연봉 및 통상시급 계산기 팝업</td>
                    <td>
                      <Link href={'/popup/calculation'}>SalaryCalculationPop.tsx</Link>
                    </td>
                    <td>SalaryCalculationPop</td>
                    <td></td>
                    <td className="c red">2025-12-30</td>
                  </tr>
                  <tr>
                    <td>정직원, 파트타이머 급여명세서</td>
                    <td>
                      <Link href={'/paystub'}>PayStub.tsx</Link>
                    </td>
                    <td>PayStub</td>
                    <td></td>
                    <td className="c red">2025-12-30</td>
                  </tr>
                  <tr>
                    <td>계약 근무 시간</td>
                    <td>
                      <Link href={'/working'}>WorkingHours.tsx</Link>
                    </td>
                    <td>WorkingHours</td>
                    <td></td>
                    <td className="c red">2025-12-30</td>
                  </tr>
                  <tr>
                    <td>출퇴근 관리</td>
                    <td>
                      <Link href={'/commute'}>CommuteManagement.tsx</Link>
                    </td>
                    <td>CommuteManagement</td>
                    <td></td>
                    <td className="c red">2025-12-30</td>
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
