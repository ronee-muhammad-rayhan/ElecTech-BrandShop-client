import Brand from "../../components/Brand";
import Discount from "../../components/Discount";
import Featured from "../../components/Featured";
import Banner from "../../shared/Banner";

const Home = () => {
    return (
        <div>
            <h3 className="text-3xl">Home</h3>
            <Banner></Banner>
            <Brand></Brand>
            <Featured></Featured>
            <Discount></Discount>
        </div>
    );
};

export default Home;