// HOOK DE CONTEXTO
import { createContext, useReducer } from "react";

// REDUCERS
import { UserInitialType, UserInitialValue, UserReducer } from '../reducers/UserReducer';
import { ItemCartType, CartInitialValue, CartReducer } from '../reducers/CartReducer';
import { ReducerActionType } from "../types/ReducerActionType";

// TIPO DOS VALORES INICIAIS DO REDUCER GERAL
type InitialStateType = {
    user:UserInitialType,
    cart:ItemCartType[]
}

// VALOR INICIAL DO REDUCER GERAL
const initalState:InitialStateType = {
    user: UserInitialValue,
    cart:CartInitialValue
}

// TIPAGEM DO CONTEXTO
type ContextType = {
    state:InitialStateType,
    dispatch:React.Dispatch<any>;
}

export const Context = createContext<ContextType>({
    state:initalState,
    dispatch:() => null
});

const mainReducer = (state:InitialStateType, action:ReducerActionType) => ({
    user: UserReducer(state.user, action),
    cart: CartReducer(state.cart, action)
});

type Children = {
    children:React.ReactNode
}

export const ContextProvider:React.FC<Children> = ({children}) => {
    const [state, dispatch] = useReducer(mainReducer, initalState);

    return (
        <Context.Provider value={ {state, dispatch} }>
            {children}
        </Context.Provider>
    )
}