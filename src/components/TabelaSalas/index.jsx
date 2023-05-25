import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import CriarSala from '../CriarSala';
import "./style.css";

export default function TabelaSalas() 
{
    const [open, setOpen]= useState(false);

    const handleClose = () => {
        setOpen(false)
    };

    const handleOpen = () => {
        setOpen(true)
    };
    return (
        <>
        <div className="box-table">
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
        <CriarSala/>
        </Modal>
            
                <div className="box-header">
                    <h1>SALAS</h1>
                    <button onClick={handleOpen} className="btn1">Criar Sala</button>
                </div>
        
                <table className="table">
                    <thead>
                    <tr>
                        <th>Nome da Sala</th>
                        <th>Capacidade Máxima</th>
                        <th>Recursos Disponíveis</th>
                        <th className="actions">Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Sala A</td>
                        <td>50</td>
                        <td>Projetor, Quadro Branco</td>
                        <td className="btn-actions">
                        <button className="btn btn-edit">Editar</button>
                        <button className="btn btn-delete">Excluir</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sala B</td>
                        <td>30</td>
                        <td>TV, Flipchart</td>
                        <td className="btn-actions">
                            <button className="btn btn btn-edit">Editar</button>
                            <button className="btn btn-delete">Excluir</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Sala C</td>
                        <td>20</td>
                        <td>Quadro Branco</td>
                        <td className="btn-actions">
                        <button className="btn btn btn-edit">Editar</button>
                        <button className="btn btn-delete">Excluir</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
