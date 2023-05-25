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

                <label for="capacidade">Capacidade máxima:</label>
                <input type="capacidade" id="capacidade_sala" name="capacidade" value={start} onChange={(e) => setStart(e.target.value)} max={end} required/>

                <label for="recursos">Recursos:</label>
                <input type="recursos" id="recursos" name="recursos" value={end} onChange={(e) => setEnd(e.target.value)} min={start} required/>

                 <input type="submit" value="Criar Salas" />
            </form>
        </div>
    </>
    );
}


