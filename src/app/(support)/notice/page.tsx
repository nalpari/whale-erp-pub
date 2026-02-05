import Notice from '@/components/notice/Notice'
import Location from '@/components/ui/Location'

export default function NoticePage() {
  return (
    <div className="data-wrap">
      <Location title="공지사항" list={['고객지원', '공지사항']} />
      <Notice />
    </div>
  )
}
