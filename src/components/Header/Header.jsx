import { Link } from "react-router-dom";

const Header = ()=> {
    return(
        <header>
            <nav className="flex justify-between items-center py-4">
                <div className="">
                    <h2 className="font-worksanse font-bold text-3xl text-gray-700">Read <span className="text-[#23BE0A]">Track</span></h2>
                </div>
                <ul className="flex justify-start items-center gap-4">
                    <li>
                        <Link className="font-normal text-gray-500 font-worksanse text-xl">Home</Link>
                    </li>
                    <li>
                        <Link className="font-normal text-gray-500 font-worksanse text-xl">Listed Books</Link>
                    </li>
                    <li>
                        <Link className="font-normal text-gray-500 font-worksanse text-xl">Pages to Read</Link>
                    </li>
                </ul>
                <ul className="flex justify-end items-center gap-4">
                    <li>
                        <button className="font-normal text-white font-worksanse text-xl bg-[#23BE0A] rounded py-2 px-4 cursor-pointer">Sign In</button>
                    </li>
                    <li>
                        <button className="font-normal text-white font-worksanse text-xl bg-[#59C6D2] rounded py-2 px-4 cursor-pointer">Sign Up</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header