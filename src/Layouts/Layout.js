import './Css/Layout.css';
import React from 'react';
import { Ui } from '../UI/Ui';
import { Titulo } from '../UI/Titulo';
import { Contenedor } from '../Components/Pages/Contenedor';

export const Layout = () => {
        return (
            
             <>
        <header>

       <Ui/>


            
            

            <nav>
                
            
                <ul>
                <li className="botones"><a href="#"> Boton 1</a></li>
                <li className="botones"><a href="#">Boton 2</a></li>
                <li className="botones"><a href="#">Boton 3</a></li>
                <li className="botones"><a href="#">Boton 4</a></li>
                <li className="botones"><a href="#">Boton 5</a></li>
                </ul>
            </nav>
            </header>
        
        <Titulo />
        <Contenedor />
        </>
        )
    }

