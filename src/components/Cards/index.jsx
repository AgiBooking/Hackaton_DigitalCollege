import React from 'react';
import "./style.css";

import Calendario from './calendar-icon-.png';

export default function Cards() 
{
    return (
        <>
            <div className="box-cards">
                <div className="box-card">
                    <div className="box-lado-a">
                        <h5>Taxa de ocupação</h5>
                        <p className="numero">4565</p>
                        <p className="data">Jan - Março 2019</p>
                    </div>
                    <div className="box-lado-b">
                        <img src={Calendario} alt=""  />
                    </div>
                </div>
                <div className="box-card">
                    <div className="box-lado-a">
                        <h5>Número de salas</h5>
                        <p className="numero">4565</p>
                        <p className="data">Jan - Março 2019</p>
                    </div>
                    <div className="box-lado-b">
                        <img src={Calendario} alt="" />
                    </div>
                </div>
                <div className="box-card">
                    <div className="box-lado-a">
                        <h5>Novos Usuários</h5>
                        <p className="numero">4565</p>
                        <p className="data">Jan - Março 2019</p>
                    </div>
                    <div className="box-lado-b">
                        <img src={Calendario} alt="" />
                    </div>
                </div>
                <div className="box-card">
                    <div className="box-lado-a">
                        <h5>Eventos ocorridos</h5>
                        <p className="numero">4565</p>
                        <p className="data">Jan - Março 2019</p>
                    </div>
                    <div className="box-lado-b">
                        <img src={Calendario} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}