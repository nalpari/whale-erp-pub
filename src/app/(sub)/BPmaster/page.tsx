import BPMasterSearch from '@/components/BPmaster/BPMasterSearch'
import Location from '@/components/ui/Location'
import BPMasterList from '@/components/BPmaster/BPMasterList'

export default function BPMasterPage() {
  return (
    <div className="data-wrap">
      <Location title="Business Partner Master" list={['Master data 관리', 'Business Partner Master']} />
      <BPMasterSearch />
      <BPMasterList />
    </div>
  )
}
