import React, {useEffect, useState} from 'react';
import './message.css';
import axios from "axios";
import {format} from "timeago.js";
const Message = ({own, message, currentUser}) => {
    const [sender, setSender] = useState(null)
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;


    useEffect(() => {
        if(own) {
            setSender(currentUser)
            return
        }
        const getSender = async () => {
            try{
                const res = await axios.get("/users?userId=" + message.sender);
                setSender(res.data)
            } catch (e) {
                console.log(e);
            }
        }
        getSender();
    }, [currentUser, message.sender, own])

    return (
        <div className={`message ${own && 'own'}`}>
            <div className='messageTop'>
                <img className='messageImg' src={sender?.profilePicture ? sender.profilePicture : publicFolder + "person/noAvatar.png" } alt="message icon"/>
                <p className='messageText'>{message.text}</p>
            </div>
            <div className='messageBottom'>
                {format(message.createdAt)}
            </div>
        </div>
    );
};

export default Message;
