import React from 'react';
import './Main.css';

const Main = ({children}) =>{

    return (
        <div className='main'>
            <div
                className="main-content"
            >
                  {children}
            </div>
          {/* <p>Banana</p> */}
           

        </div>
    )
}
export default Main;