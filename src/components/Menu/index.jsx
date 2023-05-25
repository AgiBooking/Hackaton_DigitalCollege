import React from 'react';
import "./style.css";
import Person from './person.png'
import { Link } from 'react-router-dom';

export default function Menu() 
{
    return (
        <>
            <div className="box">
                <div>
                    <img src={Person} alt="" />
                </div>

                <Link to="/"><button>Sair</button></Link>
            </div>
        </>
    )
}
