import Location from '@/components/ui/Location'
import ThumbnailList from '@/components/thumbnail/ThumbnailList'

export default function ThumbnailPage() {
  return (
    <div className="data-wrap">
      <Location title="마스터용 메뉴 관리" list={['Master data 관리', '마스터용 메뉴 관리']} />
      <ThumbnailList />
    </div>
  )
}
