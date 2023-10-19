import { useLoaderData } from "react-router-dom";
import Discount from "../../components/Discount";
import Featured from "../../components/Featured";
import Banner from "../../shared/Banner";
import BrandCard from "../../components/BrandCard";
import Brands from "../../components/Brands";
import TitleHelmet from "../../components/TitleHelmet";

const Home = () => {
    const products = useLoaderData();

    return (
        <div>
            <TitleHelmet title='ElecTech || BrandShop'></TitleHelmet>
            <h3 className="text-3xl">Home</h3>
            <Banner></Banner>
            <Brands></Brands>
            {
                products.map(product => <BrandCard key={product._id} product={product}></BrandCard>)
            }
            <Featured></Featured>
            <Discount></Discount>
        </div>
    );
};

export default Home;