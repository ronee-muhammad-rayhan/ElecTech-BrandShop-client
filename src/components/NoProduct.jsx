
const NoProduct = () => {
    return (
        <div className="flex justify-center items-center w-full mx-auto">
            <div className="text-red-500 py-8">
                <h3 className="text-3xl font-bold text-center">Sorry...</h3>
                <h3 className="text-3xl font-bold text-center my-6">No product available right now</h3>
            </div>
        </div>
    );
};

export default NoProduct;