import {React, useState} from "react";

function FormForAddSnSample() {
    const[model, setModel] = useState('');
    const[brand, setBrand] = useState('');
    const[discription, setDiscription] = useState('');
    const[color, setColor] = useState('');
    const[purpose, setPurpose] = useState('');
    const[gender, setGender] = useState('');
    const[upMaterial,setUpMaterial] = useState('');
    const[insideMaterial, setInsideMaterial] = useState('');
    const[soleMaterial, setSoleMaterial] = useState('');
    const[inSoleMaterial, setInSoleMaterial] = useState('');

    return(
        <div>
            <form method="post">
                <div>
                    <label>Model</label>
                    <input></input>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <label>Brand</label>
                    <input></input>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <label>Discription</label>
                    <input></input>
                    
                </div>
                <div>
                    <label>Color</label>
                    <input></input>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <label>Purpose</label>
                    <input></input>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <label>Up Material</label>
                    <input></input>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <label>Inside Material</label>
                    <input></input>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <label>Sole Material</label>
                    <input></input>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <label>Insole Material</label>
                    <input></input>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </form>
        </div>
    );
} 

export default FormForAddSnSample;