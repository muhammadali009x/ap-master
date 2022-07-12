
const initialstate=[]

function AddProductCoverImage(state=initialstate, action){
    switch (action.type) {
        case "cover_image":
            return action.payload
        case "clear_cover_image":
            return initialstate

        default:
            return state
    }
}

export default AddProductCoverImage;