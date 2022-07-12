
const initialstate={
    unit:"",
    short_name:"",
    allow_decimal_category:"",
}

function AddUnits(state=initialstate, action){
    switch (action.type) {
        case "add_units":
            return {
                ...state,...action.payload
            }
        case "clear_add_units":
            return initialstate

        default:
            return state
    }
}

export default AddUnits;