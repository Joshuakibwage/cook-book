import { Link } from "react-router-dom";
import FlyOut from "./FlyOut"
import ResourcesContent from "./ResourcesContent"



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
   return (
     <nav className="w-full sticky top-0 left-0 right-0 bg-green-900 text-white z-10 py-4 shadow-2xl shadow-black">
      <div className="px-6 md:px-0 md:container mx-auto flex justify-between items-center">
        {/* logo */}
        <div>
          <h1>
            COOKBOOK
          </h1>
        </div>

        {/* NAV LINKS */}
        <div className=" ">
          <ul className="flex gap-4">
            {
              menuItems.map((link) => (
                <li key={link.id}>
                  <Link to={link.path}>
                    {link.label}
                  </Link>
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
        <div>
          <button className="bg-green-500 px-8 py-2 rounded-md hover:-translate-y-1 hover:scale-105 transition-all delay-300 ease-in-out hover:bg-green-600 cursor-pointer font-bold">
            Sign In
          </button>
        </div>
      </div>
       
     </nav>
   )
 }
 
 export default Navbar
 