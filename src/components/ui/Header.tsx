import FullDownMenu from './common/FullDownMenu'
import MyData from './common/MyData'
import ServiceTab from './common/ServiceTab'

export default function Header() {
  return (
    <header>
      <FullDownMenu />
      <div className="data-wrap">
        <ServiceTab />
        <MyData />
      </div>
    </header>
  )
}
