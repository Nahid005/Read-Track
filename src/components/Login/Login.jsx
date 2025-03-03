import { Link } from "react-router-dom"
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Login = ()=> {

    const {loginUser} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.email.value;
        const isRemember = e.target.remember.value;

        loginUser(email, password)
        .then(userCredentails => {
            console.log(userCredentails.user);
        })
        .catch(error => {
            console.log(error.message)
        }) 
    }



    return (
        <div className="max-w-lg min-w-lg bg-gray-200 mx-auto p-8 rounded shadow">
            <h4 className="text-center font-bold font-playfair text-2xl text-gray-700 m-0">Sign In Your Account</h4>
            <form className="mt-8" onSubmit={handleLogin}>
                <div className="flex flex-col">
                    <label className="font-worksanse text-gray-600 text-base" htmlFor="email">Email</label>
                    <input className="border border-gray-300 p-2 rounded font-worksanse my-2 " type="email" name="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="flex flex-col">
                    <label className="font-worksanse text-gray-600 text-base" htmlFor="password">Password</label>
                    <input className="border border-gray-300 p-2 rounded font-worksanse my-2 " type="password" name="password" id="password" placeholder="Enter your password" required />
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <input className="border border-gray-300 p-2 rounded font-worksanse my-2 " type="checkbox" name="remember" id="remember" required />
                    <label className="font-worksanse text-gray-600 text-base" htmlFor="remember">Remember Me</label>
                </div>
                <div className="text-center mt-8">
                    <button type="submit" className="font-normal text-white font-worksanse text-xl bg-[#23BE0A] rounded py-2 w-full cursor-pointer">Sign In</button>
                </div>
                <div className="flex gap-2 my-4 justify-center">
                    <button className="bg-gray-300 p-2 rounded cursor-pointer"><FaGoogle /></button>
                    <button className="bg-gray-300 p-2 rounded cursor-pointer"><FaXTwitter /></button>
                    <button className="bg-gray-300 p-2 rounded cursor-pointer"><FaGithub /></button>
                </div>
                <p className="text-center mt-4">You have create an account? <Link to={"/registration"} className="underline">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default Login