import Location from '@/components/ui/Location'
import BusinessPartnerJoin from '@/components/partnerjoin/BusinessPartnerJoin'

export default function PartnerJoinPage() {
  return (
    <div className="data-wrap">
      <Location title="Business Partner 가입" list={['기준정보관리', '상품관리', '상품목록']} />
      <BusinessPartnerJoin />
    </div>
  )
}
