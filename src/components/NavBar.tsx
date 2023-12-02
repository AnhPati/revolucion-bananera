import { Logo } from './ui/Logo'
import { Button } from './ui/Button'
import { BsPersonCircle } from 'react-icons/bs'

const NavBar = ({ username }) => {

    return (
        <nav>
            <Logo />
            <div>
                <div>
                    <p>Hey, {username}</p>
                    <Button text={`Déconnexion`} url={'/'} />
                </div>
                <div>
                    <BsPersonCircle />
                </div>
            </div>
        </nav>
    )
}

export default NavBar