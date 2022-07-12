const initialstate={
    category:"",
    description:""
}

function AddCategory(state=initialstate, action){
    switch (action.type) {
        case "add_category":
            return {
                ...state,...action.payload
            }
        case "clear_add_category":
            return initialstate

        default:
            return state
    }
}

export default AddCategory;