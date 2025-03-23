import React from 'react'
import bgImage from "../assets/bg-image.jpg"

 

const Hero = () => {
  return (
     <section>
      <div className="w-full relative">
        <img 
          src={bgImage} 
          alt=""
          className="w-full h-[100vh] object-center object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
          <div className="max-w-3xl text-center text-white space-y-6 p-4">
            <h1 className=" text-3xl sm:text-4xl md:text-6xl font-extrabold ">
              Cook Delicious Meals with What You Have
            </h1>
            <p className=" ">
              Discover mouthwatering recipes tailored to your available ingredients. Simplify meal prep and 
              reduce food waste with our intuitive app.
            </p>
            <div className="space-x-4 mt-8 md:mt-16">
              <button className="bg-green-400 px-8 py-2 hover:bg-green-600 delay-200 ease-in-out font-semibold
              transition-colors cursor-pointer">
                Download
              </button>
              
              <button className="px-8 py-2 border cursor-pointer hover:bg-green-400 delay-200 transition-colors
              ease-in-out font-semibold">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
     </section>
  )
}

export default Hero
