import { NavLink } from "react-router-dom";
import FlyOut from "./FlyOut"
import ResourcesContent from "./ResourcesContent"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react"
import { IoClose } from "react-icons/io5";
import ResponsiveMenu from "./ResponsiveMenu"



const menuItems = [
  {
    label: "Home",
    path: '/',
    id: 0
  },
  {
    label: "About",
    path: '/about',
    id: 1
  },
  {
    label: "Contact",
    path: '/contact',
    id: 2
  },
  {
    label: "Blogs",
    path: '/blogs',
    id: 3
  }
]
 
 const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu)
  }
   return (
     <nav className="w-full sticky top-0 left-0 right-0 bg-green-900 text-white z-10 py-4 shadow-sm shadow-black ">
      <div className="px-6 md:px-0 md:container mx-auto flex justify-between items-center">
        {/* logo */}
        <div>
          <h1>
            COOKBOOK
          </h1>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex ">
          <ul className="flex gap-4">
            {
              menuItems.map((link) => (
                <li key={link.id}>
                  <NavLink 
                    to={link.path}
                    className={({isActive, isPending}) => (
                      isActive
                      ? "active"
                      : isPending
                      ? "pending"
                      : ""
                    )}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))
            }
            <div className="relative">
               
              <FlyOut FlyoutContent={ResourcesContent}>
                  Resources
              </FlyOut>
            </div>
          </ul>
          
        </div>
        <div className="flex items-center gap-3">
 
           {/* <button 
           className="border border-white px-4 py-1 rounded-2xl hover:border-border-green-500 hover:bg-green-500 transition-colors delay-300 ease-in-out cursor-pointer"
           onClick={() => signOut()}>
              Sign Out
            </button> */}
          {/* hamburger menu */}
          <button onClick={toggleMenu} className="p-2 rounded-full delay-300 transition-all cursor-pointer md:hidden flex hover:bg-green-500">
            {
              menu ? (
                <IoClose size={30}/>
              ) : (
                <HiOutlineMenuAlt3 size={30}/>
              )
            }
          </button>
        </div>
        
      </div>
        {/* mobile menu */}

        <ResponsiveMenu 
          menu={menu}
          toggleMenu={toggleMenu}
        />
     </nav>
   )
 }
 
 export default Navbar
 