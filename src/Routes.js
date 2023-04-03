import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import AddColor from './AddColor';



const AppRoutes = () => {
    const initialColors = JSON.parse(localStorage.getItem("colors")) || {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    };

    const [colors, setColors] = useState(initialColors);

    useEffect(
        () => localStorage.setItem("colors", JSON.stringify(colors)),
        [colors]
    );
    
    function handleAdd(name, hex) {
        setColors(prevColors => ({ ...prevColors, [name]: hex}));
    }

 
    
    
    return (
        <div>
            <Routes>
                <Route path='/colors' element={<ColorList colors={colors}/>}></Route>
                <Route path='/colors/:color' element={<ColorDetails colors={colors} />}></Route>
                <Route path='/colors/new' element={<AddColor handleAdd={handleAdd}/>}></Route>
                <Route render={()=> <Navigate to='/colors'></Navigate>}></Route>
            </Routes>
        </div>
    )

}


export default AppRoutes;