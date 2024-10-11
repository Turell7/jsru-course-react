import { MenuItem } from "../MenuItem"

export const Menu = ({ ids }) => {
    return (
        <>
            <h3>Menu:</h3>
            <ul>
            {Boolean(ids?.length) && ids.map((id) => (
                <MenuItem key={id} id={id}/>
            ))}
            </ul>
        </>
    )
}