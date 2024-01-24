import bg from '../assets/backgrounds/bg-2.svg'
import Sneakers from '../assets/sneakerss.png'
import screen from '../assets/bullets/screen.svg'
import search from '../assets/bullets/search.svg'
import secure from '../assets/bullets/secure.svg'
import rocketship from '../assets/bullets/rocketship.svg'
import router from '../assets/bullets/router.svg'
import right from '../assets/bullets/right.svg'
import equalizer from '../assets/bullets/equalizer.svg'

const Section6 = () => {
  return (
    <div className="p-20 min-h-[996px] relative">
      <div className="mb-20 z-20 relative">
        <h1 className="mb-8 text-[56px] font-extrabold">Grow your collection</h1>
        <p className="text-lg">Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
      </div>
      <div className='flex gap-20 z-20 relative'>  
        <ul className='flex flex-col gap-4'>
          <li className='p-4 flex rounded-lg drop-shadow-md bg-white'>
            <img src={search} alt="" />
            <p className='pl-4 pr-2 text-xl font-medium'>Bibendum tellus</p>
            <img src={right} alt="" />
          </li>
          <li className='p-4 flex '>
            <img src={secure} alt="" />
            <p className='pl-4 pr-2 text-xl font-medium'>Cras eget</p>
          </li>
          <li className='p-4 flex '>
            <img src={rocketship} alt="" />
            <p className='pl-4 pr-2 text-xl font-medium'>Dolor pharetra</p>
          </li>
          <li className='p-4 flex '>
            <img src={screen} alt="" />
            <p className='pl-4 pr-2 text-xl font-medium'>Amet, fringilla</p>
          </li>
          <li className='p-4 flex '>
            <img src={router} alt="" />
            <p className='pl-4 pr-2 text-xl font-medium'>Amet nibh</p>
          </li>
          <li className='p-4 flex '>
            <img src={equalizer} alt="" />
            <p className='pl-4 pr-2 text-xl font-medium'>Sed velit</p>
          </li>
        </ul>
        <img src={Sneakers} alt="" />
      </div>
      <img className='w-full absolute bottom-0 right-0 -z-0' src={bg} alt="" />
    </div>
  )
}
export default Section6