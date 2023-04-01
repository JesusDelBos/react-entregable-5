import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsername } from '../store/slices/useName.slice';



const Home = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goPokedex = () => {
        dispatch(getUsername(name));
        navigate("/pokedex")
    }

    return (
        <div className='Home-card'>
            <h1 className='Entrenador' >Hola Entrenador</h1>
            <h3>para poder comenzar, escribe tu nombre</h3>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={()=> goPokedex()}>Go</button>
        </div>
    );
};

export default Home;