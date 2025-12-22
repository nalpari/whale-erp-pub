import AgGrid from '../ui/AgGrid'
import Pagination from '../ui/Pagination'

export default function MasterList() {
  return (
    <div className="data-list-wrap">
      <div className="data-list-header">
        <div className="data-header-left">
          <button className="btn-form basic">등록</button>
          <button className="btn-form basic">등록</button>
          <button className="btn-form basic">등록</button>
        </div>
        <div className="data-header-right">
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
        <AgGrid />
        <Pagination />
      </div>
    </div>
  )
}
