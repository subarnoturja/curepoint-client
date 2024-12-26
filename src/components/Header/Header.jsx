import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {

    const headerRef = useRef(null)
    const [menuOpen, setMenuOpen] = useState(false);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header')
            }
            else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(() => {
        handleStickyHeader()
        return () => window.removeEventListener('scroll', handleStickyHeader)
    })

    const toggleMenu = () => {
       setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
      setMenuOpen(false);
    }

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* Menu */}
          <div className={`navigation ${menuOpen ? "show__menu" : ""}`} onClick={closeMenu}>
            <ul className="menu flex flex-col md:flex-row items-center gap-4 md:gap-[2.7rem]" onClick={(e) => e.stopPropagation()}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    } 
                    onClick={closeMenu}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* nav right */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>
            <Link to='/login'>
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Login</button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
               <BiMenu className="w-6 h-6 cursor-pointer"></BiMenu> 
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
