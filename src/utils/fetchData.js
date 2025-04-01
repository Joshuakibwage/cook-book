//  Service for interacting with the Spoonacular API
 
export const fetchRecipesByIngredients = async (ingredients) => {
  if (!ingredients || !ingredients.trim()) {
    throw new Error('Ingredients list cannot be empty');
  }

  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  
  // if (!apiKey) {
  //   console.error('API key is missing. Make sure VITE_SPOONACULAR_API_KEY is set in your .env file');
  //   throw new Error('API key is not configured');
  // }

  const ingredientsList = ingredients.split(',').map(i => i.trim()).join(',');
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsList}&apiKey=${apiKey}&number=5`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  
  return await response.json();
   
};




 

 