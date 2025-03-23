import React, { useState } from 'react';
import { fetchRecipesByIngredients } from '../utils/fetchData';

const RecipeFinder = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(recipes)
  const handleSearch = async () => {
    if (!ingredients.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchRecipesByIngredients(ingredients);
      setRecipes(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching recipes:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 w-full py-14 bg-gray-100 ">
      <h2 className="text-xl font-bold mb-4 text-center">Find Recipes by Ingredients</h2>
      
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2 text-center">
          Ingredients (comma separated)
        </label>
        <input
          id="ingredients"
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="apple,flour,sugar"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <button
        onClick={handleSearch}
        disabled={loading || !ingredients.trim()}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded disabled:opacity-50
        cursor-pointer"
      >
        {loading ? 'Searching...' : 'Find Recipes'}
      </button>
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {recipes.length > 0 && (
        <div className="mt-6">
          <h3 className="font-medium mb-2">Found Recipes:</h3>
          <ul className="divide-y divide-gray-200 flex flex-wrap">
            {recipes.map(recipe => (
              <li key={recipe.id} className="py-3">
                <div className="container mx-auto w-full">
                  {recipe.image && (
                    <img 
                      src={recipe.image} 
                      alt={recipe.title} 
                      className="w-120 h-80 object-cover rounded mr-3"
                    />
                  )}
                  <div>
                    <p className="font-medium">{recipe.title}</p>
                    <p className="text-sm text-gray-600">
                      Missing ingredients: {recipe.missedIngredientCount}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeFinder;