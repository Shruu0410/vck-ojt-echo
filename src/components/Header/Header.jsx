import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <div>
<header>
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">Abouts</Link>
        <Link to="/contact">Contact</Link>

        
    </nav>
</header>


        </div>
    )
}

export default Header;