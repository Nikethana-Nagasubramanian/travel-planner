export default function Main() {
    return(
        <main>
            <form className = "add-ingredient-form">
                <input 
                type="text"
                placeholder="Oregano, Cilantro, Spices.. add anything!"
                aria-label="Add ingredient"/>
                <button>Add Ingredient</button>
            </form>
        </main>
    )
}