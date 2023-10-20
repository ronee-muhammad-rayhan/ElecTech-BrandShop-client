import { Link, useLoaderData } from "react-router-dom";
import TitleHelmet from "../../components/TitleHelmet";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const product = useLoaderData();
    const {
        _id,
        name,
        brandName,
        type,
        price,
        rating,
        shortDescription,
        image, } = product;

    const handleAddToCart = (id) => {
        const desiredId = {
            selectedId: id,
        }
        fetch("https://b8a10-brandshop-server-i1sw9yjob-roneemrayhans-projects.vercel.app/cart-products",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(desiredId),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Product added to the cart successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });
    }
    return (
        <div>
            <TitleHelmet title='ElecTech BrandShop | ProductDetails'></TitleHelmet>
            <h3 className="text-3xl">Product Details Page</h3>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt={`image of ${name}`} />
                </figure>
                <div className="border-8 pr-4">
                    <div className="text-center">
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
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" defaultChecked />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>
                        <Link onClick={() => handleAddToCart(_id)}><button className="btn glass block mx-auto">Add to Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;