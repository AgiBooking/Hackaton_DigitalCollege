import React from 'react';
import "./style.css";

import Logo from '../../img/logo colorida.png'

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
                    <input type="submit" value="entrar" class="botao-enviar" />
                </form>

                <p className="cadastro">Não tem conta?
                    <a href="">Cadastre-se</a>
                </p>
            </div>
        </>
    )
}