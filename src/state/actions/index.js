export const depositMoney = (amount) =>{
    return(dispatch)=>{
        dispatch({
            type: "DEPOSITA",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) =>{
    return(dispatch)=>{
        dispatch({
            type: "PRELEVA",
            payload: amount
        })
    }
}