import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../reducer/FilterReducer';

const FilterContext = createContext();


const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: 'lowest',
    filter: {
        text: '',
        category: 'All',
        company: 'All',
        colors: 'All',
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }

}


export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext()

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({ type: 'SET_GRIDVIEW' })
    }
    const setListView = () => {
        return dispatch({ type: 'SET_LISTVIEW' })
    }

    // sorting function price filter
    const sorting = (e) => {
        let selectValue = e.target.value;
        console.log(selectValue, 'selectValue');
        return dispatch({ type: 'GET_SORT_VALUE', payload: selectValue })
    }

    //sorting search

    const updateFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, 'name');
        console.log(value, 'value');

        return dispatch({ type: 'UPDATE_FILTERS_VALUES', payload: { name, value } })
        // return dispatch({type : 'UPDATE_FILTERS_VALUES' , payload : {value} })

    }

    //clear filter 
    const clearFilter = () => {
        dispatch({ type: 'CLEAR_ALL_FILTER' })
    }

    // to sort the product 
    useEffect(() => {
        dispatch({ type: 'FILTER_PRODUCTS' })
        dispatch({ type: 'SORTING_PRODUCT' })
    }, [state.sorting_value, state.filter])

    useEffect(() => {
        dispatch({ type: 'LOAD_FILTER_PRODUCT', payload: products })
    }, [products])

    return <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilter }}>{children}</FilterContext.Provider>

}

export const useFilterContext = () => {
    return useContext(FilterContext);
};