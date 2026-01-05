import PricingPlan from '@/components/pricingplan/PricingPlan'
import Location from '@/components/ui/Location'

export default function PricingPlanPage() {
  return (
    <div className="data-wrap">
      <Location title="ERP요금제 정보 관리" list={['PricingPlan', 'PricingPlan']} />
      <PricingPlan />
    </div>
  )
}
