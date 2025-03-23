import { NavLink } from "react-router-dom";
// import { CiHome } from "react-icons/ci";


const menuLinks = [
    {
        id: 1,
        name: 'Home',
        path: '/',
        // icon: <CiHome />
    },
    {
        id: 2,
        name: 'Favorites',
        path: '/favorites',
    },
    {
        id: 3,
        name: 'Recipe Details',
        path: '/recipe-details',
    },
   
]

const Navbar = () => {

 return (
  <nav className="w-full bg-gray-100">
    <div className="container mx-auto py-6 flex justify-between items-center">
      <div>
           <h1 className="font-bold  ">Cook book</h1>
      </div>
      <ul className="hidden md:flex items-center gap-10">
        {
          menuLinks.map((link) => (
            <li 
            className="text-primary"
            key={link.id}>
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
                {link.name}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <div>
        <button>
          SignUp
        </button>
      </div>
    </div>
  </nav>
 )
 
}

export default Navbar