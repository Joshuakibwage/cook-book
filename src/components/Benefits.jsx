import React from 'react'
import { FaCube } from "react-icons/fa";
import salad from "../assets/salad.jpg"
 

const Benefits = () => {
  return (
    <section className="bg-neutral-200">
      <div className="px-8 py-16 md:p-0 md:container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:py-24
      items-center">
        <div className="max-w-2xl space-y-6 order-2">
            <h2 className="text-2xl font-bold sm:text-4xl text-gray-900">
                Transform Your Ingredients Into Delicious Meals
            </h2>
            <p className="text-gray-800">
                Our app helps you minimize food waste by suggesting recipes based on what you already have. Discover new culinary delights and make the most of your pantry!
            </p>
            <div className="space-y-2">
               
                <div className="flex items-center gap-4">
                    <FaCube />
                    <p className="text-gray-800">Reduce waste and save money with every meal.</p>
                </div>
                <div className="flex items-center gap-4">
                    <FaCube />
                    <p className="text-gray-800">Explore diverse recipes tailored to your ingredients.</p>
                </div>
                <div className="flex items-center gap-4">
                    <FaCube />
                    <p className="text-gray-800">Unlock creativity in the kitchen effortlessly.</p>
                </div>
            </div>
            <div>
                <button className="font-semibold border-2 border-green-500 hover:bg-green-600 transition-colors delay-300 hover:text-white px-8 py-2 cursor-pointer">
                    Learn More
                </button>
                
               
            </div>
        </div>
        <div className="order-1">
           <img 
                src={salad} 
                alt="salad" 
                className="shadow-2xl shadow-black"
            /> 
        </div>
      </div>
    </section>
  )
}

export default Benefits
