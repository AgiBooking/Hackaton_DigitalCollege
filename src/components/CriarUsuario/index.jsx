import React, { useState } from 'react';
import './index.css';

export default function CriarUsuario() {

    return (
    <>
        <div className="card">
            <h1 className='cardTitle'>Novo Usuário</h1>

            <form action="." method="POST">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required/>

                <label for="email">Email:</label>
                <input type="datetime-local" id="email" name="email" required/>

                <label for="telefone">Telefone:</label>
                <input type="phone" id="telefone" name="telefone" required/>

                <label for="dataCriacao">Data Criação:</label>
                <input type="date" id="dataCriacao" name="dataCriacao" required/>

                <input type="submit" value="Criar Evento" />
            </form>
        </div>
    </>
    );
}


