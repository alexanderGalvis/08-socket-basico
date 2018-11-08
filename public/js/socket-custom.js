var socket = io();

//Escuchar
socket.on('connect', function(){
    console.log('Conectado al server');
});

socket.on('disconnect', function(){
    console.log('Perdimos conexion al server');
});

//Envian info
socket.emit('enviarMensaje',
{usuario:'alx',mensaje:'Hola'}
,function(res){
    console.log('Se disparo callback', res)
});
//Escucha    
socket.on('enviarMensaje',function(mensaje){
    console.log(mensaje);
})