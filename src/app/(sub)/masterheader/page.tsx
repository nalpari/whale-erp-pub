import Location from '@/components/ui/Location'
import MasterHeaderData from '@/components/masterheader/MasterHeaderData'

export default function MasterHeaderPage() {
  return (
    <div className="data-wrap">
      <Location title="마스터용 메뉴 관리" list={['Master data 관리', '메뉴 Master', '마스터용 메뉴 관리']} />
      <MasterHeaderData />
    </div>
  )
}
