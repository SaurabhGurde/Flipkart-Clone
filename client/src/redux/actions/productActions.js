import axios from "axios";
import * as actionType from "../constants/productConstants";
 
const URL = 'http://localhost:8000';

export const getProducts = () => async(dispatch)=>{
    try {
        const { data }= await axios.post(`${URL}/products`)
         dispatch({type:actionType.GET_PRODUCTS_SUCCESS, payload: data })
         
    } catch (error) {
        console.log('error calling getproducts', error.message)
        dispatch({type:actionType.GET_PRODUCTS_FAIL, payload: error.message })
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};