import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Registration = ()=> {

    const {creatUser} = useContext(AuthContext)

    const handleRegistration = (e)=> {
        e.preventDefault();

        const name = e.target.name.value;
        const images = e.target.images.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        
        creatUser(email, password)
        .then((userCredential)=> {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        })

        // console.log(name, images, email, password)
    }


    return (
        <div className="max-w-lg min-w-lg bg-gray-200 mx-auto p-8 rounded shadow">
            <h4 className="text-center font-bold font-playfair text-2xl text-gray-700 m-0">Create an Account</h4>
            <form className="mt-8" onSubmit={handleRegistration}>
                <div className="flex flex-col">
                    <label className="font-worksanse text-gray-600 text-base" htmlFor="name">Name</label>
                    <input className="border border-gray-300 p-2 rounded font-worksanse my-2 " type="text" name="name" id="name" placeholder="Enter your name" required />
                </div>
                <div className="flex flex-col">
                    <label className="font-worksanse text-gray-600 text-base" htmlFor="images">Images URL</label>
                    <input className="border border-gray-300 p-2 rounded font-worksanse my-2 " type="url" name="images" id="images" placeholder="Enter your images URL" required />
                </div>
                <div className="flex flex-col">
                    <label className="font-worksanse text-gray-600 text-base" htmlFor="email">Email</label>
                    <input className="border border-gray-300 p-2 rounded font-worksanse my-2 " type="email" name="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="flex flex-col">
                    <label className="font-worksanse text-gray-600 text-base" htmlFor="password">Password</label>
                    <input className="border border-gray-300 p-2 rounded font-worksanse my-2 " type="password" name="password" id="password" placeholder="Enter your password" required />
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <input className="border border-gray-300 p-2 rounded font-worksanse my-2 " type="checkbox" name="terms" id="terms" required />
                    <label className="font-worksanse text-gray-600 text-base" htmlFor="terms">Terms and Condition</label>
                </div>
                <div className="text-center mt-8">
                    <button type="submit" className="font-normal text-white font-worksanse text-xl bg-[#23BE0A] rounded py-2 w-full cursor-pointer">Sign Up</button>
                </div>
                <p className="text-center mt-4">You have already an account? <Link to={"/login"} className="underline">Sign In</Link></p>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Registration;