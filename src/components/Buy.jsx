import React from "react";
import {BiWon} from "react-icons/bi";
import "../Styles/Buy.scss";

function Buy(){
    return(
        <div>
        <button className='sell'>
          구매하기 <BiWon/>
        </button>
        </div>
    );

}
export default Buy;