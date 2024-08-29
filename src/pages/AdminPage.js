import React, {useState, useEffect} from "react";
import axios, {preventDefault} from "axios";
import { Route, Link, BrowserRouter  } from "react-router-dom";

import ColorPanel from "../components/ColorPanel";
import TechnologyPanel from "../components/TechnologyPanel";

function AdminPage(){
    return(
        
        <div>
            <h3>Adminka lol</h3>
            <div class='paths-container'>
                <Link to='/admin/color-panel'>
                    <p>Colors</p>
                </Link>
                <p>Пока здесь пускай будут</p>
                <ColorPanel/>
                <Link to='/admin/tech-panel'>
                    <p>Technologies</p>
                </Link>
                <TechnologyPanel/>
            </div>
        </div>
        
    )
}

export default AdminPage