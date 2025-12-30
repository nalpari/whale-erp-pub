import ProgramManage from '@/components/program/ProgramManage'
import Location from '@/components/ui/Location'

export default function ProgramPage() {
  return (
    <div className="data-wrap">
      <Location title="프로그램 관리" list={['Program', 'Program Management']} />
      <ProgramManage />
    </div>
  )
}
