
import './index.css';
import React, { useEffect, useState } from 'react';


export default function CriarUsuario(props) {
    const [novoUsuario, setNovoUsuario] = useState({
        id:'',
        nome: '',
        email: '',
        telefone: '',
        foto:'',
        datac: ''
        });

    const AdicionaUsuario = async () => {
        try {
            const resposta = await fetch('http://localhost:8000/usuario', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoUsuario)
            });
            const dados = await resposta.json();
            props.setUsuarios([...props.usuarios, dados]);
            setNovoUsuario({id:'', nome: '', email: '', telefone: '', foto: '', datac: '' });
            } catch (error) {
            console.log(error);
            }
    };


    return (
    <>
        <div className="card">
            <h1 className='cardTitle'>Novo Usuário</h1>

            <form action="." method="POST">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required/>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" pattern="[0-9]{2}[0-9]{5}[0-9]{4}" required/>

                <input type="submit" value="Criar Usuario" onClick={AdicionaUsuario}/>
            </form>
        </div>
    </>
    );
}


