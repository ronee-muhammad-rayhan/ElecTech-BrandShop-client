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
        <div className="w-full mx-auto text-center flex justify-center flex-col">
            <h3 className="text-3xl font-bold py-6">You have added {cartProducts?.length} Products in the Cart</h3>
            <div className="grid justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 w-full mx-1 md:mx-auto px-2 md:px-4 lg:px-6 border-red-400">
                {
                    cartProducts.map(product => <CartCard key={product._id} product={product} setCartProducts={setCartProducts} cartProducts={cartProducts}></CartCard>)
                }
            </div>

        </div>
    );
};

export default MyCart;