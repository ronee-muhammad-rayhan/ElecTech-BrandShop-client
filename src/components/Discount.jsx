const Discount = () => {
    return (
        <div>
            <h3 className="text-3xl font-extrabold text-center py-8">DiscountSection</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className="p-item">
                    <div className="p-item-inner">
                        <div className="p-item-img"><a href="https://www.startech.com.bd/apple-macbook-pro-16-inch-m1-max-chip-4tb-ssd-space-gray"><img src="https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-pro-16-inch/macbook-pro-16-inch-01-228x228.jpg" alt="Apple MacBook Pro 16-Inch M1 Max Chip 64GB RAM 4TB SSD Space Gray (MK233LL/A)" width="228" height="228" ></img></a></div>
                        <div className="p-item-details">
                            <h4 className="p-item-name"> <a href="https://www.startech.com.bd/apple-macbook-pro-16-inch-m1-max-chip-4tb-ssd-space-gray">Apple MacBook Pro 16-Inch M1 Max Chip 64GB RAM 4TB SSD Space Gray (MK233LL/A)</a></h4>
                            <div className="short-description">
                                <ul><li>Processor: Apple M1 Max chip (10-core CPU, 32-core GPU, 400GB/s)
                                </li><li>RAM: 64GB, Storage: 4TB SSD
                                    </li><li>Display: 16.2&quot (3456 x 2234) Liquid Retina XDR
                                    </li><li>Feature: Touch ID, 1080p FaceTime HD Camera</li></ul>
                            </div>
                            <div className="p-item-price">
                                <span>480,000৳</span>
                            </div>
                            <div className="actions">
                                <span className="st-btn btn-add-cart" type="button"><i className="material-icons">shopping_cart</i> Buy Now</span>
                                <span className="st-btn btn-compare"><i className="material-icons">library_add</i>Add to Compare</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;