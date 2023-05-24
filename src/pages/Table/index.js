import React, { useEffect, useState } from 'react';
import Thead from '../../components/Thead'
import './App.css';



export default function Table(){

    const [users, setUsers] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null);
    const [editedUser, setEditedUser] = useState({});
    const [newUser, setNewUser] = useState({
      nome: '',
      email: '',
      telefone: '',
      foto: ''
    });


    useEffect(() => {
      fetchUsers();
    }, []);


    //Buscar lista de usuarios
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/usuarios');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    
/* useEffect(() => {
    fetch('http://localhost:8000/usuarios')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
 */


  const addUser = async () => {
    try {
      const response = await fetch('http://localhost:8000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
      const data = await response.json();
      setUsers([...users, data]);
      setNewUser({id:'', nome: '', email: '', telefone: '', foto: '' });
    } catch (error) {
      console.log(error);
    }
  };


  const handleEditUser = (userId) => {
    setEditingUserId(userId);
    const userToEdit = users.find((user) => user.id === userId);
    setEditedUser(userToEdit);
  };

  const handleSaveUser = async () => {
    try {
      const response = await fetch(`http://localhost:8000/usuarios/${editedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
      });

      if (response.ok) {
        alert('Usuário salvo com sucesso!');
        console.log('Usuário salvo com sucesso!');
        setEditingUserId(null);
        setEditedUser({});
        fetchUsers(); // Atualiza a lista de usuários após salvar
      } else {
        console.log('Erro ao salvar usuário:', response.statusText);
      }
    } catch (error) {
      console.log('Erro ao salvar usuário:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };



  const deleteUser = async (id) => {
    try {
      // Fazer a requisição para excluir o usuário usando
      await fetch(`http://localhost:8000/usuarios/${id}`, {
        method: 'DELETE',
      });
  
      //excluir o usuário, atualizar a lista de usuários
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error(`Erro eu excluir usuário com ${id}:`, error);
    }
  };


  return (
    <div>
        <h1>Usuarios</h1>
      
        <button onClick={addUser}className="btn1">Criar Sala</button>

        <hr/>
        <input placeholder="Buscar"/> 

       <table className="table">
          <Thead/>

          <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    name="nome"
                    value={editedUser.nome || ''}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.nome
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email || ''}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="tel"
                    name="telefone"
                    value={editedUser.telefone || ''}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.telefone
                )}
              </td>
              <td>
                <img src={user.foto} alt={user.nome}  style={{ width: '50px', height: '50px' }}/>
              </td>
                  <td>
                      {editingUserId === user.id ? (
                      <button class="btn3" onClick={handleSaveUser}>Salvar</button>
                    ) : (
                      <button class="btn2" onClick={() => handleEditUser(user.id)}>Editar</button>
                    )}

                    <button class="btn4" onClick={() => deleteUser(user.id)}>Excluir</button>
                  </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
};
