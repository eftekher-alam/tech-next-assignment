import { Outlet } from "react-router-dom";
import NavBar from './../shared_pages/nav_bar/NavBar';
import Footer from './../shared_pages/footer/Footer';


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-screen pt-20">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;