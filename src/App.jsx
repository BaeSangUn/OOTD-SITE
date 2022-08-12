import React from 'react';
import {BiWon} from "react-icons/bi";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './App.scss';
import FavoritCheck from './components/FavoritCheck';


function App() {
  return (
    <div>
      <nav className='sell-btn'>
        <button className='sell'>
          구매하기 <BiWon/>
          <a href="http://localhost:3000"></a> 
        </button>
        <div className='like-btn'>
          <button className='like'>
          <FavoritCheck />
          </button>
        </div>
      <div >
      <button className="shopping-cart">
      <AiOutlineShoppingCart/>
      </button>
      </div>
      </nav>
    </div>
  );
}

export default App;
