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
        <div className="py-10 px-4">
            <TitleHelmet title='ElecTech BrandShop | ProductDetails'></TitleHelmet>
            <div className="card bg-base-100 shadow-xl">
                <figure className="text-center">
                    <img src={image} alt={`image of ${name}`} />
                </figure>
                <div className="pr-4">
                    <div className="text-center py-8">
                        <h2 className="font-black">Name: {name}</h2>
                        <p>Brand: {brandName}</p>
                        <p>Type: {type}</p>
                        <p>Price: {price}</p>
                        <p>Short Description: {shortDescription}</p>
                        <p className="pb-6">Rating: {rating}</p>
                        <Link className="pb-8 pt-4" onClick={() => handleAddToCart(_id)}><button className="btn glass block mx-auto py-4 btn-primary bg-purple-500">Add to Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;