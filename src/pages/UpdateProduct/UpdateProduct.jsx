import Swal from "sweetalert2";
import TitleHelmet from "../../components/TitleHelmet";
// import { /* useEffect, */ useState } from "react";
import { useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";
const UpdateProduct = () => {
    const earlierProduct = useLoaderData();
    // let earlierProductLoaded = useLoaderData();
    // const [earlierProduct, setEarlierProduct] = useState(earlierProductLoaded);
    // console.log('OldData', earlierProduct);
    // const [earlierProduct, /* setEarlierProduct */] = useState(null);



    // useEffect(() => {
    //     fetch('https://b8a10-brandshop-server.vercel.app/products/:id')
    //         .then(res => res.json())
    //         .then(data => {
    //             setEarlierProduct(data);
    //         })
    // }, []);

    // useEffect(() => {
    //     setEarlierProduct(earlierProductLoaded);
    // }, []);

    const handleUpdateProduct = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brandNameAnyCase = form.brandName.value;
        const brandName = brandNameAnyCase.toLowerCase().trim();
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const updatedProduct = {
            name,
            brandName,
            type,
            price,
            shortDescription,
            rating,
            image,
        };

        console.log(updatedProduct);

        // send data to the server
        fetch(
            `https://b8a10-brandshop-server.vercel.app/products/${earlierProduct._id}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Product updated successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });

                }
            });

        // form.reset();
    };

    return (
        <div className="bg-[#F4F3F0] md:p-24">
            <TitleHelmet title='ElecTech BrandShop | UpdateProduct'></TitleHelmet>
            <h2 className="text-3xl font-extrabold text-center">Add a Product</h2>
            <form onSubmit={handleUpdateProduct}>
                {/* form name and brandName row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="name"
                                defaultValue={earlierProduct.name}
                                placeholder="Product Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="brandName"
                                defaultValue={earlierProduct.brandName}
                                placeholder="Brand Name such as Apple, Samsung, Sony, Google, Intel, Walton etc."
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                {/* form type and price row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="type"
                                defaultValue={earlierProduct.type}
                                placeholder="Type e.g. Phone, Computer, HeadPhone etc."
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="price"
                                defaultValue={earlierProduct.price}
                                placeholder="Price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                {/* form shortDescription and rating row */}
                <div className="mb-8 md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="shortDescription"
                                defaultValue={earlierProduct.shortDescription}
                                placeholder="Short Description"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="rating"
                                defaultValue={earlierProduct.rating}
                                placeholder="Rating"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                {/* form image row */}
                <div className="mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">ImageURL</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="image"
                                defaultValue={earlierProduct.image}
                                placeholder="Image URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <input
                    type="submit"
                    value="Update Product"
                    className="btn btn-block btn-primary"
                />
            </form>
        </div>
    );
};

export default UpdateProduct;