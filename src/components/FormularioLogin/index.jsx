import React from 'react';
import "./style.css";
import Logo from '../../img/logo colorida.png';
import { Link } from 'react-router-dom';

export default function FormularioLogin() 
{
    return (
        <>
            <div className="box-login">
                <div>
                    <img src={Logo} alt="logo-agibooking" />
                </div>

                <form>
                    <input type="email" placeholder="Digite seu email" />
                    <input type="password" placeholder="Digite sua senha" />
                    <Link to="/dashboard"><input type="submit" value="entrar" className="botao-enviar" /></Link>
                </form>

                <p className="cadastro">Não tem conta?
                    <a href="">Cadastre-se</a>
                </p>
            </div>
        </>
    )
}