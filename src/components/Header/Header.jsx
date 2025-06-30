import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return( 
            <div>
            <header className='header1'>
                <nav>
                    <a className='navbar'>Vivekanand College</a>
                    <Link to={"/Home"} className='nav'>Home</Link>
                    <Link to={"/About"}className='nav'>About</Link>
                    <Link to={"/Contact"}className='nav'>Contact</Link>
                    <Link to={"/Courses"}className='nav'>Courses</Link>
                    <Link to={"/NotFound"}className='nav'>NotFound</Link>
                    <Link to={"/Admission"}className='navitem'>Apply Now </Link>

        
                </nav>
        
            </header>
        </div>
    )  
}

export default Header;