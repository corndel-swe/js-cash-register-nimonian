/**
 * Given a list of recipes, return the number of vegetarian recipes in the list
 */
function countVeggies(recipes) {
  let result = 0

  for (let recipe of recipes) {
    if (recipe.isVegetarian) {
      result++
    }
  }

  return result
}

// array provided for debugging:
const recipes = [
  {
    name: 'Spaghetti Bolognese',
    ingredients: ['spaghetti', 'beef', 'tomato sauce'],
    servings: 4,
    isVegetarian: false
  },

  {
    name: 'Vegetable Stir Fry',
    ingredients: ['broccoli', 'carrots', 'bell peppers', 'soy sauce'],
    servings: 2,
    isVegetarian: true
  }
]

// don't change below
export default countVeggies
