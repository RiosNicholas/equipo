import { Outlet, Link } from 'react-router-dom'
const NavBar = () => {
    return (
       <>
            <nav className='nav-bar'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/player-creation'>Player Creation</Link>                    
                    </li>
                    <li>
                        <Link to='/squad-info'>Squad Info</Link>                    
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}
export default NavBar;