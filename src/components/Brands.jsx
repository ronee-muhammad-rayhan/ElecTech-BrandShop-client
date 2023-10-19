import { Link } from "react-router-dom";

const Brands = () => {
    const brands = [
        { id: 1, name: 'apple', imageURL: '/apple.svg' },
        { id: 2, name: 'google', imageURL: '/google.png' },
        { id: 3, name: 'samsung', imageURL: '/samsung.webp' },
        { id: 4, name: 'hp', imageURL: '/hp.svg.png' },
        { id: 5, name: 'dell', imageURL: '/dell.svg' },
        { id: 6, name: 'walton', imageURL: '/walton.svg' },
    ]
    return (
        <div className="w-full mx-auto border-4 border-red-600 grid justify-center gap-4 py-8">
            <h3 className="text-3xl text-center">Brands component</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full mx-auto">
                {
                    brands.map(brand => <div key={brand.id}>
                        <div className="card w-48 bg-base-100 shadow-xl border">
                            <figure className="px-10 pt-10">
                                <img src={`${brand.imageURL}`} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{brand.name}</h2>
                                <div className="card-actions">
                                    <Link to={`/brands/${brand.name}`} className="btn btn-primary">See/Explore Products</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div >
    );
};

export default Brands;