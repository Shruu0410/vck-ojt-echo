import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return( 
            <div>
            <header className='header1'>
                <nav>
                    <a className='navbar'>Vivekanand College</a>
                    <Link to={"/home"} className='nav'>Home</Link>
                    <Link to={"/about"}className='nav'>About</Link>
                    <Link to={"/contact"}className='nav'>Contact</Link>
                    <Link to={"/courses"}className='nav'>courses</Link>
                    <Link to={"/admission"}className='navitem'>Apply Now </Link>
                    <Link to={"/notfound"}className='nav'>notFound</Link>

        
                </nav>
        
            </header>
        </div>
    )  
}

export default Header;