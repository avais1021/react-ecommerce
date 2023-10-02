import axios from "axios";
import React , { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ProductReducer';


const AppContext = createContext();

const Api = 'https://api.pujakaitem.com/api/products';

const initialState = {
    isLoading : false,
    isError : false,
    products : [] ,
    featureProducts : [] ,  
    isSingleLoading : false ,
    singleProduct : {},

}

const AppProvider = ({ children }) => {

    const [state , dispatch] = useReducer(reducer , initialState);

    const getProducts = async (url) => {

        dispatch({type : 'SET_LOADING'})
      try {
          const res = await axios.get(url);
          const products = await res.data;
          dispatch({type : 'SET_API_DATA' , payload : products})
          console.log(products)
      } catch (error) {
        dispatch({type : 'API_ERROR'})
      }

    }

    // api call for single products 
    const getSingleProduct = async (url) => {
        dispatch({type : 'SET_SINGLE_LOADING'})
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type : 'SET_SINGLE_PRODUCT' , payload : singleProduct})
        } catch (error) {
            dispatch({type :'SET_SINGLE_ERROR'})
        }
    }

    useEffect (()=>{
        getProducts(Api);
    } , [])

    return (
        <AppContext.Provider value={{...state ,getSingleProduct }}>{children}</AppContext.Provider>
    )

}

    // customHook
    const useProductContext = () => {
        return useContext(AppContext)
    }

export { AppProvider , AppContext , useProductContext };


