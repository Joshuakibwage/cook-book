import {FaArrowRight} from "react-icons/fa"

const BlogCard = ({image, title, description}) => {
  return (
    <div className="dark:text-gray-300 group">
        <div className="overflow-hidden ">
            <img 
                src={image} 
                alt="image" 
                className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300 ease-in-out
                transition-transform delay-200"
            />
            <div className="space-y-2 p-4 ml-6 bg-white -translate-y-16 shadow-sm 
            shadow-gray-400">
                <h1 className="line-clamp-1 text-l font-medium text-black ">
                    {title}
                </h1>
                <p className="line-clamp-4 text-black text-sm ">
                    {description}
                </p>
                <div className="flex justify-end pr-4 text-gray-500">
                    <FaArrowRight
                    className="group-hover:text-primary group-hover:translate-x-2 duration-300 transition-all
                    ease-in-out delay-200" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard