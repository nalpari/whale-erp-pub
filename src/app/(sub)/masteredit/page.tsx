import Location from '@/components/ui/Location'
import MasterEdit from '@/components/masteredit/MasterEdit'

export default function MasterEditPage() {
  return (
    <div className="data-wrap">
      <Location title="Business Partner Master" list={['Master data 관리', 'Business Partner Master']} />
      <MasterEdit />
    </div>
  )
}
