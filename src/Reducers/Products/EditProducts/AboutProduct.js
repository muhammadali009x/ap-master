
const initialstate = {
    color: "",
    size: "",
    quantity: "",
}

function EditAboutProduct(state = initialstate, action) {
    console.log("action", action)
    switch (action.type) {
        case "edit_about_products":
            return {
                ...state, ...action.payload
            }
        case "clear_edit_about_products":
            return initialstate

        default:
            return state
    }
}

export default EditAboutProduct;