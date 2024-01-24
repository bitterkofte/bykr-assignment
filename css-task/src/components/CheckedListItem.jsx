import Check from '../assets/icons/check.svg'

const CheckedListItem = ({ text }) => {
  return (
    <li className='flex gap-[6px]'>
      <img src={Check} alt="check" />
      <span className='leading-9 text-xl'>{ text }</span>
    </li>
  )
}
export default CheckedListItem