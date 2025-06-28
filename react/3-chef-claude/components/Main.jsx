
import React from "react";
import Ingredients from "./Ingredients";
import SuggestedRecipe from "./SuggestedRecipe";
import { getRecipeFromMistral } from "../ai";

export default function Main() {

    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");
    const recipeSection = React.useRef(null);

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [recipe]);

    async function getRecipe() {
        const recipe = await getRecipeFromMistral(ingredients);
        setRecipe(recipe);
    }

    function addIngredient(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const { ingredient } = Object.fromEntries(formData);
        if (ingredient) {
            setIngredients(prevIngredients => [...prevIngredients, ingredient]);
            form.reset();
        }
    }

    return (
        <div className="main">
            <form className="form" onSubmit={addIngredient}>
                <input type="text" placeholder="e.g. oregano" name="ingredient" />
                <button type="submit">+ Add ingredient</button>
            </form>

            {ingredients.length > 0 && <Ingredients ingredients={ingredients} getRecipe={getRecipe} ref={recipeSection} />}
            {recipe && <SuggestedRecipe recipe={recipe} />}
        </div>
    );
}