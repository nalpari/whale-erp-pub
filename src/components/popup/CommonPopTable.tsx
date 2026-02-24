'use client'
import { Tooltip } from 'react-tooltip'
import AgGrid from '../ui/AgGrid'
import Pagination from '../ui/Pagination'
import MasterSearch from '../masterlist/MasterSearch'
import MasterList from '../masterlist/MasterList'

export default function CommonPopTable() {
  return (
    <div className="modal-popup">
      <div className="modal-dialog mypage">
        <div className="modal-content">
          <div className="mypage-header">
            <h2>재료 검색</h2>
            <button className="modal-close"></button>
          </div>
          <div className="mypage-body">
            <div className="common-pop-table-wrap">
              <MasterSearch />
              <MasterList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
