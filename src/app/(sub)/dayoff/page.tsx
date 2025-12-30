import Location from '@/components/ui/Location'
import DayOff from '@/components/dayoff/DayOff'

export default function DayOffPage() {
  return (
    <div className="data-wrap">
      <Location title="휴일 관리" list={['휴일 관리']} />
      <DayOff />
    </div>
  )
}
