import {useEffect, useState} from "react";
import axios, {preventDefault} from "axios";

const ColorPanel = () => {
    
    const[allColors, setAllColors] = useState([]);
    const[newColor, setNewColor] = useState([]);

    const[editColorId, setEditColorId] = useState('');
    const[editColor, setEditColor] = useState('');

    const getAllColors = async() => {
        const response = await axios.get('https://localhost:7190/api/sneaker-color/get-all');
        setAllColors(response.data)
    };

    const addNewColor = async(e) => {
        e.preventDefault();
        await axios.post('https://localhost:7190/api/sneaker-color', {color: newColor})
        .then(response => {
            if(response.status == 200){
                getAllColors();
            }
            else{
                alert("Failde to add color");
            }
        });
    }

    const deleteColor = async (id, color) => {
        await axios.post("https://localhost:7190/api/sneaker-color/remove/" + id, {color: color})
        .then(response => {
            //alert(response.status);
            getAllColors();
        })
    }

    const updateColor = async(id,color) => {
        await axios.post("https://localhost:7190/api/sneaker-color/update/" + id, {color: color});
        setEditColor('');
        setEditColorId('');
        getAllColors();
    }

    const handleCancelToEdit = () => {
        setEditColor('');
        setEditColorId('');
    }

    useEffect(() => {
        getAllColors();
    }, []);


    return(
        <div>
            <div>
                <h3>Add new color</h3>
                <form>
                    <div>
                        <label>
                            New color
                        </label>
                        <input 
                        type="text"
                        value={newColor}
                        onChange={(e) => setNewColor(e.target.value)}
                        placeholder="New color"/>
                    </div>
                    <button onClick={addNewColor}>
                        Добавить
                    </button>
                </form>
            </div>
            <div>
                <h3>All colors</h3>
                {allColors.map((item, index) => (
                    <li key={index}>
                        <div>
                            {
                                editColorId == item.id ? 
                                <div>
                                    <input
                                    type='text'
                                    value={editColor}
                                    onChange={(e) => setEditColor(e.target.value)}
                                    placeholder={item.color}/>
                                    <button onClick={() => updateColor(editColorId, editColor)}>Save</button>
                                    <button onClick={() => handleCancelToEdit()}>Cancel</button>
                                </div> : <p>{item.color}</p>

                            }
                            <button onClick={() => setEditColorId(item.id)}>
                                <img src="/Icons/pencil.png" width='10px'/>
                            </button>
                            <button type='submit' onClick={() => deleteColor(item.id, item.color)}>
                                <img src="/Icons/trash_box.png" width='10px'/>
                            </button>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default ColorPanel;