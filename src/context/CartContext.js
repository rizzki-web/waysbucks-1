import { createContext, useReducer } from 'react'

export const UserContext = createContext()

const dataCart = {
    id:'',
    title:'',
    topping:[]
}
