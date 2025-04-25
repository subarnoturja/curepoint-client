import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { BiMenu } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthContext";

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

    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, role, token } = useContext(authContext);

    const toggleMenu = () => {
       setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
      setMenuOpen(false);
    }

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0); // Check if the page is scrolled
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll); // Cleanup
      };
    }, []);

  return (
    <header className={`header flex items-center sticky top-0 lg:z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white backdrop-blur-lg shadow-lg"
            : "bg-white"}`}>
      <div className="container mx-auto px-4">
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
            {
              token && user ? <div>
              <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={user?.photo} className="ml-2 w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div> :  <Link to='/login'>
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Login</button>
            </Link>
            }         
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
