import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = ()=> {

    const user = useContext(AuthContext)

    console.log(user)

    return(
        <header className="container mx-auto">
            <nav className="flex justify-between items-center py-4">
                <Link to={'/'}>
                    <h2 className="font-worksanse font-bold text-3xl text-gray-700">Read <span className="text-[#23BE0A]">Track</span></h2>
                </Link>
                <ul className="flex justify-start items-center gap-4">
                    <li>
                        <NavLink className="font-normal text-gray-500 font-worksanse text-xl">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/listedBooks'} className="font-normal text-gray-500 font-worksanse text-xl">Listed Books</NavLink>
                    </li>
                    <li>
                        <NavLink className="font-normal text-gray-500 font-worksanse text-xl">Pages to Read</NavLink>
                    </li>
                </ul>
                <ul className="flex justify-end items-center gap-4">
                    <li>
                        <Link to={"/login"}>
                            <button  className="font-normal text-white font-worksanse text-xl bg-[#23BE0A] rounded py-2 px-4 cursor-pointer">Sign In</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/registration"}>
                            <button className="font-normal text-white font-worksanse text-xl bg-[#59C6D2] rounded py-2 px-4 cursor-pointer">Sign Up</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header