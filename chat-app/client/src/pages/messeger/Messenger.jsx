import React, {useContext, useEffect, useRef, useState} from 'react';
import './messenger.css';
import Topbar from '../../components/topbar/Topbar';
import Conversation from "../../components/conversations/Conversaton";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import {io} from "socket.io-client";


// const ws = new WebSocket('ws://localhost:8900');

const Messenger = () => {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages]   = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {user} = useContext(AuthContext);

    const socketRef = useRef(io("ws://localhost:8900"));
    const scrollRef = useRef();

    useEffect(() => {
        ws.addEventListener("getMessage", (e) => {
            console.log(e.data)
            setArrivalMessage({
                sender: e.data.senderId,
                text: e.data.text,
                createdAt: Date.now()
            })
        })
    }, []);

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender)
        && setMessages((prev) => [...prev, arrivalMessage])
    }, [arrivalMessage, currentChat])


    useEffect(() => {
        ws.send(user._id)
        socketRef.current.on("getUsers", (users) => {
            setOnlineUsers(user.followings.filter(f => users.some(u => u.userId === f)))
        })
    }, [user]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("/conversations/" + user._id);
                console.log(res.data)
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = currentChat && await axios.get("/messages/" + currentChat._id);
                setMessages(res?.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat])

    const sendMessage = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat?._id
        };

        const receiverId = currentChat?.members.find((m) => m !== user._id);

        socketRef.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: newMessage
        })

        try {
            const res = await axios.post("/messages", message);
            setMessages([...messages, res.data]);
            setNewMessage('');
        } catch (err) {
            console.log(err);
        }
    }
    

    useEffect(() => {
       scrollRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [messages])


    

    return (
        <>
            <Topbar/>
            <div className='messenger'>
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for a friends" className='chatMenuInput'/>
                        {conversations && conversations.map((c) => (
                            <div key={c._id} onClick={() => setCurrentChat(c)}>
                                    <Conversation conversation={c}
                                              currentUser={user}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {currentChat ? (
                               <>
                                   <div className="chatBoxTop">
                                       {messages?.map((m) => (
                                           <div ref={scrollRef}>
                                               <Message key={m._id} message={m} own={m.sender === user._id} currentUser={user}/>
                                           </div>
                                       ))}
                                   </div>
                                   <div className='chatBoxBottom'>
                                    <textarea value={newMessage} onChange={(e) => (
                                        setNewMessage(e.target.value)
                                    )} className='chatMessageInput' placeholder='write something...'>

                                    </textarea>
                                       <button onClick={sendMessage} className='chatSubmitButton'>Send</button>
                                   </div>
                               </>
                            ) : (
                            <div className='noConversation'>
                            <h2>Open a conversation to start chat</h2>
                            </div>
                            )}
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline onlineUsers={onlineUsers} currentId={user._id} setCurrentChat={setCurrentChat}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Messenger;
