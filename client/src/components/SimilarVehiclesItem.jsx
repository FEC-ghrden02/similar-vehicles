import React from 'react'; 

const SimilarVehiclesItem = (props) => {
    return (
        <div>
            <image src={props.picture} alt={props.model}/>
            {props.year} {props.make} {props.model} {props.class}
            {props.price} {props.miles}
            {props.engine_L_Cyl} {props.transmission}
            {props.exterior_color} {props.interior_color}
        </div>
    ); 
}; 

export default SimilarVehiclesItem; 