// ESTILIZAÇÃO DA PÁGINA
import { Container } from "./styles";

// COMPONENTE DE CABEÇALHO
import { Header } from '../../components/Header';

// BRINQUEDOS DISPONÍVEIS
import { toys } from "../../data/toys";

// CONTEXTO
import { useContext } from "react";
import { Context } from "../../context/Context";

export const HomePage = () => {
    const { state, dispatch } = useContext(Context);

    return (
        <Container>
            <Header />

            <div className="toysArea">
                <div className="toys">
                    { toys.map((toy, index) => (
                        <div key={index} className="toy">
                            <img src={toy.img} alt="Imagem Brinquedo" />
                            <h2>{ toy.name }</h2>
                            <p><strong>{ toy.cor }</strong></p>
                            <span>Quantidade: <strong>{ toy.quantidade }</strong></span>

                            <button onClick={ () => dispatch({
                                type:'ADD_ITEM_CART',
                                payload: {
                                    name:toy.name,
                                    cor:toy.cor,
                                    img:toy.img
                                }
                            }) }>Adicionar ao carrinho</button>
                        </div>
                    )) }
                </div>
            </div>
        </Container>
    )
}