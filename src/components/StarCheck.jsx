import React from "react";

import {AiOutlineStar, AiFillStar} from "react-icons/ai";

const StarCheck = (checked) => {
    
    return(
        <div>
           {checked ? <button><AiOutlineStar className="star1 addi" /></button> :<AiFillStar className="star1 addi"/>}
        </div>
    );
}

export default StarCheck;