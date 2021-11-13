import { useState } from "react";

const QuantityBox = ({ getQuantity}) => {
    const [boxQuantity, setBoxQuantity] = useState(1);
    const increaseQuantity = (e) => {
        e.preventDefault();
        let count = boxQuantity;
        count++;
        setBoxQuantity(count);
        getQuantity(count)
    }
    
    const handleChange = (num) => {
        setBoxQuantity(num);
        getQuantity(num);
    }

    const decreaseQuantity = (e) => {
        e.preventDefault();
        let count = boxQuantity;
        if(count > 0){
            count--;
            setBoxQuantity(count);
            getQuantity(count)
        }
        else{
            setBoxQuantity(0);
        }
    }

    return (
        <div>
        <button 
        onClick={decreaseQuantity}
        style={{  
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "2px 2px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "2px 2px",
            cursor: "pointer"}}>
            -
            </button>
                   
        <input
        style={{
            width:"15px",
        }}     
        value={boxQuantity}
        onChange={(e)=>handleChange(e.target.value)}></input>
        <button 
        onClick={increaseQuantity}
        style={{  
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "2px 2px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "2px 2px",
            cursor: "pointer"}}>
            +
            </button>
        </div>
    )
}
export default QuantityBox;