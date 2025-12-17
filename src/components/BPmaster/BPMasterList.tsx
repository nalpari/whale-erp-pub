import AgGrid from '../ui/AgGrid'
import Pagination from '../ui/Pagination'

export default function BPMasterList() {
  return (
    <div className="BPmaster-list-wrap">
      <div>
        <AgGrid />
        <Pagination />
      </div>
    </div>
  )
}
