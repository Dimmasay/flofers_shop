import * as React from "react";
import {useReducer} from "react";

enum NamesTypeAction {
    ADD_NEW_PRODUCT_TO_BASKET = './ADD_NEW_PRODUCT_TO_BASKET',
    INCREASE_QUANTITY_PRODUCT = './INCREASE_QUANTITY_PRODUCT',
    DECREASE_QUANTITY_PRODUCT = './DECREASE_QUANTITY_PRODUCT',
    DELETE_PRODUCT = './DELETE_PRODUCT',
    RESULT_SUM = './RESULT_SUM',
    QUANTITY_ALL = './QUANTITY_ALL',
    RESET_BASKET = './RESET_BASKET',
    TOGGLE_ADD_ARTICLE = './TOGGLE_ADD_ARTICLE',
}


export type BasketContextType = {
    basketState: StateType,
    addProductToBasket: (product: ProductType, state?: StateType) => void,
    decreaseQuantityProduct: (id: number) => void,
    increaseQuantityProduct: (id: number) => void,
    deleteProduct: (id: number) => void,
    setResetBasket: () => void,
    toggleAddArticle: (id: number, value: boolean) => void
}
export type ItemBasketType = {
    name: string,
    id: number,
    price: number,
    image: string,
    quantity: number,
    addArticle: boolean,
    sum: number
}
export type ProductType = {
    name: string,
    id: number,
    price: number,
    image: string,
}
export type StateType = {
    quantityAll: number | null
    resultSum: number
    basket: ItemBasketType[]
}


let initialState: StateType = {
    quantityAll: null,
    resultSum: 0,
    basket: []
}


export const BasketReducerContext = React.createContext<BasketContextType | null>(null)


type ActionTypes = addNewProductToBasketType | increaseQuantityProductType |
    decreaseQuantityProductType | deleteProductType | getResultSumType
    | getQuantityAllType | setResetBasketType | toggleAddArticleType


const basketReducer = (state: StateType, action: ActionTypes): any => {
    switch (action.type) {

        case NamesTypeAction.ADD_NEW_PRODUCT_TO_BASKET:
            let newElement: ItemBasketType = {
                name: action.product.name,
                id: action.product.id,
                price: action.product.price,
                image: action.product.image,
                quantity: 1,
                addArticle: false,
                sum: action.product.price
            }
            return {...state, basket: [...state.basket, newElement]}

        case NamesTypeAction.INCREASE_QUANTITY_PRODUCT:
            return {
                ...state,
                basket: [...state.basket.map(el => {
                    // return el.id === action.id
                    //     ? {
                    //         ...el,
                    //         sum: el.price * el.quantity,
                    //         quantity: el.quantity ++,
                    //     }
                    //     : el
                    return el.id === action.id
                        ? {
                            ...el,
                            sum: el.price * (el.quantity +1) ,
                            quantity: el.quantity +1,
                        }
                        : el
                })]
            }
        case NamesTypeAction.DECREASE_QUANTITY_PRODUCT:
            return {
                ...state, basket: [...state.basket.map(el => {
                    return el.id === action.id && el.quantity >= 1
                        ? {
                            ...el,
                            sum: el.price * (el.quantity -1),
                            quantity: el.quantity -1
                        }
                        : el
                })]
            }
        case NamesTypeAction.DELETE_PRODUCT:

            return {...state, basket: [...state.basket.filter(el => el.id !== action.id)]}

        case NamesTypeAction.RESULT_SUM :

            return {
                ...state, resultSum: state.basket.reduce((acc, curr) => {
                    return acc + curr.quantity * curr.price
                }, 0)
            }
        case NamesTypeAction.QUANTITY_ALL :

            return {
                ...state, quantityAll: state.basket.reduce((acc, curr) => {
                    return acc + curr.quantity
                }, 0)
            }
        case NamesTypeAction.RESET_BASKET :
            return {
                ...state,
                quantityAll: null,
                resultSum: 0,
                basket: []
            }
        case NamesTypeAction.TOGGLE_ADD_ARTICLE:
            console.log(action.id)
            return {
                ...state,
                basket: [...state.basket.map(el => {
                        return (el.id === action.id)
                            ? {...el, addArticle: action.value}
                            : {...el, addArticle: !action.value}
                    }
                )]
            }
        default:
            return state
    }

}


type addNewProductToBasketType = {
    type: NamesTypeAction.ADD_NEW_PRODUCT_TO_BASKET,
    product: ProductType
}
type decreaseQuantityProductType = {
    type: NamesTypeAction.DECREASE_QUANTITY_PRODUCT,
    id: number
}
type increaseQuantityProductType = {
    type: NamesTypeAction.INCREASE_QUANTITY_PRODUCT,
    id: number
}
type deleteProductType = {
    type: NamesTypeAction.DELETE_PRODUCT,
    id: number
}
type getResultSumType = {
    type: NamesTypeAction.RESULT_SUM,
}
type getQuantityAllType = {
    type: NamesTypeAction.QUANTITY_ALL,
}
type setResetBasketType = {
    type: NamesTypeAction.RESET_BASKET
}
type toggleAddArticleType = {
    type: NamesTypeAction.TOGGLE_ADD_ARTICLE,
    id: number,
    value: boolean

}


// @ts-ignore
export const BasketReducer: any = ({children}) => {

// @ts-ignore
    const [basketState, dispatch] = useReducer(basketReducer, initialState)

    const addNewProductToBasket = (product: ProductType) => {
        dispatch({type: NamesTypeAction.ADD_NEW_PRODUCT_TO_BASKET, product})
        getResultSum()
        getQuantityAll()

    }
    const decreaseQuantityProduct = (id: number) => {
        dispatch({type: NamesTypeAction.DECREASE_QUANTITY_PRODUCT, id})
        getResultSum()
        getQuantityAll()

    }
    const increaseQuantityProduct = (id: number) => {
        dispatch({type: NamesTypeAction.INCREASE_QUANTITY_PRODUCT, id})
        getResultSum()
        getQuantityAll()

    }
    const deleteProduct = (id: number) => {
        dispatch({type: NamesTypeAction.DELETE_PRODUCT, id})
        getResultSum()
        getQuantityAll()
    }
    const getResultSum = () => {
        dispatch({type: NamesTypeAction.RESULT_SUM})
    }

    const getQuantityAll = () => {
        dispatch({type: NamesTypeAction.QUANTITY_ALL})
    }
    const setResetBasket = () => {
        dispatch({type: NamesTypeAction.RESET_BASKET})
    }
    const toggleAddArticle = (id: number, value: boolean) => {
        dispatch({type: NamesTypeAction.TOGGLE_ADD_ARTICLE, id, value})
    }


    const addProductToBasket = (product: ProductType, state: StateType = basketState) => {
        if (!state.basket.some(el => el.id === product.id)) {
            addNewProductToBasket(product)
        } else {
            increaseQuantityProduct(product.id)
        }
    }


    return (
        <BasketReducerContext.Provider
            value={{
                basketState,
                addProductToBasket, decreaseQuantityProduct,
                increaseQuantityProduct, deleteProduct,
                setResetBasket, toggleAddArticle,
            }}>
            {children}
        </BasketReducerContext.Provider>
    )
}



