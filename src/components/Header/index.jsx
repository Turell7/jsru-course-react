import { TooggleThemeButton } from "../ToggleThemeButton"
import { useUser } from "../UserContext"
import { Button } from "../Button"

export const Header = () => {
    const { user, login, logout} = useUser()

    return <header>
        <TooggleThemeButton/>
        {user ? (
        <>
          <Button onClick={logout}>Выйти</Button>
          <span>{user.name}</span>
        </>
      ) : (
        <Button onClick={() => login('Иван')}>Войти</Button>
      )}
    </header>
}