import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const BrandCard = ({ product, idx /* products, setproducts */ }) => {
    const {
        _id,
        name,
        brandName,
        type,
        price,
        rating,
        image, } = product;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={`image of ${name}`} />
            </figure>
            <div className="pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Brand: {brandName}</p>
                    <p>Type: {type}</p>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="rating rating-lg rating-half">
                        <input type="radio" name={_id + idx} className="rating-hidden" />
                        <input type="radio" name={_id + idx + 1} className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name={_id + idx + 2} className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name={_id + idx + 3} className="bg-green-500 mask mask-star-2 mask-half-1" defaultChecked />
                        <input type="radio" name={_id + idx + 4} className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name={_id + idx + 5} className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name={_id + idx + 6} className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name={_id + idx + 7} className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name={_id + idx + 8} className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name={_id + idx + 9} className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name={_id + idx + 10} className="bg-green-500 mask mask-star-2 mask-half-2" />
                    </div>
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
    idx: PropTypes.number,
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
    productss: PropTypes.any,
    setproducts: PropTypes.any
}

export default BrandCard;