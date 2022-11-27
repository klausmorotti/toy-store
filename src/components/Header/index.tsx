import { Container } from './styles';

// IMAGENS E ÍCONE
import LogoHeader from '../../assets/blocos-de-brinquedo.png';

// HOOKS ROTA
import { Link } from 'react-router-dom';

// CONTEXTO
import { useContext } from 'react';
import { Context } from '../../context/Context';

export const Header = () => {
    const { state, dispatch } = useContext(Context);

    return (
        <Container>
            <div className="contentArea">
                <div className="logoArea">
                    <Link to="/home">
                        <div className="logo">
                            <img src={LogoHeader} alt="Ícone Logo da Loja" />
                            <h2>Kids Toys</h2>
                        </div>
                    </Link>
                </div>

                <div className="menuArea">
                    <nav>
                        <ul>
                            <li><Link  to="/carrinho">Meu carrinho</Link></li>
                            <li><Link to="/meus-dados">Meu Perfil</Link></li>
                            <li onClick={ () => dispatch({
                                type:'RESET_CART'
                            }) }><Link to="/">Sair</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Container>
    )
}