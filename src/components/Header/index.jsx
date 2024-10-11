import { TooggleThemeButton } from "../ToggleThemeButton"
import { useUser } from "../UserContext/hooks"
import { Button } from "../Button"

export const Header = () => {
    const { isAuthorized, userName, login, logout} = useUser()

    return <header>
        <TooggleThemeButton/>
        {isAuthorized ? (
        <>
          <Button onClick={logout}>Logout</Button>
          <span>{userName}</span>
        </>
      ) : (
        <Button onClick={() => login('Ivan')}>Login</Button>
      )}
    </header>
}