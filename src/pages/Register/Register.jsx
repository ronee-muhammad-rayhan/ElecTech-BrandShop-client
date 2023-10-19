import TitleHelmet from "../../components/TitleHelmet";
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const { createUser } = useAuth();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then((userCredential) => {
                // new user has been created
                console.log(userCredential.user)
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <TitleHelmet title='ElecTech BrandShop | Register'></TitleHelmet>
            <h2 className="text-3xl">Please Register</h2>
            <div className="hero min-h-screen bg-base-200 border">
                <div className="hero-content flex-col border w-full md:w-3/4 lg:w-1/2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100 border">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;