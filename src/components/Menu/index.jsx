import { MenuItem } from "../MenuItem"

export const Menu = ({ menu }) => {
    return (
        <>
            <h3>Menu:</h3>
            <ul>
            {Boolean(menu?.length) && menu.map((item) => (
                <MenuItem key={item.id} item={item}/>
            ))}
            </ul>
        </>
    )
}