import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://b8a10-brandshop-server-i1sw9yjob-roneemrayhans-projects.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, []);
    return (
        <div>
            {
                categories?.map((category, idx) => <BrandCard key={idx} category={category}></BrandCard>)
            }
        </div>
    );
};

export default Category;