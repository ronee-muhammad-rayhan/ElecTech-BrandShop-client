import { useLoaderData } from "react-router-dom";
import Discount from "../../components/Discount";
import Featured from "../../components/Featured";
import Banner from "../../shared/Banner";
import BrandCard from "../../components/BrandCard";
import Brands from "../../components/Brands";
import TitleHelmet from "../../components/TitleHelmet";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
    const products = useLoaderData();
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1500, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    return (
        <div>
            <TitleHelmet title='ElecTech || BrandShop'></TitleHelmet>
            <h3 className="text-3xl">Home</h3>
            <div data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="false"
            ><Banner></Banner></div>
            <div data-aos="flip-left"><Brands ></Brands></div>
            <div data-aos="flip-left">
                {
                    products.map(product => <BrandCard key={product._id} product={product}></BrandCard>)
                }
            </div>
            <div data-aos="flip-left"><Featured></Featured></div>
            <Discount></Discount>
        </div>
    );
};

export default Home;