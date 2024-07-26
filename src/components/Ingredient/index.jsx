export const Ingredient = ({ ingredients }) => {

    return (
        <ul>
            { Boolean(ingredients?.length) && ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
        </ul>
    )
}