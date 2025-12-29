import AuthorityTable from '@/components/authority/AuthorityTable'
import Location from '@/components/ui/Location'

export default function AuthorityPage() {
  return (
    <div className="data-wrap">
      <Location title="권한 관리" list={['Authority', 'Authority']} />
      <AuthorityTable />
    </div>
  )
}
