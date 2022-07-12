
const initialstate = {
    type: "",
    value: "",
    sku: "",
    quantity: "",
    unit: "",
    price: "",
}

function AddProductVaritions(state = initialstate, action) {
    switch (action.type) {
        case "add_product_variations":
            return {
                ...state, ...action.payload
            }
        case "clear_product_variations":
            return initialstate

        default:
            return state
    }
}

export default AddProductVaritions;