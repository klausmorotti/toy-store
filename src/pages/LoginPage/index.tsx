// ESTILIZAÇÃO DA PÁGINA
import { useState } from "react";
import { Container } from "./styles";

// HOOKS DE ROTAS
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();

    const [userField, setUserField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    
    const sendLogin = () => {
        if( userField && passwordField ) {
            navigate('/home');
        } else {
            alert('Preencha todos os campos!');
        }
    }

    return (
        <Container>
            <div className="loginArea">
                <h3>Login</h3>

                <form action="">
                    <input type="email" name="usuario" placeholder="Informe seu E-mail" value={userField}
                    onChange={ (e) => setUserField(e.target.value)}
                    />
                    <input type="password" name="senha" placeholder="Informe sua senha" value={passwordField}
                    onChange={ (e) => setPasswordField(e.target.value) }
                    />
                </form>

                <button onClick={sendLogin}>Entrar</button>
            </div>
        </Container>
    )
}