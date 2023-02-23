import {chatApi, ChatMessageType} from "../api/chat-api";
import {Dispatch} from "redux";

let initialState = {
    messages: [] as ChatMessageType[]
}

const chatReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages].filter((m, index, array) => index >= array.length - 100)
            }
        default:
            return state
    }
}

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: 'SN/chat/MESSAGES_RECEIVED', payload: {messages}
    } as const)
}


let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandler = (dispatch: Dispatch) => {
    if(_newMessageHandler === null) {
        _newMessageHandler = (messages: ChatMessageType[]) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}


// @ts-ignore
export const startMessagesListening = (): ThunkType => async (dispatch: any) => {
    chatApi.start()
    chatApi.subscribe(newMessageHandler(dispatch))
}

// @ts-ignore
export const stopMessagesListening = (): ThunkType => async (dispatch: any) => {
    chatApi.unsubscribe(newMessageHandler(dispatch))
    chatApi.stop()
}

// @ts-ignore
export const sendMessage= (message: string): ThunkType => async (dispatch: any) => {
    chatApi.sendMessage(message)
}

export default chatReducer;

export type InitialStateType = typeof initialState;