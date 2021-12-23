
const reducer= (state = 0, action)=>{
    switch(action.type){
        case "DEPOSITA":
            return state+action.payload;
        case "PRELEVA":
            return state- action.payload;
        default:
            return state;
    }
};

export default reducer;
