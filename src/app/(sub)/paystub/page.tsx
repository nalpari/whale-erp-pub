import PayStub from '@/components/paystub/PayStub'
import Location from '@/components/ui/Location'

export default function PayStubPage() {
  return (
    <div className="data-wrap">
      <Location title="정직원 급여명세서" list={['Home', '정직원 급여명세서']} />
      <PayStub />
    </div>
  )
}
