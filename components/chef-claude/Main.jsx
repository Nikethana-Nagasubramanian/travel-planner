import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../../src/chef-claude/ai"

export default function Main() {

    const [isLoading, setIsLoading] = React.useState(false)
    const [ingredients, setIngredients] = React.useState([])
    const [aiRecipe, setAiRecipe] = React.useState()

    const recipeSection = React.useRef(null)

    React.useEffect( () => {
        if (aiRecipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [aiRecipe])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients( (prevIngredientList) =>
            [...prevIngredientList, newIngredient ]
        )
    }

    async function getRecipe(event) {
        setIsLoading(true)
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients);
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
            <p>Add minimum 3 ingredients and add them one by one</p>
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
                    ref = {recipeSection}
                    ingredients={ingredients} 
                    getRecipe={getRecipe}
                    isLoading={isLoading}
                />
            }
            { aiRecipe && <ClaudeRecipe recipe={aiRecipe}/>}
        </main>
    )
}