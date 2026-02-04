import Location from '@/components/ui/Location'
import RatePlanChange from '@/components/rate-plan/RatePlanChange'

export default function RatePlanPage() {
  return (
    <div className="data-wrap">
      <Location title="요금안내/변경" list={['기준정보관리', '상품관리', '상품목록']} />
      <RatePlanChange />
    </div>
  )
}
