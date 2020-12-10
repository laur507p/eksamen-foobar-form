import React, {useState} from "react";

// import Beers from "./pages/Beers";

export default function AddAndRemove(props){
    const [number, setNumber] = useState(0)
    const [total, setTotal] = useState(0)
    

    function subtract(){
        if (number > 0){
            setNumber(number-1);
            setTotal (total - props.price);
        }
    }

    function add(){
        setNumber(number+1);  
        setTotal (total + props.price);
           console.log(total);
    }

    
    
    return (
        <div>
            <button onClick={subtract}>-</button>
            {number}
            <button onClick={add}>+</button>
            
        </div>
    )
}