const Emitter = require('events');

const emitter = new Emitter();

emitter.on('message', (data, second) => {
    console.log('Вы прислали сообщение ' + data);
    console.log('Второй аргумент ' + second);
});

// emitter.once('message', (data, second) => {
//     console.log('Вы прислали сообщение ' + data);
//     console.log('Второй аргумент ' + second);
// });

const MESSAGE = process.env.message ?? '';

if (MESSAGE){
    emitter.emit('message', MESSAGE, 123);
}
else {
    emitter.emit('message', 'Message is empty');
}

