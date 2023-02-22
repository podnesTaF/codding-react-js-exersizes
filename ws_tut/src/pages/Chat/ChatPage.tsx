import React, {useEffect, useState} from 'react';

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

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
    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    )
}

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        ws.addEventListener('getMessage', (e: any) => {
            console.log(e.data)
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)])
            console.log(JSON.parse(e.data))
        })

        return () => {
            ws.removeEventListener('message', () => {})
        }
    }, [])

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
    const [message, setMessage] = useState<string>('')
    const sendMessage = () => {
        if(!message) return
        ws.send(message)
        setMessage('')
    }

    return (
        <div className=''>
            <div>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={ws.readyState !== WebSocket.OPEN} onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default ChatPage;
