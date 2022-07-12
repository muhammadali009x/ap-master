
import * as lang_en from "../../services/languages/english.json";
import * as lang_ar from "../../services/languages/arabic.json";

const initialstate=lang_en

function Languages(state=initialstate, action){
    console.log(action)
    switch (action.type) {
        case false:
            return lang_ar
        case true:
            return lang_en

        default:
            return state
    }
}

export default Languages;