import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({colors}) => {
    
    const Links = Object.keys(colors).map(colorName => (
        <div>
            <li key={colorName}>
                <h3>
                <Link to={`/colors/${colorName}`}>{colorName}</Link>
                </h3>
            </li>
        </div>
    ))

    return (
        <div>
            <h1>Welcome to the color fatory</h1>
            <h1><Link to='/colors/new'>Add a color</Link></h1>
            <p>Please select a color.</p>
            <div>
                <ul>{Links}</ul>
            </div>
        </div>
    )
}


export default ColorList;