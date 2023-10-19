
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const CartCard = ({ product }) => {
    const {
        name,
        brandName,
        type,
        price,
        rating,
        image, } = product;
    return (
        <div>
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
                        <div className="flex justify-around pb-4">
                            <Link to={`/product-details/${product._id}`}><button className="btn glass">Details</button></Link>
                            <button className="btn glass">Delete from Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CartCard.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.any,
        brandName: PropTypes.any,
        image: PropTypes.any,
        name: PropTypes.any,
        price: PropTypes.any,
        rating: PropTypes.any,
        type: PropTypes.any
    })
}

export default CartCard;