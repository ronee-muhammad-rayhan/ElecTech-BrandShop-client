import { useLoaderData } from "react-router-dom";

const Brand = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <h3 className="text-3xl">Brand Page</h3>
            {
                products.map(product => <p key={product._id}>{product.name}</p>)
            }
        </div>
    );
};

export default Brand;