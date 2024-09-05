import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
        <header id="cabecalho">
            <h1>Portfólio</h1>
            <nav>
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        S<Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}