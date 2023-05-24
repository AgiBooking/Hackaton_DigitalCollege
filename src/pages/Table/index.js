import React, { useEffect, useState } from 'react';
import Thead from '../../components/Thead'

export default function Table(){

    const [users, setUsers] = useState([]);

useEffect(() => {
    fetch('http://localhost:8000/usuarios')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
        <h1>Usuarios</h1>
        <p>Digital College</p>

        <div>
            <div>
                <input type="checkbox" />
                </div>
            
            <div >
                <a href="#cadastro">
                    Cadastrar
                </a>
                </div>
        </div>
        <hr/>
        <input placeholder="Buscar"/> 

      <table>
        
        <Thead/>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <img src={user.foto} alt={user.name} style={{ width: '50px' }} />
              </td>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>{user.telefone}</td>
              <td>{user.datac}</td>
                <td>
                    <button onClick={""}>Editar</button>
                    <button onClick={""}>Excluir</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

