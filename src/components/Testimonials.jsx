import React, { useState } from 'react'


const testimonialData = [
  {
    title: "🍽️ A Game-Changer for Meal Planning!",
    content: "Cookbook has completely changed how I plan my meals! I just enter what I have in my fridge, and it suggests amazing recipes in seconds. No more wasting food!",
    name: "Sarah M. ",
    occupation: "Busy Mom",
    image: "https://images.unsplash.com/photo-1733325648091-eeabc2826d73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    title: "🏋️ Perfect for Healthy Eating! ",
    content: "As someone who tracks my meals, this app is a lifesaver! I love how I can find healthy recipes based on my ingredients. The step-by-step instructions are so easy to follow!",
    name: "James K. ",
    occupation: "Fitness Enthusiast",
    image: " https://images.unsplash.com/photo-1704543641165-35caadfd4672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    title: "🎓 Budget-Friendly & Super Easy! ",
    content: "I’m always on a budget, and this app helps me cook with what I already have. Super convenient and easy to use!",
    name: " Emily R.",
    occupation: "College Student",
    image: " https://plus.unsplash.com/premium_photo-1673984261102-7e44ace8745a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    title: "👨‍🍳 Endless Recipe Inspiration!",
    content: "The variety of recipes is incredible! Whether I want something quick or a fancy dinner, Cookbook always has great recommendations.",
    name: "  Linda T",
    occupation: "Home Chef",
    image: " https://images.unsplash.com/photo-1701232664498-b58a07d80001?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0OXx8fGVufDB8fHx8fA%3D%3D",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    title: "👨‍🍳 Endless Recipe Inspiration!",
    content: "This app has transformed my cooking! I can now whip up delicious meals with whatever I have on hand.",
    name: "  Emily Johnson",
    occupation: "Home Chef",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: "⭐⭐⭐⭐⭐"
  },
  
]



const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonialData.length - 1 : currentIndex -1 ;
    setCurrentIndex(newIndex)
  }


  const nextSlide = () => {

  }
  return (
   
          <section className="relative isolate overflow-hidden bg-green-100 px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-green-600/10 ring-green-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
                className="mx-auto h-12 text-green-700"
              />
              <figure className="mt-10">
                <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                  <p>
                  "This app has transformed my cooking! I can now whip up delicious meals with whatever I have on hand."
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="mx-auto size-50 rounded-full"
                  />
                  <div className="mt-4 flex flex-col space-y-2 items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">Emily Johnson</div>
                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-gray-600">Home Chef, Blogger</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
   
      
  )
}

export default Testimonials
