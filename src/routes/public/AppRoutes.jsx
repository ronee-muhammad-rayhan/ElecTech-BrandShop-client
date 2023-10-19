import Root from "../../outlines/Root";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFoundPage/NotFound";
import Register from "../../pages/Register/Register";
import {
    createBrowserRouter,
} from "react-router-dom";
import PrivateRoute from "../protected/PrivateRoutes";
import AddProduct from "../../pages/AddProduct/AddProduct";
import MyCart from "../../pages/MyCart/MyCart";
import Brand from "../../pages/Brand/Brand";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5003/products')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-product',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/brands/:brand',
                element: <Brand></Brand>,
                loader: ({ params }) => fetch(`http://localhost:5003/brands/${params.brand}`)
            },
            {
                path: '/product-details/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5003/product-details/${params.id}`)
            },
            {
                path: '/my-cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
        ],
    },
]);

export default router;