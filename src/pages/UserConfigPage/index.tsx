// ESTILIZAÇÃO DA PÁGINA
import { Container } from "./styles";

// COMPONENTE DE CABEÇALHO
import { Header } from "../../components/Header";

// ÍCONES E IMAGENS
import userImage from '../../assets/user.png';

// CONTEXTO
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

export const UserConfigPage = () => {
    const { state, dispatch } = useContext(Context);
    let user = state.user;

    const [canEdit, setCanEdit] = useState<boolean>(false);

    return (
        <Container edit={canEdit}>
            <Header />

            <div className="resumeUserArea">
                <img src={userImage} alt="Ícone de foto do usuário" />

                <div className="infoUser">
                    <div className="nameUser">{ user.name } { user.lastName }</div>
                    <div className="categoryUser">Comprador</div>
                </div>
            </div>

            <div className="dataUserArea">
                <form action="">

                    <label htmlFor="">
                        Nome: <br />
                        <input type="text" value={user.name} disabled={ canEdit ? false : true } 
                        onChange={ (e) => dispatch({
                            type:'CHANGE_NAME',
                            payload:{
                                name:e.target.value
                            }
                        }) }
                        />
                    </label>

                    <label htmlFor="">
                        Sobrenome: <br />
                        <input type="text" value={user.lastName} disabled={ canEdit ? false : true }
                        onChange={ (e) => dispatch({
                            type:'CHANGE_LASTNAME',
                            payload:{
                                lastName:e.target.value
                            }
                        }) }
                        />
                    </label>

                    <label htmlFor="">
                        CPF: <br />
                        <input type="text" value={user.cpf} disabled={ canEdit ? false : true }
                        onChange={ (e) => dispatch({
                            type:'CHANGE_CPF',
                            payload:{
                                cpf:e.target.value
                            }
                        }) }
                        />
                    </label>

                    <label htmlFor="">
                        Email: <br />
                        <input type="email" value={user.email} disabled={ canEdit ? false : true }
                        onChange={ (e) => dispatch({
                            type:'CHANGE_EMAIL',
                            payload:{
                                email:e.target.value
                            }
                        }) }
                        />
                    </label>

                    <label htmlFor="">
                        Idade: <br />
                        <input type="number" value={user.age} disabled={ canEdit ? false : true }
                        onChange={ (e) => dispatch({
                            type:'CHANGE_AGE',
                            payload:{
                                age:e.target.value
                            }
                        }) }
                        />
                    </label>

                    <label htmlFor="">
                        Telefone: <br />
                        <input type="text" value={user.tel} disabled={ canEdit ? false : true }
                        onChange={ (e) => dispatch({
                            type:'CHANGE_CITY',
                            payload:{
                                city:e.target.value
                            }
                        }) }
                        />
                    </label>

                    <label htmlFor="">
                        CEP: <br />
                        <input type="text" value={user.cep} disabled={ canEdit ? false : true }
                        onChange={ (e) => dispatch({
                            type:'CHANGE_TEL',
                            payload:{
                                tel:e.target.value
                            }
                        }) }
                        />
                    </label>

                    <label htmlFor="">
                        Cidade: <br />
                        <input type="text" value={user.city} disabled={ canEdit ? false : true }
                        onChange={ (e) => dispatch({
                            type:'CHANGE_CEP',
                            payload:{
                                cep:e.target.value
                            }
                        }) }
                        />
                    </label>

                </form>

                <button onClick={ () => setCanEdit(!canEdit) }>{ canEdit ? 'Desabilitar edição' : 'Habilitar Edição' }</button>
            </div>
        </Container>
    )
}