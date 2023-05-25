import React, { useState } from 'react';
import './index.css';

export default function CriarSala() {
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    return (
    <>
        <div className="card">
            <h1 className='cardTitle'>Criar Salas</h1>

            <form action="." method="POST">
                <label for="nome">Nome da Sala</label>
                <input type="text" id="nome" name="nome" required/>

                <label for="dataInicio">Capacidade máxima:</label>
                <input type="datetime-local" id="dataInicio" name="dataInicio" value={start} onChange={(e) => setStart(e.target.value)} max={end} required/>

                <label for="dataTermino">Recursos:</label>
                <input type="datetime-local" id="dataTermino" name="dataTermino" value={end} onChange={(e) => setEnd(e.target.value)} min={start} required/>

                 <input type="submit" value="Criar Salas" />
            </form>
        </div>
    </>
    );
}


