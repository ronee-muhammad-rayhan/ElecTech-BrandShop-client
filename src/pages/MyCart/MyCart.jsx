import { useEffect } from "react";

const MyCart = () => {
    useEffect(() => {
        fetch(`http://localhost:5003/cart-products`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, []);
    return (
        <div>
            <h3 className="text-3xl">My Cart Page</h3>
        </div>
    );
};

export default MyCart;