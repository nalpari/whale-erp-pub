import StoreWorkTable from '@/components/storeworktable/StoreWorkTable'
import Location from '@/components/ui/Location'
import MasterSearch from '@/components/masterlist/MasterSearch'

export default function StoreWorkTablePage() {
  return (
    <div className="data-wrap">
      <Location title="점포별 근무 시간 관리" list={['StoreWorkTable', 'Store Work Table']} />
      <MasterSearch />
      <StoreWorkTable />
    </div>
  )
}
