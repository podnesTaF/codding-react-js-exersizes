import React, {useEffect, useState} from 'react';
import './conversation.css'
import axios from "axios";

const Conversation = ({conversation, currentUser}) => {
    const [user, setUser] = useState(null);
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);

        const getUser = async () => {
            try{
                const res = await axios.get("/users?userId=" + friendId);
                setUser(res.data)
            } catch (e) {
                console.log(e);
            }
        }

        getUser();

        console.log(user);
    }, [currentUser, conversation]);

    return (
        <div className='conversation'>
            <img className='conversationImg' src={user?.profilePicture ? publicFolder + user.profilePicture : publicFolder + "person/noAvatar.png" } alt="image"/>
            <span className='conversationName'>{user?.username}</span>
        </div>
    );
};

export default Conversation;
