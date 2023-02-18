import React from 'react';
import './chatOnline.css';
const ChatOnline = () => {
    return (
        <div className='chatOnline'>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className='chatOnlineImg' src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="image"/>
                    <div className="chatOnlineBadge">
                    </div>
                </div>
                <span className="chatOnlineName">John Doe</span>
            </div>
        </div>
    );
};

export default ChatOnline;
