import express from 'express';

const app = express();
const PORT = 3000;

function printHello(req, res){
                res.send('{ "text": "Hello, World!" }');
  console.log('Received a GET request at /');
} 

app.get('/', printHello);

app.get('/resipes', (req, res) => {
  const resipes = `{
  "recipes": [
    {
      "id": 1,
      "name": "Spaghetti Bolognese",
      "ingredients": [
        "400g spaghetti",
        "2 tbsp olive oil",
        "1 onion, diced",
        "2 garlic cloves, minced",
        "500g minced beef",
        "400g canned tomatoes",
        "2 tbsp tomato paste",
        "1 tsp dried oregano",
        "Salt",
        "Pepper"
      ],
      "instructions": [
        "Cook the spaghetti according to the package instructions.",
        "Heat olive oil in a large pan over medium heat.",
        "Add the onion and garlic and sauté until soft.",
        "Add the minced beef and cook until browned.",
        "Stir in the canned tomatoes, tomato paste, and oregano.",
        "Season with salt and pepper.",
        "Simmer for 20 minutes, stirring occasionally.",
        "Serve the sauce over the spaghetti."
      ],
      "prepTime": "10 minutes",
      "cookTime": "30 minutes",
      "servings": 4
    },
    {
      "id": 2,
      "name": "Vegetable Stir-Fry",
      "ingredients": [
        "2 tbsp vegetable oil",
        "1 red bell pepper, sliced",
        "1 yellow bell pepper, sliced",
        "1 carrot, julienned",
        "1 zucchini, sliced",
        "2 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "1 tsp sesame oil",
        "1 tsp cornstarch mixed with 2 tbsp water"
      ],
      "instructions": [
        "Heat the vegetable oil in a wok or large skillet over high heat.",
        "Add the bell peppers, carrot, and zucchini and stir-fry for 5 minutes.",
        "Mix in the soy sauce, oyster sauce, and sesame oil.",
        "Stir in the cornstarch slurry to thicken the sauce.",
        "Cook for another 2 minutes, then remove from heat.",
        "Serve hot over rice or noodles."
      ],
      "prepTime": "10 minutes",
      "cookTime": "10 minutes",
      "servings": 2
    },
    {
      "id": 3,
      "name": "Chocolate Chip Cookies",
      "ingredients": [
        "125g butter, softened",
        "100g sugar",
        "75g brown sugar",
        "1 egg",
        "1 tsp vanilla extract",
        "200g flour",
        "1/2 tsp baking soda",
        "150g chocolate chips"
      ],
      "instructions": [
        "Preheat the oven to 180°C (350°F).",
        "Cream the butter and sugars together until light and fluffy.",
        "Beat in the egg and vanilla extract.",
        "Mix in the flour and baking soda until combined.",
        "Fold in the chocolate chips.",
        "Drop spoonfuls of dough onto a baking sheet.",
        "Bake for 10-12 minutes or until golden brown.",
        "Allow to cool on a wire rack."
      ],
      "prepTime": "15 minutes",
      "cookTime": "12 minutes",
      "servings": 24
    }
  ]
}`;
  res.send(resipes);
  console.log('Received a GET request at /home');
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
