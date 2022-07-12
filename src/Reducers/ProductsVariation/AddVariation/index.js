const initialstate={
    variation_name:"",
    variation_values:[]
}

function AddVariation(state=initialstate, action){
    switch (action.type) {
        case "add_variation":
            return {
                ...state,...action.payload
            }
        case "clear_add_variation":
            return initialstate

        default:
            return state
    }
}

export default AddVariation;