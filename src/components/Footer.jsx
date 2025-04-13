
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="pt-8 sm:pt-14 md:pt-18 lg:pt-24 px-8 sm:px-0 bg-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 container mx-auto gap-10">
        <div>Logo</div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul className="mt-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Blog Post</li>
            <li>Blogs</li>
          </ul>
        </div>
        {/* resources section */}
        <div>
          <h3 className="font-bold">Resources</h3>
          <ul className="mt-2 text-sm">
            <li>Recipe Ideas</li>
            <li>Cooking Tips</li>
            <li>Meal Plans</li>
            <li>User Stories</li>
            <li>Community</li>
          </ul>
        </div>
        {/* stay connected section */}
        <div>
          <h3 className="font-bold">Stay Connected</h3>
          <ul className="mt-2 text-sm">
            <li>Social Media</li>
            <li>News Letter</li>
            <li>Feedback</li>
            <li>Support</li>
            <li>Updates</li>
          </ul>
        </div>
        {/* join us section */}
        <div className="col-span-3 ">
          <div className="space-y-3">
              <h3 className="font-bold">Join </h3>
              <p className="text-sm">
                Subscribe to our newsletter for the latest features and updates.
              </p>
              <div className="flex items-center gap-2">
                <input 
                  type="email"
                  placeholder="Your email..."
                  className="border w-[80%] pl-2 py-2 rounded-md bg-gray-100 border-gray-400"
                />
                <button className="py-2 px-5 bg-green-900 rounded-md font-bold hover:bg-green-800 text-white delay-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-105 transition-transform ">
                  Join
                </button>
              </div>
              <p className="text-sm">
                By joining you agree, to our privacy policy and consent to receive updates.
              </p>
            </div>
        </div>
       
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-between px-8 md:px-14">

          <div className="flex items-center gap-8 text-sm">
            <p>
              &copy;{new Date().getFullYear()} Cook Book. All rights reserved.
            </p>
            <p className="underline">
              Privacy Policy
            </p>
            <p className="underline">
              Terms of Use
            </p>
            <p className="underline">
              Cookie Settings
            </p>
          </div>
          <div className="flex items-center gap-8">
            <a href='https://www.instagram.com' target="_blank">
              <FaInstagram />
            </a>
            <a href='https://www.facebook.com' target="_blank">
              <FaFacebook />
            </a>
            <a href='https://www.x.com' target="_blank">
              <FaTwitter />
            </a>
            <a href='https://www.youtube.com' target="_blank">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="overflow-hidden mt-12">
            <svg
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: '#0d542b', width: '122%', height: 127, transform: 'rotate(180deg) scaleX(-1)' }}
            >
              <path
              d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
              opacity=".25"
            />
              <path
                d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                opacity=".5"
              />
              <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
            </svg>
          </div>
    </footer>
  )
}

export default Footer
