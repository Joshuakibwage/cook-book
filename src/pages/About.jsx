import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"


const About = () => {
 

  return (
    <section>
  
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-green-600">About</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-green-950 sm:text-5xl">
            Welcome to Cook Book your smart recipe finder
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-green-800 max-lg:text-center">
                    Why Cook Book
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Too often, we find ourselves staring at our pantry, unsure of what to cook. Cookbook solves this problem by allowing you to enter the ingredients you have and instantly suggesting delicious recipes you can make. No more food waste, no more unnecessary grocery trips just effortless meal planning!
                  </p>
                </div>
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-green-800  shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src={hero2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-green-800 max-lg:text-center">How it works</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  <strong className="text-green-600">Enter Your Ingredients:</strong> Tell us what you have in your kitchen.
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  <strong className="text-green-600">Get Recipe Suggestions:</strong> We’ll fetch recipes that match your ingredients.
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  <strong className="text-green-600">Cook & Enjoy:</strong> Follow easy step-by-step instructions and enjoy a delicious homemade meal!
                  </p>
                </div>
            
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-green-800 max-lg:text-center">Our Features</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    <strong className="text-green-500">Ingredient-Based Recipe Search:</strong> Find meals based on what’s available.
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    <strong className="text-green-500">Dietary & Cuisine Filters:</strong> Customize your search for dietary preferences.
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    <strong className="text-green-500">Step-by-Step Cooking Guides:</strong> Easy instructions to make cooking a breeze.
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    <strong className="text-green-500">Nutritional Information:</strong> Know what’s in your food before you cook.
                  </p>
                </div>
                 
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-green-800 max-lg:text-center">
                    Powered by Spunacular API
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Cookbook leverages the power of Spoonacular, a leading recipe database, to bring you the best meal options from around the web.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                       <img src={hero3} alt="" />
                    </div>
                     
                  </div>
                </div>
              </div>
               
            </div>
          </div>
        </div>
      </div>
 
    </section>
  )
}

export default About
