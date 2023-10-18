import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h5>This is 404 or not found page. <Link className="text-purple-700" to='/'>Click here to go back home</Link></h5>
        </div>
    );
};

export default NotFound;