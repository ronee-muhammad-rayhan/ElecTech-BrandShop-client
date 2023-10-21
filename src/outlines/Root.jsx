import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
// import Navbar2 from "../shared/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Navbar2></Navbar2> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;