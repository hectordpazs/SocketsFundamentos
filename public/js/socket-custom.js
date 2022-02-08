const socket = io();

//escuchar
socket.on('connect' , function(){
    console.log('Conectado al servidor');
});

//escuchar
socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});

//Enviar informacion:
socket.emit('enviarMensaje', {
    usuario: 'Hector',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log("Respuesta del servidor: " + resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ' , mensaje);
})