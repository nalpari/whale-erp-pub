'use client'
import { Tooltip } from 'react-tooltip'

export default function AuthorityTable() {
  return (
    <div className="contents-wrap">
      <div className="contents-btn">
        <button className="btn-form gray">목록</button>
        <button className="btn-form gray">권한 관리자</button>
        <button className="btn-form gray ">삭제</button>
        <button className="btn-form basic">저장</button>
      </div>
      <div className="contents-body">
        <div className="content-wrap">
          <table className="default-table">
            <colgroup>
              <col width="180px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>권한 소유</th>
                <td>
                  <div className="filed-check-flx">
                    <div className="radio-form-box">
                      <input type="radio" name="authority-owner" id="authority-owner-01" />
                      <label htmlFor="authority-owner-01">플렛폼</label>
                    </div>
                    <div className="radio-form-box">
                      <input type="radio" name="authority-owner" id="authority-owner-02" />
                      <label htmlFor="authority-owner-02">본사</label>
                    </div>
                    <div className="radio-form-box">
                      <input type="radio" name="authority-owner" id="authority-owner-03" />
                      <label htmlFor="authority-owner-03">가맹점</label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>본사/가맹점 선택</th>
                <td>
                  <div className="filed-flx">
                    <div className="mx-500">
                      <select name="" id="" className="select-form">
                        <option value="">전체</option>
                      </select>
                    </div>
                    <div className="mx-500">
                      <select name="" id="" className="select-form">
                        <option value="">전체</option>
                      </select>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  권한명 <span className="red">*</span>
                </th>
                <td>
                  <div className="mx-500">
                    <input type="text" className="input-frame" />
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  운영여부 <span className="red">*</span>
                </th>
                <td>
                  <div className="filed-flx">
                    <div className="filed-check-flx">
                      <div className="radio-form-box">
                        <input type="radio" name="authority-status" id="authority-status-01" />
                        <label htmlFor="authority-status-01">운영</label>
                      </div>
                      <div className="radio-form-box">
                        <input type="radio" name="authority-status" id="authority-status-02" />
                        <label htmlFor="authority-status-02">미운영</label>
                      </div>
                    </div>
                    <div className="explain">※ ‘운영’인 경우에만 관리자에게 권한을 부여할 수 있습니다.</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>권한 설명</th>
                <td>
                  <div className="block">
                    <input type="text" className="input-frame" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-wrap">
          <div className="authority-table-wrap">
            <div className="authority-table-header">
              <div className="auto-right g8">
                <button className="tooltip-btn">
                  <span className="tooltip-icon" id="tooltip-btn-anchor"></span>
                  <Tooltip className="tooltip-txt" anchorSelect="#tooltip-btn-anchor" opacity={1}>
                    <div>기존에 등록된 메뉴별 권한을 copy하여 현재 조회/등록 중인 권한을 만들 수 있습니다.</div>
                  </Tooltip>
                </button>
                <div className="default-txt">다른 권한 COPY</div>
                <div className="mx-260">
                  <select name="" id="" className="select-form">
                    <option value="">선택</option>
                  </select>
                </div>
                <button className="btn-form basic">적용하기</button>
                <button className="btn-form gray">
                  <i className="check"></i>Read
                </button>
                <button className="btn-form outline s">Create, Delete</button>
                <button className="btn-form gray">
                  <i className="check"></i>Update
                </button>
              </div>
            </div>
            <div className="authority-table-body">
              <table className="system-table">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col width={'15%'} />
                  <col width={'15%'} />
                  <col width={'15%'} />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan={4}>Menu</th>
                    <th>Read</th>
                    <th>Create, Delete</th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bold">Level 1</td>
                    <td className="bold">Level 2</td>
                    <td className="bold">Level 3</td>
                    <td className="bold">Level 4</td>
                    <td>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </td>
                    <td>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </td>
                    <td>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Master Data</td>
                    <td></td>
                    <td></td>
                    <td className="r">N</td>
                    <td>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </td>
                    <td>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </td>
                    <td>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Master Data</td>
                    <td>Product Master</td>
                    <td></td>
                    <td className="g">Y</td>
                    <td>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </td>
                    <td>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </td>
                    <td>
                      <div className="toggle-btn">
                        <input type="checkbox" id="toggle-btn" />
                        <label className="slider" htmlFor="toggle-btn"></label>
                      </div>
                    </td>
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
