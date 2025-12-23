import StorePromotion from '@/components/promotion/StorePromotion'
import Location from '@/components/ui/Location'

export default function PromotionPage() {
  return (
    <div className="data-wrap">
      <Location title="점포용 프로모션 가격 관리" list={['Promotion', 'Store Promotion']} />
      <StorePromotion />
    </div>
  )
}
