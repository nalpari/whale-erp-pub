import CommonCode from '@/components/commoncode/CommonCode'
import Location from '@/components/ui/Location'
import MasterSearch from '@/components/masterlist/MasterSearch'

export default function CommonCodePage() {
  return (
    <div className="data-wrap">
      <Location title="공통 코드 관리" list={['공통 코드 관리']} />
      <MasterSearch />
      <CommonCode />
    </div>
  )
}
