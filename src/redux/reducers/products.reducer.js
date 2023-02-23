export const products = (state=[], action) =>{
    console.log(action.payload)
    switch (action.type){
        case "SET_PRODUCTS":
            return action.payload;
            
        default:
            return state;
    }
}