
const initialstate={
    product_name_en:"",
    product_name_ar:"",
    product_category:"",
    product_sub_category:"",
    product_type:[],
    product_category:"",
    product_description_en:"",
    product_description_ar:"",
    status: false
}

function EditProductsDetails(state=initialstate, action){
    switch (action.type) {
        case "edit_product_details":
            return {
                ...state,...action.payload
            }
        case "clear_edit_product_details":
            return initialstate

        default:
            return state
    }
}

export default EditProductsDetails;