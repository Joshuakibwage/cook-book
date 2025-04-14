import Img1 from "../assets/pancake.jpg"
import Img2 from "../assets/meal-prep.jpg"
import Img3 from "../assets/pancake.jpg"
import BlogCard from "./BlogCard";
import Button from "./Button";

const BlogsData = [
    {
      id: 1,
      image: Img1,
      title: "Easily Find Recipes Tailored to What You Have at Home",
      description:
        "Our app helps you create meals based on ingredients you already have.",
      author: "Someone",
      date: "April 22, 2022",
      aosDelay: "0",
    },
    {
      id: 2,
      image: Img2,
      title: "Follow These Simple Steps to Create Your Next Meal",
      description:
        "Input your available ingredients and let our app do the rest.",
      author: "Someone",
      date: "April 22, 2022",
      aosDelay: "300",
    },
    {
      id: 3,
      image: Img3,
      title: " Get Personalized Recipe Suggestions in Seconds!",
      description:
        "Choose from a variety of recipes that match your ingredients perfectly.",
      author: "Someone",
      date: "April 22, 2022",
      aosDelay: "500",
    },
  ];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100">
        <div className="container mx-auto py-12">
            <h1 
            data-aos="fade-up"
            className="my-8 border-l-8 border-primary py-2 px-4 text-3xl font-semibold"
            >
                Discover Delicious Recipes with Just a Few Simple Ingredients!
            </h1>
            {/* Blogs card */}

            <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-6 lg:grid-cols-3">
            {
                BlogsData.map((blog) => (
                    <BlogCard 
                        key={blog.id}
                        {...blog}
                    />
                ))
            }
            </div>
            <div className="text-center">
                <Button 
                    label="View All Posts"
                    className="bg-primary hover:bg-primary/80 duration-300  rounded-lg transition-colors cursor-pointer 
                    delay-200 ease-in-out px-4 py-2  active:ring-1bg-primary text-white"
                />
            </div>
        </div>
    </section>
  )
}

export default HowItWorks