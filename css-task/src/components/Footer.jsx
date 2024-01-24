import global from '../assets/links/global.svg'
import appstore from '../assets/links/appstore.svg'
import googleplay from '../assets/links/googleplay.svg'
import youtube from '../assets/links/youtube.svg'
import facebook from '../assets/links/facebook.svg'
import twitter from '../assets/links/twitter.svg'
import instagram from '../assets/links/instagram.svg'
import linkedin from '../assets/links/linkedin.svg'

const Footer = () => {
  return (
    <div className="bg-[#0F172A] text-white px-20">
      <div className="py-12 flex gap-12">
        <ul className="w-[284px]">
          <h4 className="py-3 font-medium">Product</h4>
          <li className="py-3 text-gray-200">Pricing</li>
          <li className="py-3 text-gray-200">Overview</li>
          <li className="py-3 text-gray-200">Browse</li>
          <li className="py-3 text-gray-200">Accessibility</li>
          <li className="py-3 text-gray-200">Five</li>
        </ul>
        <ul className="w-[284px]">
          <h4 className="py-3 font-medium">Solutions</h4>
          <li className="py-3 text-gray-200">Brainstorming</li>
          <li className="py-3 text-gray-200">Ideation</li>
          <li className="py-3 text-gray-200">Wireframing</li>
          <li className="py-3 text-gray-200">Research</li>
          <li className="py-3 text-gray-200">Design</li>
        </ul>
        <ul className="w-[284px]">
          <h4 className="py-3 font-medium">Support</h4>
          <li className="py-3 text-gray-200">Contact Us</li>
          <li className="py-3 text-gray-200">Developers</li>
          <li className="py-3 text-gray-200">Documentations</li>
          <li className="py-3 text-gray-200">Integrations</li>
          <li className="py-3 text-gray-200">Reports</li>
        </ul>
        <ul className="w-[284px]">
          <h4 className="py-3 font-medium">Get the App</h4>
          <li className="pb-4 text-gray-200"><img src={appstore} alt="" /></li>
          <li className=" text-gray-200"><img src={googleplay} alt="" /></li>
          <div className='pt-14'>
            <p className='pb-5'>Follow Us</p>
            <div className='flex gap-4'>
              <img src={youtube} alt="" />
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </ul>
      </div>
      <div className='h-[1px] bg-gray-700'/>
      <div className="text-gray-200 py-[37px] flex justify-between">
        <p className="">Collers @ 2023. All rights reserved.</p>
        <div className="flex gap-8">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Contact</p>
          <p className='flex gap-3'>
            <img src={global} alt="" />
            <span>EN</span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Footer