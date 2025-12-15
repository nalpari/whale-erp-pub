import BPMasterSearch from '@/components/BPmaster/BPMasterSearch'
import BPMasterData from '@/components/BPmaster/BPMasterData'

export default function MasterPage() {
  return (
    <div className="data-wrap">
      <BPMasterSearch />
      <BPMasterData />
    </div>
  )
}
