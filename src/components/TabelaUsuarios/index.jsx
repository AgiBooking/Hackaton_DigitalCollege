import React, { useEffect, useState } from 'react';
import './index.css';


export default function TabelaUsuarios(){

     const [usuarios, setUsuarios] = useState([]);
     const [editarId, setEditarId] = useState(null);
     const [editarUsuario, setEditarUsuario] = useState({});
     const [imagem, setImagem] = useState('https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg');
     const [novoUsuario, setNovoUsuario] = useState({
        id:'',
        nome: '',
        email: '',
        telefone: '',
        foto:'',
        datac: ''
        });

        useEffect(() => {
        BuscarUsuarios();
        console.log(usuarios)
        }, []);


    //Busca a lista de usuarios 
    const BuscarUsuarios = async () => {
    try {
        const resposta = await fetch('http://localhost:8000/usuarios');
        const dados = await resposta.json();
        setUsuarios(dados);
        } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        }
    };


    //Adiciona o usuário
    const AdicionaUsuario = async () => {
        try {
            const resposta = await fetch('http://localhost:8000/usuarios', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoUsuario)
            });
            const dados = await resposta.json();
            setUsuarios([...usuarios, dados]);
            setNovoUsuario({id:'', nome: '', email: '', telefone: '', foto: '', datac: '' });
            } catch (error) {
            console.log(error);
            }
    };


    //Editar usuario
    const EditarUser = (userId) => {
        setEditarId(userId);
        const UsuarioEditado = usuarios.find((user) => user.id === userId);
        setEditarUsuario(UsuarioEditado);
    };
    
    //Salva edição
    const SalvarEdição = async () => {
        try {
            const resposta = await fetch(`http://localhost:8000/usuario/${editarUsuario.id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(editarUsuario),
            });

            if (resposta.ok) {
                alert('Usuário salvo com sucesso!');
                console.log('Usuário salvo com sucesso!');
                setEditarId(null);
                setEditarUsuario({});

                BuscarUsuarios(); // Atualiza a lista de usuários após salvar

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
        setEditarUsuario((prevUser) => ({ ...prevUser, [name]: value }));
    };



    //Deleta o usuario
    const DeletarUsuario = async (id) => {
        try {
            // Fazer a requisição para excluir o usuário
        await fetch(`http://localhost:8000/usuarios/${id}`, {
        method: 'DELETE',
        });
        
        //excluir o usuário, atualiza a lista de usuários
        setUsuarios(usuarios.filter(user => user.id !== id));
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
        <div className="box-table">
            <div className="box-header">
                <h1>USUÁRIOS</h1>
                <button onClick={AdicionaUsuario} className="btn1">CADASTRAR</button>
            </div>
        </div>
        <table className="table">
            <thead>
               <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Data Criação</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                {usuarios.map((user) => (
                    <tr key={user.id}>
                    <td>
                        <label className="picture">
                            {imagem && <img className="fotoUsuario" src={imagem} alt={user.nome}/>}
                            <input className="inputFoto" type="file" accept="image/*" onChange={MudarFoto}/>
                        </label>
                    </td>
                    <td>
                        {editarId === user.id ? (
                        <input
                            type="text"
                            name="nome"
                            value={editarUsuario.nome || ''}
                            onChange={MudarInput}
                        />
                        ) : (
                        user.nome
                        )}
                    </td>
                    <td>
                        {editarId === user.id ? (
                        <input
                            type="email"
                            name="email"
                            value={editarUsuario.email || ''}
                            onChange={MudarInput}
                        />
                        ) : (
                        user.email
                        )}
                    </td>
                    <td>
                        {editarId === user.id ? (
                        <input
                            type="tel"
                            name="telefone"
                            value={editarUsuario.telefone || ''}
                            onChange={MudarInput}
                        />
                        ) : (
                        user.telefone
                        )}
                    </td>
                    <td>
                        {editarId === user.id ? (
                        <input
                            type="text"
                            name="datac"
                            value={editarUsuario.datac || ''}
                            onChange={MudarInput}
                        />
                        ) : (
                        user.datac
                        )}
                    </td>
                        <td>
                            {editarId === user.id ? (
                            <button className="btn3" onClick={SalvarEdição}>Salvar</button>
                            ) : (
                            <button className="btn2" onClick={() => EditarUser(user.id)}>Editar</button>
                            )}

                            <button className="btn4" onClick={() => DeletarUsuario(user.id)}>Excluir</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
