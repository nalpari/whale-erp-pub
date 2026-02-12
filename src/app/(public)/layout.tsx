import BeforeHeader from '@/components/ui/common/BeforeHeader'
import BeforeFooter from '@/components/ui/common/BeforeFooter'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-wrap">
      <BeforeHeader />
      <div className="container">{children}</div>
      <BeforeFooter />
    </div>
  )
}
