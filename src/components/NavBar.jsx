import { Outlet, Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <nav className='flex justify-between p-4 m-2 text-xl'>
                <Link to="/">
                    <h2 className='text-red-950 underline font-semibold p-1 rounded hover:bg-slate-100/40'>Home</h2>
                </Link>
                <Link to='/create-player'>
                    <h2 className='text-red-950 underline font-semibold p-1 rounded hover:bg-slate-100/40'>Create a Player</h2>
                </Link>
                <Link to='/squad-info'>
                    <h2 className='text-red-950 underline font-semibold p-1 rounded hover:bg-slate-100/40'>Squad Info</h2>
                </Link>
            </nav>
            <Outlet />
        </div>
    );
}
export default NavBar;
