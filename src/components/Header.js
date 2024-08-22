import React, {useState} from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import MainPage from '../pages/MainPage'
import AuctionPage from "../pages/AuctionPage";
import AllSneakersPage from "../pages/AllSneakersPage";
import SneakerNewsPage from "../pages/SneakerNewsPage";
import TradesPage from "../pages/TradesPage";

import Popup from "./Popup";
import RegistrationForm from "./RegistrationForm";
import AuthenticationForm from "./AuthenticationForm";

function Header() {
    
    const[showRegPopup, setShowRegPopup] = useState(false);
    const[showAuthPopup, setShowAuthPoput] = useState(false);

    function toggleRegPopup(){
        setShowRegPopup(!showRegPopup);
    }

    function toggleAuthPopup(){
        setShowAuthPoput(!showAuthPopup);
    }


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
                
                <button onClick={toggleRegPopup}>Sign in</button>
                <Popup show = {showRegPopup} handleClose={toggleRegPopup}>
                    <RegistrationForm handleClose={toggleRegPopup}/>
                </Popup>

                <button onClick={toggleAuthPopup}>Sign on</button>
                <Popup show = {showAuthPopup} handleClose={toggleAuthPopup}>
                    <AuthenticationForm handleClose={toggleAuthPopup}/>
                </Popup>
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