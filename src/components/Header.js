import React, {useState} from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import '../css/Header.css';

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
                <div>
                    <div>
                        <Link to='/'><img src="./images/sneaker_collectors_logo.png" width='100px' alt=''/></Link>
                    </div>
                    <div>
                        <h2>Sneakers<br/>Collectors</h2>
                    </div>
                </div>
                    <nav class='nav-menu'>
                    <div>
                        <Link to='/sneaker-news'>Sneaker NEWS</Link>
                    </div>
                    <div>
                        <Link to='/all-sneakers'>All Sneakers</Link>
                    </div>
                    <div>
                        <Link to='/auction'>Auction</Link>
                    </div>
                    <div>
                        <Link to='/trades'>Trades</Link>
                    </div>
                    <div>
                        <button>Search</button>
                    </div>
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