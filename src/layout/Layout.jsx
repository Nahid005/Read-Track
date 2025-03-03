import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const Layout = ()=> {
    return (
        <>
            <Header></Header>
            <main className="min-h-screen font-worksanse">
                <div className="container mx-auto">
                    <Outlet></Outlet>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout