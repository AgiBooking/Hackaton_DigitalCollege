import * as React from 'react';
import './index.css';

export default function CriarEvento() {
    return (
    <>
        <div className="card">
            <h1 className='cardTitle'>Novo Evento</h1>

            <form action="." method="POST">
                <label for="nome">Nome do Evento:</label>
                <input type="text" id="nome" name="nome" required/>

                <label for="dataInicio">Data de Início:</label>
                <input type="date" id="data" name="data" required/>

                <label for="horarioInicio">Horário de início:</label>
                <input type="time" id="horarioInicio" name="horarioInicio" required/>

                <label for="dataTermino">Data de Termino:</label>
                <input type="date" id="dataTermino" name="dataTermino" required/>

                <label for="horarioFinal">Horário de término:</label>
                <input type="time" id="horarioFinal" name="horarioFinal" required/>

                <label for="sala">Sala:</label>
                <input type="text" id="sala" name="sala" required/>

                <input type="submit" value="Criar Evento" />
            </form>
        </div>
    </>
    );
}


