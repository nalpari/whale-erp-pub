import CommuteManagement from '@/components/commute/CommuteManagement'
import Location from '@/components/ui/Location'

export default function CommutePage() {
  return (
    <div className="data-wrap">
      <Location title="출퇴근 관리" list={['출퇴근 관리']} />
      <CommuteManagement />
    </div>
  )
}
