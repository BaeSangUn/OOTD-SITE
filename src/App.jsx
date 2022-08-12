import React from 'react';
import './App.scss';
import FavoritCheck from './components/FavoritCheck';
import Buy from './components/Buy';
import ShoppingCart from './components/ShoppingCart';


function App() {
  return (
    <div>
      <nav className='sell-btn'>
        <Buy className="buy"/>
        <div className='like-btn'>
          <button className='like'>
          <FavoritCheck />
          </button>
        </div>
      <div >
     <ShoppingCart />
      </div>
      </nav>
    </div>
  );
}

export default App;
