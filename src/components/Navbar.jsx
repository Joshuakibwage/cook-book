import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";


const menuLinks = [
    {
        id: 1,
        name: "Home",
        path: "/home",
        icon: <CiHome />
    },
    {
        id: 2,
        name: "Favorites",
        path: "/favorites",
    },
    {
        id: 3,
        name: "Recipe Details",
        path: "/recipe-details",
    },
   
]

const Navbar = () => {

 return (
  <nav className="w-full bg-background">
    <div className="container mx-auto py-6 flex justify-between items-center">
      <div>
         <p className="font-cursive text-4xl relative">Cook</p>
         <p className="text-xs tracking-[0.5rem] absolute">BOOK</p>
      </div>
      <ul className="hidden md:flex items-center gap-10">
        {
          menuLinks.map((link) => (
            <li 
            className="text-primary"
            key={link.id}>
              <NavLink path={link.path}>
                {link.name}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <div></div>
    </div>
  </nav>
 )
 
}

export default Navbar