// IMAGENS DOS BRINQUEDOS
import Carrinho from '../assets/carro-de-corrida.png';
import Boneca from '../assets/boneca.png';
import Pipa from '../assets/pipa.png';
import BolaFutebol from '../assets/bola-de-futebol.png';
import UrsoPelucia from '../assets/urso-teddy.png';
import Espada from '../assets/espada.png';
import ArminhaAgua from '../assets/arma-de-agua.png';
import KitCozinha from '../assets/utensilios-de-cozinha.png';

// TIPO DOS OBJETOS DO CARRINHO
type ItemType = {
    id:number;
    name:string;
    quantidade:string;
    cor:string;
    img:string;
}

// ARRAY COM BRINQUEDOS DISPONÍVEIS
export const toys:ItemType[] = [
    { id:1, name:'Carrinho', quantidade:'14', cor:'Vermelho', img:Carrinho },
    { id:2, name:'Boneca', quantidade:'20', cor:'Verde', img:Boneca },
    { id:3, name:'Pipa', quantidade:'43', cor:'Preto', img:Pipa },
    { id:4, name:'Bola de futebol', quantidade:'10', cor:'Branco', img:BolaFutebol },
    { id:5, name:'Urso de pelúcia', quantidade:'6', cor:'Marrom', img:UrsoPelucia },
    { id:6, name:'Espada', quantidade:'8', cor:'Prata', img:Espada },
    { id:7, name:'Arminha de água', quantidade:'15', cor:'Azul', img:ArminhaAgua },
    { id:8, name:'Kit cozinha', quantidade:'5', cor:'Rosa', img:KitCozinha }
]