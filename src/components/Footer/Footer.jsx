import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";

const socialLinks = [
    {
        icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />
    },
    {
        icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />
    },
    {
        icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />
    },
    {
        icon: <AiFillLinkedin className="group-hover:text-white w-4 h-5" />
    },
]

const quickLinks01 = [
    {
        path: '/',
        display: "Home",
    },
    {
        path: '/about',
        display: "About Us",
    },
    {
        path: '/services',
        display: "Services",
    },
    {
        path: '/blog',
        display: "blog",
    },
]

const quickLinks02 = [
    {
        path: '/find-a-doctor',
        display: "Find a Doctor",
    },
    {
        path: '/',
        display: "Request an Appointment",
    },
    {
        path: '/',
        display: "Find a Location",
    },
    {
        path: '/',
        display: "Get an Opinion",
    },
]

const quickLinks03 = [
    {
        path: '/',
        display: "Donate",
    },
    {
        path: '/contact',
        display: "Contact Us",
    },
]

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <footer className="pb-16 pt-10">
            <div className="container">
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div>
                        <img src={logo} alt="" />
                        <p className="text-[16px] leading-7 font-[200] text-textColor mt-4">Copyright © {year} Rights are reserved by CurePoint Pvt. Ltd.</p>
                        <div className="flex items-center gap-3 mt-4">
                            {socialLinks.map((link,index) => (
                                <div key={index} className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">{link.icon}</div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[600] mb-6 text-headingColor">Quick Links</h2>
                        <ul>
                            {quickLinks01.map((item, index) => (
                                <li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[600] mb-6 text-headingColor">I Want to:</h2>
                        <ul>
                            {quickLinks02.map((item, index) => (
                                <li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-[20px] leading-[30px] font-[600] mb-6 text-headingColor">Support</h2>
                        <ul>
                            {quickLinks03.map((item, index) => (
                                <li key={index} className="mb-4"><Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;