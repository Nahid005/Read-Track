import { createContext } from "react";
import auth from "../utility/firebaseInit";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // const googleProvider = new GoogleAuthProvider();
    // const gitHubProvider = new GithubAuthProvider();

    // const handleLoginWithGoogle = (e) => {
    //     e.preventDefault();

    //     signInWithPopup(auth, googleProvider)
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }


    // const handleLoginWithGithub = (e)=> {
    //     e.preventDefault();

    //     signInWithPopup(auth, gitHubProvider)
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }



    const userInfo = {
        name: "Nahid Hassan",
        creatUser,
        loginUser,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;