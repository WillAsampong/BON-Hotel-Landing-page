import { useState } from 'react'
import FooterLogo from '../../assets/image 1.png'

const Footer = () => {
    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

  return (
    <footer className='bg-[#111] h-96 bottom-0 w-full -translate-y-0 flex items-center justify-around'>
        <div className="flex flex-col gap-y-8">
            <div className="footer-logo">
                <img src={FooterLogo} className='' alt="" />
            </div>
            <div className="contact-info text-left ">
                <h4 className='font-medium text-white' >Bon Hotels Head Office</h4>
                <div className="number text-gray-400">
                    <p>+27 434 344 432</p>
                </div>
                <p className='text-gray-400'>Info@bonhotels.com</p>
            </div>
        </div>
        <div className="nav-links">
            <ul className='flex flex-col gap-y-4 text-white'>
                <li>Our Hotels</li>
                <li>Our Conferencing</li>
                <li>Our Company</li>
                <li>Hotel Design</li>
                <li>Careers</li>
            </ul>
        </div>
        <div className="subscribe flex flex-col gap-y-4">
            <h4 className='text-white font-medium text-2xl'>Subscribe for Others</h4>
            <input type="text" placeholder='Email Address' className='px-8 py-2' value={email} onChange={handleEmailChange}/>
            <div className="button">
                <button className='text-white font-medium px-12 py-2 bg-gold rounded-lg'>Subscribe</button>
            </div>
        </div>
    </footer>
  )
}

export default Footer
