
const Banner = () => {
    return (
        <div>
            <h3 className="text-3xl">Banner</h3>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/mobile-tech-landing-page_23-2148716511.jpg?w=2000&t=st=1697810503~exp=1697811103~hmac=dc6f06075ad0eb915805c187e753740096ede2da94f6b4b3f930adc676e9b962)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;