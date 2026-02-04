import Location from '@/components/ui/Location'
import AfterService from '@/components/after-service/AfterService'
export default function AfterServicePage() {
  return (
    <div className="data-wrap">
      <Location title="부가서비스 신청" list={['Home', '이용 중인 부가서비스']} />
      <AfterService />
    </div>
  )
}
