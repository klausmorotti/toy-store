// TIPO DA ACTION DO REDUCER
import { ReducerActionType } from '../types/ReducerActionType';

// TIPO DOS DADOS DO CARRINHO
export type ItemCartType = {
    name:string;
    cor:string;
    img:string;
}

// DADOS INICIAIS DO CARRINHO
export const CartInitialValue:ItemCartType[] = [];

// REDUCER
export const CartReducer = (state:ItemCartType[], action:ReducerActionType) => {
    switch(action.type) {
        case 'ADD_ITEM_CART':
            let newState = [...state];
            newState.push({
                name:action.payload.name,
                cor:action.payload.cor,
                img:action.payload.img
            });
            return newState;
        break;
        case 'RESET_CART':
            return CartInitialValue;
        break;
    }

    return state;
}