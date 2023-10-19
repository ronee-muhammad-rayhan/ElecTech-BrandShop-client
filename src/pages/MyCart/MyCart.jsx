import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const allProducts = useLoaderData();
    const [cartProducts, setCartProducts] = useState([]);
    // let productArray = [];
    useEffect(() => {
        let productArr = [];
        fetch(`http://localhost:5003/cart-products`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(allProducts);


                allProducts.forEach(product => {
                    data.forEach(cartProduct => {
                        if (product._id === cartProduct.selectedId) {
                            productArr.push(product);
                        }
                    })
                });
                setCartProducts(productArr);

                /* for (let i = 0; i < data.length; i++) {
                    let foundProduct = allProducts.find(product => product._id === data[i].selectedId);
                    console.log(foundProduct);
                    if (foundProduct) {
                        // [...productArray, foundProduct];
                        setCartProducts([...cartProducts, foundProduct]);
                    }
                } */
                // console.log(productArray);

                // setCartProducts(productArray);

                // console.log('cart-id', data.selectedId, 'all-id:');
                // const filteredProducts = allProducts.filter(product => data.selectedId === product._id);
                // console.log(filteredProducts);
                // setCartProducts(filteredProducts);
            })
    }, [allProducts]);
    console.log(cartProducts);
    return (
        <div>
            <h3 className="text-3xl">My Cart Page:{cartProducts?.length}</h3>
        </div>
    );
};

export default MyCart;