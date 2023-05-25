
import './index.css';
import React, { useEffect, useState } from 'react';


export default function CriarUsuario(props) {
    const [novoUsuario, setNovoUsuario] = useState({
        nome: '',
        email: '',
        telefone: ''
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
            setNovoUsuario({ nome: '', email: '', telefone: '' });
            } catch (error) {
            console.log(error);
            }
    };

    const handleNameChange = (e) => setNovoUsuario({...novoUsuario, nome: e.target.value});
    const handleEmailChange = (e) => setNovoUsuario({...novoUsuario, email: e.target.value});
    const handlePhoneChange = (e) => setNovoUsuario({...novoUsuario, telefone: e.target.value});


    return (
    <>
        <div className="card">
            <h1 className='cardTitle'>Novo Usuário</h1>

            <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required onChange={handleNameChange} value={novoUsuario.nome}/>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={handleEmailChange} value={novoUsuario.email}/>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" pattern="[0-9]{2}[0-9]{5}[0-9]{4}" required onChange={handlePhoneChange} value={novoUsuario.telefone}/>

                <input type="submit" value="Criar Usuario" onClick={AdicionaUsuario}/>
            </div>
        </div>
    </>
    );
}


