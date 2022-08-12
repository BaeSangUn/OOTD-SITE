import React from "react";
import { useState } from "react";

import {AiOutlineStar, AiFillStar} from "react-icons/ai";

const StarCheck = () => {
    const [checked,setChecked] = useState(false);
    const onClick = () =>{
        
        if (checked === false){
        setChecked(!false);
        }else{
            setChecked(false);
        }
    }
    return(
        <div>
           {checked ? <AiFillStar className="star1 addi" onClick={onClick}/>:<AiOutlineStar className="star1 addi"onClick={onClick}/>}
        </div>
    );
}

export default StarCheck;