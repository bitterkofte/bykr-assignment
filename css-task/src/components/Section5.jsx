import Windows from '../assets/windows.svg'
import RightArrow from '../assets/icons/right-arrow.svg'
import LeftArrow from '../assets/icons/left-arrow.svg'
import ReviewCard from './ReviewCard'

import zoomer from '../assets/logos/zoomer.svg'
import shells from '../assets/logos/shells.svg'
import artvenue from '../assets/logos/artvenue.svg'
import waves from '../assets/logos/waves.svg'

import user1 from '../assets/avatars/user1.png'
import user2 from '../assets/avatars/user2.png'
import user3 from '../assets/avatars/user3.png'
import user4 from '../assets/avatars/user4.png'

const cardInfo = [
  {
    id: 0,
    logo: waves,
    name: "WAVES",
    text: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
    avatar: user4,
    username: "Charolette Hanlin",
    userTitle: "CEO"
  },
  {
    id: 1,
    logo: zoomer,
    name: "Zoomer",
    text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    avatar: user1,
    username: "Hellen Jummy",
    userTitle: "Team Lead"
  },
  {
    id: 2,
    logo: shells,
    name: "SHELLS",
    text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    avatar: user2,
    username: "Hellena John",
    userTitle: "Co-founder"
  },
  {
    id: 3,
    logo: artvenue,
    name: "ArtVenue",
    text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    avatar: user3,
    username: "David Oshodi",
    userTitle: "Manager"
  },
  {
    id: 4,
    logo: waves,
    name: "WAVES",
    text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    avatar: user4,
    username: "Charolette Hanlin",
    userTitle: "CEO"
  },
]

const Section5 = () => {
  return (
    <div className='min-h-[732px]'>
      <div className='flex justify-between items-center px-20'>
        <h1 className='text-[56px] font-extrabold'>Because they love us</h1>
        <div className='flex gap-6'>
          <button className='p-3 border-2 border-amber-900 rounded-full'><img src={LeftArrow} alt="" /></button>
          <button className='p-3 border-2 border-amber-900 rounded-full'><img src={RightArrow} alt="" /></button>
        </div>
      </div>
      <div className='m-10 w-[1360px] h-[421px] bg-amber-200'>
        <div className='absolute w-full mt-10 -ml-80 flex gap-6 '>
          {cardInfo.map((m, i) => (
            <ReviewCard key={i} logo={m.logo} name={m.name} text={m.text} avatar={m.avatar} username={m.username} userTitle={m.userTitle} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Section5