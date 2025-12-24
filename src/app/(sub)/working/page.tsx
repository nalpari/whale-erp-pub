import WorkingHours from '@/components/working/WorkingHours'
import Location from '@/components/ui/Location'

export default function WorkingPage() {
  return (
    <div className="data-wrap">
      <Location title="근로 계약 관리" list={['home', '근무시간']} />
      <WorkingHours />
    </div>
  )
}
