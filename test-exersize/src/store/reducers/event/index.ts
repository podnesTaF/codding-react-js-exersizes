import {EventAction, EventActionEnum, EventState} from "./types";


const initialState: EventState = {
    events: [],
    guests: []
}
 const eventReducer = (state = initialState, action: EventAction) => {
    switch (action.type) {
        case EventActionEnum.SET_GUESTS:
            return {...state, guests: action.payload}
        case EventActionEnum.SET_EVENTS:
            return {...state, events: action.payload}
        default:
            return state
    }
}
export default eventReducer