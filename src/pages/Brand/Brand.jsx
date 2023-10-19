import { useLoaderData } from "react-router-dom";
import BrandCard from "../../components/BrandCard";

const Brand = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <h3 className="text-3xl">Brand Page</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
                {
                    products.map(product => <BrandCard key={product._id} product={product}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brand;