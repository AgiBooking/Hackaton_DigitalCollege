import React, { useState } from 'react';
import './index.css';

export default function CriarEvento() {
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    return (
    <>
        <div className="card">
            <h1 className='cardTitle'>Novo Evento</h1>

            <form action="." method="POST">
                <label for="nome">Nome do Evento:</label>
                <input type="text" id="nome" name="nome" required/>

                <label for="dataInicio">Início:</label>
                <input type="datetime-local" id="dataInicio" name="dataInicio" value={start} onChange={(e) => setStart(e.target.value)} max={end} required/>

                <label for="dataTermino">Término:</label>
                <input type="datetime-local" id="dataTermino" name="dataTermino" value={end} onChange={(e) => setEnd(e.target.value)} min={start} required/>

                <label for="sala">Sala:</label>
                <input type="text" id="sala" name="sala" required/>

                <input type="submit" value="Criar Evento" />
            </form>
        </div>
    </>
    );
}


