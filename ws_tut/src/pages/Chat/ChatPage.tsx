import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../store/chat-reducer";
import {AppStateType} from "../../store/redux-store";

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: React.FC = () => {
    return (
        <div className='chat'>
            <Chat />
        </div>
    );
};

const Chat: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    )
}

const Messages: React.FC = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)


    return (
        <div className='messages'>
            {messages.map((m, i) => <Message key={i} message={m} />)}
        </div>
    )
}

const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    return (
        <div className=''>
            <img src={message.photo} className='avatar' height={50} alt="avatar"/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
}

const AddMessageForm: React.FC = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const [isReady, setIsReady] = useState<'pending' | 'ready'>('pending')
    
    
    const sendMessageHandler = () => {
        if(!message) return
        dispatch(sendMessage(message))
        setMessage('')
    }

    return (
        <div className=''>
            <div>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={false} onClick={sendMessageHandler}>Send</button>
            </div>
        </div>
    )
}

export default ChatPage;
