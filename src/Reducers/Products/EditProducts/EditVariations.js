const initialstate = {
    currency: "",
    sku: "",
    unit: "",
    price: "",
}

function EditProductVaritions(state = initialstate, action) {
    switch (action.type) {
        case "edit_product_variations":
            return {
                ...state, ...action.payload
            }
        case "clear_edit_product_variations":
            return initialstate

        default:
            return state
    }
}

export default EditProductVaritions;