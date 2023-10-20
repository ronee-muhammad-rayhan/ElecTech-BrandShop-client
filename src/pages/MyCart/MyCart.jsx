import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";

const MyCart = () => {
    const allProducts = useLoaderData();
    const [cartProducts, setCartProducts] = useState([]);
    // let productArray = [];
    useEffect(() => {
        let productArr = [];
        fetch(`https://b8a10-brandshop-server-i1sw9yjob-roneemrayhans-projects.vercel.app/cart-products`)
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full mx-auto">
                {
                    cartProducts.map(product => <CartCard key={product._id} product={product} setCartProducts={setCartProducts} cartProducts={cartProducts}></CartCard>)
                }
            </div>

        </div>
    );
};

export default MyCart;