import { useLoaderData } from "react-router-dom";
import BrandCard from "../../components/BrandCard";

const AllProducts = () => {
    const products = useLoaderData();
    return (
        <div>
            <div id="products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="flip-left">
                {
                    products.map(product => <BrandCard key={product._id} product={product}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;