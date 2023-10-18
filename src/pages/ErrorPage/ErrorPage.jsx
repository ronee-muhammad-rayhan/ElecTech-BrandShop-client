import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h5>Sorry... Go back <Link className='text-blue-600 font-semibold' to='/'>home</Link>.</h5>
        </div>
    );
};

export default ErrorPage;