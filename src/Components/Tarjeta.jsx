import React, { Component } from 'react';
import ImgLobo from '../images/lobo.png';
class Tarjeta extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='card'>
                        <img className='image' src={ImgLobo} alt='Darwin Tusarma' />
                        <h3>My Card</h3>
                        
                        

                    </div>

                </div>
            </div>
            
        );
    }
}
export default Tarjeta;
