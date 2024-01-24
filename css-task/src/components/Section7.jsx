import map from '../assets/map.svg'

const Section7 = () => {
  return (
    <div className="min-h-[717px] px-[196px] py-[42px] bg-amber-900 relative">
      <div className='h-full w-full absolute top-0 left-0 text-center flex items-center justify-center flex-col text-white z-20'>
        <p className='text-8xl leading-[105px] font-extrabold'>11,658,467</p>
        <p className='text-[56px] leading-[61px] font-extrabold'>Shoes Collected</p>
      </div>
      <img className='h-full items-center justify-center' src={map} alt="" />
    </div>
  )
}
export default Section7