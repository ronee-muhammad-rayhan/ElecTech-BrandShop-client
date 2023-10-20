import { useLoaderData } from "react-router-dom";
import BrandCard from "../../components/BrandCard";

const Brand = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            {/* <h3 className="text-3xl">Brand Page</h3> */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={`https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg`} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
                {
                    products.map(product => <BrandCard key={product._id} product={product}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brand;