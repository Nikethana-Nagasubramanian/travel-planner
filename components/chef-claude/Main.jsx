import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../../src/chef-claude/ai"

export default function Main() {

    const [isLoading, setIsLoading] = React.useState(false)

    const [ingredients, setIngredients] = React.useState(["Ginger", "Garlic", "Kidney beans", "Bay leaf"])

    const [aiRecipe, setAiRecipe] = React.useState()

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients( (prevIngredientList) =>
            [...prevIngredientList, newIngredient ]
        )
    }
    async function getRecipe(event) {
        setIsLoading(true)
        try {
            console.log('Getting recipe for ingredients:', ingredients); // Debug log
            const recipeMarkdown = await getRecipeFromMistral(ingredients);
            console.log('Recipe received:', recipeMarkdown); // Debug log
            setAiRecipe(recipeMarkdown)
        } catch (error) {
            console.error('Error getting recipe:', error);
            alert('Failed to get recipe. Check console for details.'); // Show error to user
        } finally {
            setIsLoading(false)
        }
    }
    
    return(
        <main>
            <form action={addIngredient} className = "add-ingredient-form">
                <input 
                type="text"
                placeholder="Oregano, Cilantro,... add anything!"
                aria-label="Add ingredient"
                name="ingredient"
                required/>
                <button>Add Ingredient</button>
            </form>
            {(ingredients.length > 0) && 
                <IngredientsList 
                    ingredients={ingredients} 
                    getRecipe={getRecipe}
                    isLoading={isLoading}
                />
            }
            { aiRecipe && <ClaudeRecipe recipe={aiRecipe}/>}
        </main>
    )
}