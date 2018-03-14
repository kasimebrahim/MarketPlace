const itemsReducer = (state=[], {type, payload})=>{
    if(type=="searchedItems"){
        return payload;
    }
    return state;
};

export default itemsReducer;