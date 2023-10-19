import { useLoaderData } from "react-router-dom";
import BrandCard from "../../components/BrandCard";

const Brand = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <h3 className="text-3xl">Brand Page</h3>
            {
                products.map(product => <BrandCard key={product._id} product={product}></BrandCard>)
            }
        </div>
    );
};

export default Brand;