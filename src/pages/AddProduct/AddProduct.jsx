import Swal from "sweetalert2";
import TitleHelmet from "../../components/TitleHelmet";
const AddProduct = () => {
    const handleAddProduct = (event) => {
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

        const newProduct = {
            name,
            brandName,
            type,
            price,
            shortDescription,
            rating,
            image,
        };

        console.log(newProduct);

        // send data to the server
        fetch(
            "https://b8a10-brandshop-server.vercel.app/products",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newProduct),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Product added successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });

        form.reset();
    };

    return (
        <div className="bg-[#F4F3F0] md:p-24">
            <TitleHelmet title='ElecTech BrandShop | AddProduct'></TitleHelmet>
            <h2 className="text-3xl font-extrabold text-center">Add a Product</h2>
            <form onSubmit={handleAddProduct}>
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
                                placeholder="Image URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <input
                    type="submit"
                    value="Add Product"
                    className="btn btn-block btn-primary"
                />
            </form>
        </div>
    );
};

export default AddProduct;