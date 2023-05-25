import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import CriarEvento from '../CriarEvento';
import './index.css'

export default function TabelaEvento(){
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
            <CriarEvento/>
            </Modal>
            <div className="box-header">
                <h1>EVENTOS</h1>
                <button onClick={handleOpen} className="btn1">Criar Evento</button>
            </div>
    
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
                <tr>
                    <td>Evento 1</td>
                    <td>50</td>
                    <td>Projetor, Quadro Branco</td>
                    <td>50</td>
                    <td className="btn-actions">
                    <button className="btn btn-edit">Editar</button>
                    <button className="btn btn-delete">Excluir</button>
                    </td>
                </tr>
                <tr>
                    <td>Evento 2</td>
                    <td>30</td>
                    <td>TV, Flipchart</td>
                    <td>30</td>
                    <td className="btn-actions">
                        <button className="btn btn btn-edit">Editar</button>
                        <button className="btn btn-delete">Excluir</button>
                    </td>
                </tr>
                <tr>
                    <td>Evento 3</td>
                    <td>20</td>
                    <td>Quadro Branco</td>
                    <td>20</td>
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