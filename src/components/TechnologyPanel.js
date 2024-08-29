import {useEffect, useState} from "react";
import axios, {preventDefault} from "axios";

const TechnologyPanel = () => {
    
    const[allTechnologies, setAllTechnologies] = useState([]);
    const[newTechnology, setNewTechnology] = useState([]);

    const[editTechnologyId, setEditTechnologyId] = useState('');
    const[editTechnology, setEditTechnology] = useState('');

    const getAllTechnologies = async() => {
        const response = await axios.get('https://localhost:7190/api/tech/get-all');
        setAllTechnologies(response.data)
    };

    const addNewTechnology = async(e) => {
        e.preventDefault();
        await axios.post('https://localhost:7190/api/tech/add', {technology: newTechnology})
        .then(response => {
            if(response.status == 200){
                getAllTechnologies();
            }
            else{
                alert("Failde to add technology");
            }
        });
    }

    const deleteTechnology = async (id) => {
        await axios.post("https://localhost:7190/api/tech/remove/" + id)
        .then(response => {
            //alert(response.status);
            getAllTechnologies();
        })
    }

    const updateTechnology = async(id,technology) => {
        await axios.post("https://localhost:7190/api/tech/update/" + id, {technology: technology});
        setEditTechnology('');
        setEditTechnologyId('');
        getAllTechnologies();
    }

    const handleCancelToEdit = () => {
        setEditTechnology('');
        setEditTechnologyId('');
    }

    useEffect(() => {
        getAllTechnologies();
    }, []);


    return(
        <div>
            <div>
                <h3>Add new technology</h3>
                <form>
                    <div>
                        <label>
                            New technology
                        </label>
                        <input 
                        type="text"
                        value={newTechnology}
                        onChange={(e) => setNewTechnology(e.target.value)}
                        placeholder="New technology"/>
                    </div>
                    <button onClick={addNewTechnology}>
                        Добавить
                    </button>
                </form>
            </div>
            <div>
                <h3>All technologies</h3>
                {allTechnologies.map((item, index) => (
                    <li key={index}>
                        <div>
                            {
                                editTechnologyId == item.id ? 
                                <div>
                                    <input
                                    type='text'
                                    value={editTechnology}
                                    onChange={(e) => setEditTechnology(e.target.value)}
                                    placeholder={item.technology}/>
                                    <button onClick={() => updateTechnology(editTechnologyId, editTechnology)}>Save</button>
                                    <button onClick={() => handleCancelToEdit()}>Cancel</button>
                                </div> : <p>{item.technology}</p>

                            }
                            <button onClick={() => setEditTechnologyId(item.id)}>
                                <img src="/Icons/pencil.png" width='10px'/>
                            </button>
                            <button type='submit' onClick={() => deleteTechnology(item.id)}>
                                <img src="/Icons/trash_box.png" width='10px'/>
                            </button>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default TechnologyPanel;