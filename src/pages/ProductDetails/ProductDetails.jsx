import { useLoaderData } from "react-router-dom";
import TitleHelmet from "../../components/TitleHelmet";

const ProductDetails = () => {
    const product = useLoaderData();
    const {
        name,
        brandName,
        type,
        price,
        rating,
        shortDescription,
        image, } = product;
    return (
        <div>
            <TitleHelmet title='ElecTech BrandShop | ProductDetails'></TitleHelmet>
            <h3 className="text-3xl">Product Details Page</h3>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt={`image of ${name}`} />
                </figure>
                <div className="border-8 pr-4">
                    <div>
                        <h2 className="card-title">Name: {name}</h2>
                        <p>{brandName}</p>
                        <p>{type}</p>
                        <p>{price}</p>
                        <p>{shortDescription}</p>
                        <p>{rating}</p>
                        <div className="rating rating-lg rating-half">
                            <input type="radio" name="rating-10" className="rating-hidden" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>
                        <button className="btn glass">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;