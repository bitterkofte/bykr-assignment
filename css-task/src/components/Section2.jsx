import Section2Cards from "./Section2Cards"
import TrophyBadge from '../assets/badges/trophy.svg'
import NoteBadge from '../assets/badges/note.svg'
import TvBadge from '../assets/badges/tv.svg'

const Section2 = () => {
  return (
    <div className="flex p-20 justify-between">
      <Section2Cards title={"Nibh viverra"} iconBadge={TrophyBadge}/>
      <Section2Cards title={"Cursus amet"} iconBadge={NoteBadge}/>
      <Section2Cards title={"Ipsum fermentum"} iconBadge={TvBadge}/>
    </div>
  )
}
export default Section2