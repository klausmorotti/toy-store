// ESTILIZAÇÃO DA PÁGINA
import { Container } from "./styles";

// COMPONENTE DE CABEÇALHO
import { Header } from "../../components/Header";

import urso from '../../assets/urso-de-pelucia.png';
import { toys } from "../../data/toys";

// CONTEXTO
import { useContext } from "react";
import { Context } from "../../context/Context";

export const CartPage = () => {
    const { state, dispatch } = useContext(Context);
    let cart = state.cart;

    return (
        <Container>
            <Header />    

            <div className="cartArea">
                <div className="cart">
                    { cart.map((toy, index) => (
                        <div key={index} className="item">
                            <img src={toy.img} alt="Imagem do brinquedo" />
                            <div className="descItem">
                                <h3>{ toy.name }</h3>
                                <p>{ toy.cor }</p>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </Container>
    )
}