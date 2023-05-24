import React from 'react';
import "./style.css";

import FormularioLogin from '../../components/FormularioLogin';


export default function Login() {
  return (
    <>
      <div className="background-login">
        <FormularioLogin />
      </div>
    </>
  )
}