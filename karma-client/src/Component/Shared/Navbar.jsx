import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/UserProvider";


const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const handleLogout = () => {
        LogOut()
    }
    return (
        <div>
            <header className=" text-white bg-gray-800 py-2">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <a className="block text-teal-600 dark:text-teal-200" href="/">
                                <span className="sr-only">Home</span>
                                <img src="https://i.ibb.co/Jkfsw9c/app-1.png" alt="logo" />
                            </a>
                        </div>
                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="/">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="/">
                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="/">
                                            History
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="/">
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="/">
                                            Projects
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75" href="/">
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="flex items-center  gap-4">
                                <div className="sm:flex  sm:gap-4">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full border">
                                                <img src={user?.photoURL} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-white   rounded-box w-52">
                                            <li>
                                                <Link to='/dashboard' className="justify-between hover:text-gray-400">
                                                    Dashboard
                                                </Link>
                                            </li>
                                            {user?.email ? <li onClick={handleLogout}> <Link className='hover:text-gray-400' to='/'> Logout</Link></li> :
                                                <> <li><Link className='hover:text-gray-400' to='/login'> Login</Link></li>
                                                    <li><Link className='hover:text-gray-400' to='/register'> Register</Link></li></>}

                                        </ul>
                                    </div>

                                    {/*   {user.email ? <Link className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500" to="/login">
                                        Login
                                    </Link> :

                                        <div className="hidden sm:flex">
                                            <Link className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75" to="/register">
                                                Register
                                            </Link>
                                        </div>} */}
                                </div>
                                <div className="block md:hidden">
                                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </header >


        </div >
    );
};

export default Navbar;