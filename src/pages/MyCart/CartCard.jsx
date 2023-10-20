
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const CartCard = ({ product, setCartProducts, cartProducts }) => {
    const {
        _id,
        name,
        brandName,
        type,
        price,
        rating,
        image, } = product;
    const handleDelete = (id) => {
        fetch(`https://b8a10-brandshop-server-i1sw9yjob-roneemrayhans-projects.vercel.app/cart-products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remainingCartProducts = cartProducts.filter(product => product._id !== _id);
                setCartProducts(remainingCartProducts);
            });
    }
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
                        <div className="flex flex-col items-center gap-3 justify-around pb-4">
                            <Link to={`/product-details/${product._id}`}><button className="btn glass">View Details</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn glass">Delete from Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CartCard.propTypes = {
    cartProducts: PropTypes.shape({
        filter: PropTypes.func
    }),
    product: PropTypes.shape({
        _id: PropTypes.any,
        allProducts: PropTypes.any,
        brandName: PropTypes.any,
        image: PropTypes.any,
        name: PropTypes.any,
        price: PropTypes.any,
        rating: PropTypes.any,
        type: PropTypes.any
    }),
    setCartProducts: PropTypes.func
}

export default CartCard;