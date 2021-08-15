import {AAD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE} from "../constans/actionTypes";

const favoriteReducer = (state = '', action) => {
    switch (action.type) {
        case AAD_PERSON_TO_FAVORITE: {
            return {

            }
        }
        case REMOVE_PERSON_FROM_FAVORITE: {

            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default favoriteReducer