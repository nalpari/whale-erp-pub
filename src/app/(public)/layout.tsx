import BeforeHeader from '@/components/ui/common/BeforeHeader'
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-wrap">
      <BeforeHeader />
      <div className="container">{children}</div>
    </div>
  )
}
