import {useState, useEffect} from "react";
import axios from "axios";

function AllSneakersPage() {
    const [items, setItems] = useState([]);
    const[page, setPage] = useState(10);
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        loadItems();
    }, [page]);

    const loadItems = async () => {
        setLoading(true);

        const response = await axios.get(`https://localhost:7190/api/sn-overview/${page}`);
        // const sneakersData = JSON.parse(response.data);
        setItems(prevItems => [...prevItems, ...response.data]);
        setLoading(false);
    };

    const scrollHandler = () => {
        if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight){
            setPage(prevPage => prevPage + 10);
        }
        // const timeoutId = setTimeout(scrollHandler, 1000);
        // return () => clearTimeout(timeoutId);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler)
    }, []);
    return (
        <div>
            <h1>ALL SKEAKERS</h1>
            <h2>This page is not available yet. The project is in the active development stage. You can find out about the moment of the start of this page and about the news of the site <a href="https://t.me/arsen1us">here</a></h2>
            <div>
                    {items.map((item, index) => (
                        <li key={index}>
                            <div>
                                Id - {item.Id}, model - {item.Model}, discription - {item.Discription}, brand id - {item.BrandId}, color - {item.Color}
                            </div>
                        </li>))}
            </div>
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default AllSneakersPage;