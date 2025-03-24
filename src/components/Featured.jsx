import React from 'react'
import { FaCube } from "react-icons/fa";

const Featured = () => {
  return (
    <section className="bg-neutral-200">
      <div className="px-8 py-16 md:p-0 md:container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:py-24
      items-center">
        <div className="max-w-2xl space-y-6">
            <h2 className="text-2xl font-bold sm:text-4xl text-gray-900">
                Discover Delicious Recipes Tailored to Your Available Ingredients!
            </h2>
            <p className="text-gray-800">
                Transform your cooking experience with our innovative recipe finder. Simply enter the 
                ingredients you have, and let us inspire your next meal!
            </p>
            <div className="space-y-2">
               
                <div className="flex items-center gap-4">
                    <FaCube />
                    <p className="text-gray-800">Personalized recipe suggestions just for you.</p>
                </div>
                <div className="flex items-center gap-4">
                    <FaCube />
                    <p className="text-gray-800">Cook smarter with what you already have.</p>
                </div>
                <div className="flex items-center gap-4">
                    <FaCube />
                    <p className="text-gray-800">End mealtime stress with easy recipe ideas.</p>
                </div>
            </div>
        </div>
        <div>
           <img 
                src="src/assets/pizza.jpg" 
                alt="pizza" 
                className="shadow-2xl shadow-black"
                loading="lazy"
            /> 
        </div>
      </div>
    </section>
  )
}

export default Featured
