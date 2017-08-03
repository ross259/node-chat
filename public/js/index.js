var socket = io();

socket.on('connect',function(){
    console.log('Connected to server')

    socket.emit('createMessage', {
        from: 'ned@example.com',
        text: 'Are you going to camp?'
    });

});

socket.on('disconnect', function(){
    console.log('Disconnected from server')
});

socket.on('newMessage', function(msg){
    console.log("Message:", msg)
})