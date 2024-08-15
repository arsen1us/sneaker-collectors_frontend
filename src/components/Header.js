import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import MainPage from '../pages/MainPage'
import AuctionPage from "../pages/AuctionPage";
import AllSneakersPage from "../pages/AllSneakersPage";
import SneakerNewsPage from "../pages/SneakerNewsPage";
import TradesPage from "../pages/TradesPage";

const Header = () => {
    return(
        <BrowserRouter>
            <header>
                <nav>
                    <Link to='/'><img src="./images/sneaker_collectors_logo.png" width='200px' alt=''/></Link>
                    <h2>Sneakers Collectors</h2>
                    <ul>
                        <li><Link to='/sneaker-news'>Sneaker NEWS</Link></li>
                        <li><Link to='/all-sneakers'>All Sneakers</Link></li>
                        <li><Link to='/auction'>Auction</Link></li>
                        <li><Link to='/trades'>Trades</Link></li>
                        <li><button>Search</button></li>
                    </ul>
                </nav>
                <img src="./icons/heart.png" width='25px' alt=''/>
                <button>Your Collection</button>
                <img src='./images/default_user_photo.png' width='25px' alt=''/>
                <p>Arsenius</p>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/sneaker-news' element={<SneakerNewsPage/>}/>
                    <Route path='/all-sneakers' element={<AllSneakersPage/>}/>
                    <Route path='/auction' element={<AuctionPage/>}/>
                    <Route path='/trades' element={<TradesPage/>}/>
                </Routes>
            </header>
        </BrowserRouter>
    );
};

export default Header;