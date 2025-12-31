import MenuInfoCode from '@/components/menuinfo/MenuInfoCode'
import Location from '@/components/ui/Location'

export default function MenuInfoPage() {
  return (
    <div className="data-wrap">
      <Location title="메뉴 정보 공통코드" list={['메뉴 정보 관리']} />
      <MenuInfoCode />
    </div>
  )
}
