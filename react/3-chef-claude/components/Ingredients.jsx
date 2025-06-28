export default function Ingredients(props) {
    return (
        <section>
            <h2>Ingredients on hand:</h2>

            <ul className="ingredients">
                {props.ingredients.map((ingredient, key) => <li key={key}>{ingredient}</li>)}
            </ul>

            {props.ingredients.length > 3 &&

                <div className="get-a-recipe">
                    <div className="text" ref={props.ref}>
                        <h3>Ready for a recipe ?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe</button>
                </div>
            }
        </section>
    );
}