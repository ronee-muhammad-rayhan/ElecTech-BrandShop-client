import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const BrandCard = ({ product }) => {
    const {
        name,
        brandName,
        type,
        price,
        rating,
        image,
    } = product;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={`image of ${name}`} />
            </figure>
            <div className="px-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Brand: {brandName}</p>
                    <p>Type: {type}</p>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="flex justify-around pb-4">
                        <Link to={`/product-details/${product._id}`}><button className="btn glass">Details</button></Link>
                        <Link to={`/update-product/${product._id}`}><button className="btn glass">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.any,
        brandName: PropTypes.any,
        image: PropTypes.any,
        name: PropTypes.any,
        price: PropTypes.any,
        rating: PropTypes.any,
        shortDescription: PropTypes.any,
        type: PropTypes.any
    }),
}

export default BrandCard;