import { Link, useLocation, useNavigate } from "react-router-dom";
import TitleHelmet from "../../components/TitleHelmet";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { loginUser, setUser, loginWithGoogle } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const notify = () => toast("Login successfull!!!");

    const handleLogin = (e) => {
        e.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then((userCredential) => {
                // user logged in successfully
                setUser(userCredential.user);
                console.log(userCredential.user);
                notify();
                navigate(`${location.state}`);
            })
            .catch((error) => {
                setError(error.message);
                console.error(error);
            });
    };

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then((userCredential) => {
                console.log(userCredential.user);
                notify();
                navigate(`${location.state}`);
            })
            .catch((error) => {
                setError(error.message);
                console.error(error);
            });
    }

    return (
        <div>
            <TitleHelmet title='ElecTech BrandShop | Login'></TitleHelmet>
            <h2 className="text-3xl">Please Login</h2>
            <div className="hero min-h-screen bg-base-200 border">
                <div className="hero-content flex-col border w-full md:w-3/4 lg:w-1/2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100 border">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center">Don&apos;t have an account? <Link className="text-blue-600" to='/register'>Register</Link></p>
                        <p className="text-center text-red-600">{error}</p>
                        <div className="text-center">
                            <p>or</p>
                            <p>You can Login with</p>
                            <Link onClick={handleLoginWithGoogle}><div><button className="btn btn-accent my-4">Google</button></div></Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;