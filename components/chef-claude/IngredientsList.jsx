import React from "react"
export default function IngredientsList(props) {
    
    const ingredientsList = props.ingredients.map((ingredient) => 
        <li className="allIngredients" key={ingredient}>{ingredient}</li>  
    )
    console.log("Loading indicator : ", props.isLoading)
    return (
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>
                {(props.ingredients.length > 2) && 
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={props.getRecipe} disabled={props.isLoading}>
                            {props.isLoading ? "Getting your recipe..." : "Get a recipe"}
                        </button>
                    </div> }
        </section>
    )
}