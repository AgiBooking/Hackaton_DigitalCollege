import React from 'react';
import "./style.css";

import Person from './person.png'

export default function Menu() 
{
    return (
        <>
            <div className="box">
                <div>
                    <img src={Person} alt="" />
                </div>
                <button>Sair</button>
            </div>
        </>
    )
}