// TIPO DA ACTION DO REDUCER
import { ReducerActionType } from "../types/ReducerActionType"

// TIPO DOS DADOS INICIAIS DO REDUCER
export type UserInitialType = {
    name:string,
    lastName:string,
    cpf:string,
    email:string,
    age:number,
    city:string,
    tel:string,
    cep:string
}

// DADOS INICIAIS DO REDUCER
export const UserInitialValue:UserInitialType = {
    name:'Klaus',
    lastName:'Morotti',
    cpf:'176.554.896-01',
    email:'klaus@hotmail.com.br',
    age:18,
    city:'Rio de Janeiro',
    tel:'(21) 99784-8989',
    cep:'16070-480'
}

export const UserReducer = (state:UserInitialType, action:ReducerActionType) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.payload.name};
        break;
        case 'CHANGE_LASTNAME':
            return {...state, lastName: action.payload.lastName};
        break;
        case 'CHANGE_CPF':
            return {...state, cpf: action.payload.cpf};
        break;
        case 'CHANGE_EMAIL':
            return {...state, email: action.payload.email};
        break;
        case 'CHANGE_AGE':
            return {...state, age: action.payload.age};
        break;
        case 'CHANGE_CITY':
            return {...state, city: action.payload.city};
        break;
        case 'CHANGE_TEL':
            return {...state, tel: action.payload.tel};
        break;
        case 'CHANGE_CEP':
            return {...state, cep: action.payload.cep};
        break;
    }

    return state;
}