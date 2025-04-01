import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; //


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

 
// Custom Next Button
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition cursor-pointer"
  >
    <ChevronRight size={24} />
  </button>
);

// Custom Prev Button
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition cursor-pointer"
  >
    <ChevronLeft size={24} />
  </button>
);



const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
   
  return (
    <div className="max-w-2xl mx-auto py-12 px-6 relative md:py-32">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        What People Say
      </h2>
      <Slider {...settings}>
        {testimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {testimonial.title}
            </h3>
            <p className="text-gray-700 italic">{testimonial.content}</p>
            <div className="w-full flex justify-center my-3 ">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="size-40 rounded-full object-center object-cover"/>
            </div>
            <div className="mt-4">
              <span className="font-semibold text-gray-900">{testimonial.name}</span> –{" "}
              <span className="text-gray-500">{testimonial.occupation}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials
