import React from 'react';
import { Link, useParams } from 'react-router-dom';


const ColorDetails = ({colors}) => {
    const { color } = useParams() ;

        
    const hex = colors[color];


    console.log(hex,color)
    
    return (
        <div className="Color" style={{ backgroundColor: hex }}>
            <h1> This is {color}.</h1>
            <h1> Isn't it beautiful? </h1>
            <h1><Link to='/colors'>Go Back</Link></h1>
        </div>
    )
}


export default ColorDetails;