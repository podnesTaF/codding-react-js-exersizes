const io = require('socket.io')(8900, {
    cors: {
        origin: "http://localhost:3000",
    }
});

let users = []

const addUser = (newUser, socketId) => {
!users.some(user => user.id === newUser.id) && users.push({ ...newUser, socketId })
}

const getUser = (userId) => {
return users.find(user => user.id === userId)
}

io.on('connection', socket => {
    console.log('User connected')
    socket.on("addUser", user => {
        addUser(user, socket.id)
        io.emit("getUsers", users)
    })

    // send and get message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId)
        io.to(user.socketId).emit("getMessage", {
            senderId,
            text
        })

    })

    socket.on("disconnect", () => {
        console.log('User disconnected')
        users = users.filter(user => user.socketId !== socket.id)
        io.emit("getUsers", users)
    })
})