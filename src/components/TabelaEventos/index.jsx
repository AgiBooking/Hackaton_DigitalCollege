import React, {useState, useEffect} from 'react';
import Modal from '@mui/material/Modal';
import CriarEvento from '../CriarEvento';
import './index.css'

export default function TabelaEventos(){
    const [open, setOpen]= useState(false);

    const handleClose = () => {
        setOpen(false)
    };

    const handleOpen = () => {
        setOpen(true)
    };

    const [evento, setEvento] = useState([]);
    const [editarId, setEditarId] = useState(null);
    const [editarEvento, setEditarEvento] = useState({});
    const [novaSala, setNovaSala] = useState({
       id:'',
       nomeEvento: '',
       dtHoraInicial: '',
       dtHoraFinal: '',
       sala:'',
       });

       useEffect(() => {
       BuscarEvento();
       }, []);


   //Busca a lista de evento 
   const BuscarEvento = async () => {
   try {
       const resposta = await fetch('http://localhost:8000/evento');
       const dados = await resposta.json();
       setEditarEvento(dados);
       } catch (error) {
       console.error('Erro ao buscar usuário:', error);
       }
   };


   //Adiciona o usuário
   const AdicionaEvento = async () => {
       try {
           const resposta = await fetch('http://localhost:8000/evento', {
               method: 'POST',
               headers: {
               'Content-Type': 'application/json'
               },
               body: JSON.stringify(novaSala)
           });
           const dados = await resposta.json();
           setEditarEvento([...evento, dados]);
           setNovaSala({ id:'', nomeEvento: '', dtHoraInicial: '', dtHoraFinal: '', sala:'',});
           } catch (error) {
           console.log(error);
           }
   };


   //Editar usuario
   const EditarUser = (userId) => {
       setEditarId(userId);
       const UsuarioEditado = evento.find((user) => user.id === userId);
       setEditarEvento(UsuarioEditado);
   };
   
   //Salva edição
   const SalvarEdição = async () => {
       try {
           const resposta = await fetch(`http://localhost:8000/evento/${editarEvento.id}`, {
               method: 'PUT',
               headers: {
               'Content-Type': 'application/json',
               },
               body: JSON.stringify(editarEvento),
           });

           if (resposta.ok) {
               alert('Usuário salvo com sucesso!');
               console.log('Usuário salvo com sucesso!');
               setEditarId(null);
               setEditarEvento({});

            BuscarEvento(); // Atualiza a lista de usuários após salvar

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
       setEditarEvento((prevUser) => ({ ...prevUser, [name]: value }));
   };



   //Deleta o usuario
   const DeletaSala = async (id) => {
       try {
           // Fazer a requisição para excluir o usuário
       await fetch(`http://localhost:8000/evento/${id}`, {
       method: 'DELETE',
       });
       
       //excluir o usuário, atualiza a lista de usuários
       setEvento(evento.filter(user => user.id !== id));
       } catch (error) {
       console.error(`Erro eu excluir usuário com ${id}:`, error);
       }
   };


    return (
        <>
 {/*        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
        <CriarEvento/>
        </Modal>
 */}
            <h1>EVENTOS</h1>
            <button onClick={AdicionaEvento}className="btn1">CADASTRAR</button>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nome do Evento</th>
                        <th>Data e Horário inicial</th>
                        <th>Data e Horário final</th>
                        <th>Sala</th>
                        <th className="actions">Ações</th>
                    </tr>
                    </thead>

           <tbody>
               {evento.map((user) => (
                   <tr key={user.id}>
                   <td>
                       {editarId === user.id ? (
                       <input
                           type="text"
                           name="nome"
                           value={editarEvento.nomeEvento || ''}
                           onChange={MudarInput}
                       />
                       ) : (
                       user.nomeEvento
                       )}
                   </td>
                   <td>
                       {editarId === user.id ? (
                       <input
                           type="text"
                           name="dtHoraInicial"
                           value={editarEvento.dtHoraInicial || ''}
                           onChange={MudarInput}
                       />
                       ) : (
                       user.dtHoraInicial
                       )}
                   </td>
                   <td>
                       {editarId === user.id ? (
                       <input
                           type="text"
                           name="dtHoraFinal"
                           value={editarEvento.dtHoraFinal || ''}
                           onChange={MudarInput}
                       />
                       ) : (
                       user.dtHoraFinal
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
