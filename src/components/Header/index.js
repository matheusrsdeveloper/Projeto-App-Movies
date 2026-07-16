import { Link } from 'react-router-dom';
import Style from './Header.module.css';

function Header() {
    return (
        <header className={Style.header}>
            <Link to="/">
                <span>PobreFlix</span>
            </Link>
            
            <nav>
                <Link to="/">Home </Link>
                <Link to="/Search">Pesquisar</Link>
                <Link to="/favorites">Favoritos</Link>

            </nav>
            
        </header>
    );
}   

export default Header;