import Location from '@/components/ui/Location'
import InvitationForm from '@/components/invitation/InvitationForm'

export default function InvitationPage() {
  return (
    <div className="data-wrap">
      <Location title="가맹점 초대" list={['Master data 관리', '가맹점 초대']} />
      <InvitationForm />
    </div>
  )
}
