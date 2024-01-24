import global from '../assets/links/global.svg'

const Footer = () => {
  return (
    <div className="bg-[#0F172A] text-white px-20">
      <div className="py-12 flex gap-12">
        <ul className="w-[284px]">
          <h4 className="py-3 font-medium">Product</h4>
          <li className="py-3">Pricing</li>
        </ul>
      </div>
      <div className="text-gray-200 py-[37px] justify-between">
        <p className="">Collers @ 2023. All rights reserved.</p>
        <div className="flex gap-3">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Contact</p>
          <p>
            <img src={global} alt="" />
            <span>EN</span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Footer