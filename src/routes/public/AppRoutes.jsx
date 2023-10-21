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
import UpdateProduct from "../../pages/UpdateProduct/UpdateProduct";
import UpdateProfile from "../../pages/UpdateProfile/UpdateProfile";
import AllProducts from "../../pages/AllProducts/AllProducts";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://b8a10-brandshop-server-i1sw9yjob-roneemrayhans-projects.vercel.app/products')
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
                path: `/update-product/:id`,
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-i1sw9yjob-roneemrayhans-projects.vercel.app/product-details/${params.id}`)
            },
            {
                path: '/brands/:brand',
                element: <Brand></Brand>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-i1sw9yjob-roneemrayhans-projects.vercel.app/brands/${params.brand}`)
            },
            {
                path: '/product-details/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-i1sw9yjob-roneemrayhans-projects.vercel.app/product-details/${params.id}`)
            },
            {
                path: '/all-products',
                element: <AllProducts></AllProducts>,
                loader: () => fetch(`https://b8a10-brandshop-server-i1sw9yjob-roneemrayhans-projects.vercel.app/products`)
            },
            {
                path: '/my-cart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch(`https://b8a10-brandshop-server-i1sw9yjob-roneemrayhans-projects.vercel.app/products`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
        ],
    },
]);

export default router;