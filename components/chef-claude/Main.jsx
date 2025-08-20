import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../../src/chef-claude/ai"

export default function Main() {

    const [recipeShown, setRecipeShown] = React.useState(false)

    const [ingredients, setIngredients] = React.useState([])

    const [aiRecipe, setAiRecipe] = React.useState()

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients( (prevIngredientList) =>
            [...prevIngredientList, newIngredient ]
        )
    }
    async function getRecipe(event) {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setAiRecipe(recipeMarkdown)
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
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>
            }
            {aiRecipe && <ClaudeRecipe recipe={aiRecipe}/>}
            
        </main>
    )
}