import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="bg-green-100 py-8 md:py-24">
      <div className="px-8 md:px-0 md:container mx-auto">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900">
                Discover Delicious Recipes with Just a Few Simple Ingredients!
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 py-12 gap-4">
            {/* card 1 */}
            <div className="space-y-2 p-2 border border-gray-300 shadow-2xl hover:-translate-y-1 delay-200
            transition-all ease-in-out">
                <img 
                    src="src/assets/pancake.jpg" 
                    alt="pancake" 
                    className="h-80 w-150 object-cover"
                />
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 ">
                        Easily Find Recipes Tailored to What You Have at Home
                    </h3>
                    <p>
                        Our app helps you create meals based on ingredients you already have.
                    </p>
                    <button className="flex items-center gap-1 group mx-auto px-8 py-2 bg-green-500 cursor-pointer
                    text-white font-bold hover:bg-green-700 transition-colors delay-300">
                        Start
                        <FaChevronRight className="group-hover:translate-x-2 delay-300 transition-all" />
                    </button>
                </div>
            </div>
            {/* card 2 */}
            <div className="space-y-2 p-2 border border-gray-300 shadow-2xl hover:-translate-y-1 delay-200
            transition-all ease-in-out">
                <img 
                    src="src/assets/meal-prep.jpg" 
                    alt="pancake" 
                    className="h-80 w-150 object-cover"
                />
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 ">
                        Follow These Simple Steps to Create Your Next Meal
                    </h3>
                    <p>
                        Input your available ingredients and let our app do the rest.
                    </p>
                    <button className="flex items-center gap-1 group mx-auto px-8 py-2 bg-green-500 cursor-pointer
                    text-white font-bold hover:bg-green-700 transition-colors delay-300">
                        Search
                        <FaChevronRight className="group-hover:translate-x-2 delay-300 transition-all" />
                    </button>
                </div>
            </div>
            {/* card 3 */}
            <div className="space-y-2 p-2 border border-gray-300 shadow-2xl hover:-translate-y-1 delay-200
            transition-all ease-in-out">
                <img 
                    src="src/assets/pancake.jpg" 
                    alt="pancake" 
                    className="h-80 w-150 object-cover"
                />
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 ">
                        Get Personalized Recipe Suggestions in Seconds!
                    </h3>
                    <p>
                        Choose from a variety of recipes that match your ingredients perfectly.
                    </p>
                    <button className="flex items-center gap-1 group mx-auto px-8 py-2 bg-green-500 cursor-pointer
                    text-white font-bold hover:bg-green-700 transition-colors delay-300">
                        Explore
                        <FaChevronRight className="group-hover:translate-x-2 delay-300 transition-all" />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
