import Video from '../assets/video.svg'
import CheckedListItem from './CheckedListItem'

const Section4 = () => {
  return (
    <div className='px-20 py-40 lg:h-[816px]'>
      <div className='flex justify-between bg-white rounded-[30px] pl-20 py-28 relative shadow-xl shadow-neutral-300'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-[56px] font-extrabold'>Why join us</h1>
          <ul className='list-none'>
            <CheckedListItem text={"Est et in pharetra magna adipiscing ornare aliquam."}/>
            <CheckedListItem text={"Tellus arcu sed consequat ac velit ut eu blandit."}/>
            <CheckedListItem text={"Ullamcorper ornare in et egestas dolor orci."}/>
          </ul>
          <button className="w-fit text-xl font-medium px-8 py-4 leading-6 text-amber-900 border-amber-900 border-2 rounded-lg">Sign up now</button>
        </div>
        <div className='relative w-[713px] flex items-center'>
          <img className='absolute mt-6 ml-10 drop-shadow-xl' src={Video} alt="" />
        </div>
      </div>
    </div>
  )
}
export default Section4