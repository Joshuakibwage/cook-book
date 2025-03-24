import React from 'react'

const CallToAction = () => {
  return (
    <section className="relative">
        <img 
            src="src/assets/burger.jpg" 
            alt="burger" 
            className="w-full h-[70vh] object-cover"
        />
      <div className="absolute inset-0 bg-black/80 flex flex-col justify-center">
        <div className="ml-6 md:ml-16 px-8 space-y-2">
            <h3 className="text-3xl font-extrabold text-gray-200 sm:text-4xl md:text-5xl">
                Discover Delicious Recipes Today!
            </h3>
            <p className="text-gray-200 md:text-xl">
                Unlock a world of culinary possibilities with our app—start cooking with what you have!
            </p>
            <div className="space-x-8 mt-6">
                <button className="px-8 py-2 bg-green-500 hover:bg-green-700 transition-colors delay-300 ease-in-out font-bold text-white cursor-pointer">
                    Download
                </button>
                
                <button className="px-8 py-2 bg-white hover:bg-green-700 transition-colors delay-300 ease-in-out font-bold hover:text-white cursor-pointer">
                    Sign Up
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
