import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
         .then(res => res.json())
         .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-6">
            <h2 className="text-2xl">All Category </h2>
            <h2 className="text-2xl font-semibold p-4 text-center rounded-lg bg-[#e7e7e7]">National News</h2>
            {
                categories.map(category => <Link 
                    className="block ml-14 text-xl font-semibold" 
                    key={category.id}
                    to={`/category/${category.id}` } 
                    >{category.name} </Link>)
            }
        </div>
    );
};

export default LeftSideNav;