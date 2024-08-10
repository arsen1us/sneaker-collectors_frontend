import React from "react";

const Header = () => {
    return(
        <header>
            <nav>
                <img src="./icons/sneaker_collectors_logo.png" width='200px'/>
                <h2>Sneakers Collectors</h2>
                <ul>
                    <li><a href="" >Sneaker NEWS</a></li>
                    <li><a href="" >All Sneakers</a></li>
                    <li><a href="" >Auction</a></li>
                    <li><a href="" >Trades</a></li>
                    <li><button>Search</button></li>
                </ul>
            </nav>
            <img src="./icons/heart.png" width='25px'/>
            <button>Your Collection</button>
            <img src='./icons/black_circle.png' width='25px'/>
            <p>Arsenius</p>

        </header>
    );
};

export default Header;