
let subscribers = [] as subscriberType[];

let ws: WebSocket | null;

const closeHandler = () => {
    console.log('CLOSE')
    setTimeout(createChannel, 3000)
}

const getMessage = (e: MessageEvent) => {
    const newMessage = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessage))
};


const createChannel = () => {
    if(ws !== null) {
        ws.removeEventListener('close', closeHandler)
        ws.close()
    }
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', getMessage)
}

export const chatApi = {
    start() {
        createChannel()
    },
    stop() {
        subscribers = [];
        ws?.removeEventListener('close', closeHandler)
        ws?.removeEventListener('message', getMessage)
        ws?.close()
    },
    subscribe(callback: subscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
        unsubscribe(callback: subscriberType) {
            subscribers = subscribers.filter(s => s !== callback)
        },
    sendMessage(message: string) {
        ws?.send(message)
    }
}

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

type subscriberType = (messages: ChatMessageType[]) => void;

