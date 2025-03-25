import React from 'react'

const ResourcesContent = () => {
  return (
    <section className="p-4 text-green-800 font-bold">
      <ul className="">
        <li className="hover:bg-green-200 py-3 pl-2 hover:translate-x-1 delay-300 transition-all">
            Recipe Ideas
        </li>
        <li className="hover:bg-green-200 py-3 pl-2 hover:translate-x-1 delay-300 transition-all">
            Meal Plans
        </li>
        <li className="hover:bg-green-200 py-3 pl-2 hover:translate-x-1 delay-300 transition-all">
            Cooking Tips
        </li>
        <li className="hover:bg-green-200 py-3 pl-2 hover:translate-x-1 delay-300 transition-all">
            User Stories
        </li>
      </ul>
    </section>
  )
}

export default ResourcesContent
