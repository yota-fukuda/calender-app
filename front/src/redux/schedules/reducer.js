import dayjs from "dayjs";
import { 
    SCHEDULES_ADD_ITEM,
    SCHEDULES_FETCH_ITEM,
    SCHEDULES_SET_LOADING,
    SCHEDULES_DELETE_ITEM,
    SCHEDULES_ASYNC_FAILURE,
    SCHEDULES_RESET_ERROR
} from "./actions";

const init = {
    items: [],
    isLoading: false
};

const schedulesReducer = (state=init, action) => {
    const { type, payload, error } = action;

    switch (type) {
        case SCHEDULES_SET_LOADING:
            return {
                ...state,
                isLoading: true
            };

        case SCHEDULES_ADD_ITEM:
            return {
                ...state,
                isLoading: false,
                items: [...state.items,payload ]
            };

        case SCHEDULES_FETCH_ITEM:
            return {
                ...state,
                isLoading: false,
                items: payload
            };

        case SCHEDULES_DELETE_ITEM:
            return {
                ...state,
                isLoading: false,
                items: payload
            };
        
        case SCHEDULES_ASYNC_FAILURE:
            return {
                ...state,
                error
            };
        case SCHEDULES_RESET_ERROR:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
};

export default schedulesReducer;

