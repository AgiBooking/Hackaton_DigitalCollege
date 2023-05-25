import React, { useEffect, useState } from 'react';
import "./style.css";

export default function TabelaSalas(){

    const [salas, setSalas] = useState([]);
    const [editarId, setEditarId] = useState(null);
    const [editarSalas, setEditarSalas] = useState({});
    const [imagem, setImagem] = useState('https://cdn-icons-png.flaticon.com/512/1647/1647571.png');
    const [novaSala, setNovaSala] = useState({
       id:'',
       sala: '',
       capacidade: '',
       recurso: '',
       foto:'',
       });

       useEffect(() => {
       BuscarSalas();
       }, []);


   //Busca a lista de salas 
   const BuscarSalas = async () => {
   try {
       const resposta = await fetch('http://localhost:8000/salas');
       const dados = await resposta.json();
       setSalas(dados);
       } catch (error) {
       console.error('Erro ao buscar usuário:', error);
       }
   };


   //Adiciona o usuário
   const AdicionaSalas = async () => {
       try {
           const resposta = await fetch('http://localhost:8000/salas', {
               method: 'POST',
               headers: {
               'Content-Type': 'application/json'
               },
               body: JSON.stringify(novaSala)
           });
           const dados = await resposta.json();
           setSalas([...salas, dados]);
           setNovaSala({id:'', sala: '', capacidade: '', recurso: '', foto: ''});
           } catch (error) {
           console.log(error);
           }
   };


   //Editar usuario
   const EditarUser = (userId) => {
       setEditarId(userId);
       const UsuarioEditado = salas.find((user) => user.id === userId);
       setEditarSalas(UsuarioEditado);
   };
   
   //Salva edição
   const SalvarEdição = async () => {
       try {
           const resposta = await fetch(`http://localhost:8000/salas/${editarSalas.id}`, {
               method: 'PUT',
               headers: {
               'Content-Type': 'application/json',
               },
               body: JSON.stringify(editarSalas),
           });

           if (resposta.ok) {
               alert('Usuário salvo com sucesso!');
               console.log('Usuário salvo com sucesso!');
               setEditarId(null);
               setEditarSalas({});

               BuscarSalas(); // Atualiza a lista de usuários após salvar

           } else {
               console.log('Erro ao salvar usuário:', resposta.statusText);
           }
           } catch (error) {
           console.log('Erro ao salvar usuário:', error);
           }
   };

   // Altera o input para fazer a edição
   const MudarInput = (event) => {
       const { name, value } = event.target;
       setEditarSalas((prevUser) => ({ ...prevUser, [name]: value }));
   };



   //Deleta o usuario
   const DeletaSala = async (id) => {
       try {
           // Fazer a requisição para excluir o usuário
       await fetch(`http://localhost:8000/salas/${id}`, {
       method: 'DELETE',
       });
       
       //excluir o usuário, atualiza a lista de usuários
       setSalas(salas.filter(user => user.id !== id));
       } catch (error) {
       console.error(`Erro eu excluir usuário com ${id}:`, error);
       }
   };


   //Altera foto
   const MudarFoto = (event) => {
       const foto = event.target.files[0];
       const LerFoto = new FileReader();
   
       LerFoto.onload = () => {
           setImagem(LerFoto.result);
       };
   
       if (foto) {
           LerFoto.readAsDataURL(foto);
       }
     };



   return (
       <>
       <h1>SALAS</h1>
       <button onClick={AdicionaSalas}className="btn1">CADASTRAR</button>

       <table className="table">
           <thead>
              <tr>
                   <th></th>
                   <th>Salas</th>
                   <th>Capacidade Máxima</th>
                   <th>Recursos Disponiveis</th>
                   <th>Ações</th>
               </tr>
           </thead>

           <tbody>
               {salas.map((user) => (
                   <tr key={user.id}>
                   <td>
                       <label className="picture">
                           {imagem && <img className="fotoUsuario" src={imagem} alt={user.sala}/>}
                           <input className="inputFoto" type="file" accept="image/*" onChange={MudarFoto}/>
                       </label>
                   </td>
                   <td>
                       {editarId === user.id ? (
                       <input
                           type="text"
                           name="nome"
                           value={editarSalas.sala || ''}
                           onChange={MudarInput}
                       />
                       ) : (
                       user.sala
                       )}
                   </td>
                   <td>
                       {editarId === user.id ? (
                       <input
                           type="text"
                           name="capacidade"
                           value={editarSalas.capacidade || ''}
                           onChange={MudarInput}
                       />
                       ) : (
                       user.email
                       )}
                   </td>
                   <td>
                       {editarId === user.id ? (
                       <input
                           type="text"
                           name="recursos"
                           value={editarSalas.recursos || ''}
                           onChange={MudarInput}
                       />
                       ) : (
                       user.telefone
                       )}
                   </td>
                       <td>
                           {editarId === user.id ? (
                           <button className="btn3" onClick={SalvarEdição}>Salvar</button>
                           ) : (
                           <button className="btn2" onClick={() => EditarUser(user.id)}>Editar</button>
                           )}

                           <button className="btn4" onClick={() => DeletaSala(user.id)}>Excluir</button>
                       </td>
                   </tr>
                   ))}
               </tbody>
           </table>
       </>
   );
};