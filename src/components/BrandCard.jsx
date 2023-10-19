import PropTypes from "prop-types"

const BrandCard = ({ product, /* products, setproducts */ }) => {
    const {
        name,
        brandName,
        type,
        price,
        shortDescription,
        rating,
        image, } = product;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={`image of ${name}`} />
            </figure>
            <div className="flex justify-between border-8 w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{brandName}</p>
                    <p>{type}</p>
                    <p>{price}</p>
                    <p>{shortDescription}</p>
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    product: PropTypes.shape({
        brandName: PropTypes.any,
        image: PropTypes.any,
        name: PropTypes.any,
        price: PropTypes.any,
        rating: PropTypes.any,
        shortDescription: PropTypes.any,
        type: PropTypes.any
    }),
    productss: PropTypes.any,
    setproducts: PropTypes.any
}

export default BrandCard;