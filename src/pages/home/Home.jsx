import { Outlet } from "react-router-dom";
import NavBar from "../../shared_pages/nav_bar/NavBar";
import Footer from "../../shared_pages/footer/Footer";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;