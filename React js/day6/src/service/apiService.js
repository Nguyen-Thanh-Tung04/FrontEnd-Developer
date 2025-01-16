import axios from 'axios';

const URL_PHOTO = "https://jsonplaceholder.typicode.com/photos";
const URL_API_GET_LIST_CARTS = "https://dummyjson.com/carts?limit=6";
const URL_API_GET_DETAIL_CART = "https://dummyjson.com/carts"; // Base URL for individual cart details

const ApiService = {
    apiGetListPhoto: async () => {
        return await axios(URL_PHOTO);
    },
    apiGetListCarts: async () => {
        return await axios(URL_API_GET_LIST_CARTS);
    },
    apiGetCartDetail: async (cartId) => {
        return await axios(`${URL_API_GET_DETAIL_CART}/${cartId}`);
    },
};

export default ApiService;
