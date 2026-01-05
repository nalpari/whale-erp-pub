import PaymentMethod from '@/components/paymethod/PaymentMethod'
import Location from '@/components/ui/Location'

export default function PaymentMethodPage() {
  return (
    <div className="data-wrap">
      <Location title="결제수단 관리" list={['결제방법 관리']} />
      <PaymentMethod />
    </div>
  )
}
