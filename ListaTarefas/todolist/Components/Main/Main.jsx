import React from 'react';
import './Main.css';

const Main = ({children}) =>{

    return (
        <div className='main-content'>
          {/* <p>Banana</p> */}
             {children}

        </div>
    )
}
export default Main;