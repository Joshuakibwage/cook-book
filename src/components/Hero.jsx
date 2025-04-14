import React from 'react'
import bgImage from "../assets/hero1.jpg"

 

const Hero = () => {
  return (
     <section>
      <div className="w-full relative">
        <img 
          src={bgImage} 
          alt="hero image"
          className="w-full h-[100vh] object-center object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
          <div className="max-w-3xl text-center text-white space-y-6 p-4">
            <h1 className=" text-3xl sm:text-4xl md:text-6xl font-extrabold ">
              Cook Delicious Meals with What You Have
            </h1>
            <p className=" ">
              Discover mouthwatering recipes tailored to your available ingredients. Simplify meal prep and 
              reduce food waste with our intuitive app.
            </p>
          </div>
        </div>
      </div>
     </section>
  )
}

export default Hero
