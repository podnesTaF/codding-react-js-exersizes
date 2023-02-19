import React, {useEffect, useState} from 'react';
import './chatOnline.css';
import axios from "axios";
const ChatOnline = ({setCurrentChat, onlineUsers, currentId}) => {
    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get('/users/friends/' + currentId);
            setFriends(res.data);
        }

        getFriends()
    }, [currentId]);

    useEffect(() => {
        setOnlineFriends(friends.filter(f => onlineUsers.includes(f._id)))
    }, [onlineUsers, friends])
    const handleClick = async (user) => {
        try {
            const res = await axios.get("/conversations/find/" + currentId + "/" + user._id);
            setCurrentChat(res.data);
        } catch(e) {
             console.log(e)
        }
    }

    return (
        <div className='chatOnline'>
            {onlineFriends.map((o) => (
                <div key={o._id} className="chatOnlineFriend" onClick={() => handleClick(o)}>
                    <div className="chatOnlineImgContainer">
                        <img className='chatOnlineImg' src={o?.profilePicture ? o.profilePicture : publicFolder + "person/noAvatar.png" } alt="image"/>
                        <div className="chatOnlineBadge">
                        </div>
                    </div>
                    <span className="chatOnlineName">{o.username}</span>
                </div>
            ))}
        </div>
    );
};

export default ChatOnline;
