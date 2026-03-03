// Readable - чтение
// Writable - запись
// Duplex - для чтения и записи Readable и Writable
// Transform - такой же, как и Duplex, но может изменить данные по мере чтения

const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve(__dirname, 'count.txt'), (err, data) => {
//     if(err){
//         throw err;
//     }
//     console.log(data);
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'count.txt'));
//
// // Один чанк по дефолту 64 Кб
// stream.on('data', (chunk) => {
//     console.log(chunk);
// });
// stream.on('open', () => console.log('Start read'));
// stream.on('end', () => console.log('End read'));
// stream.on('error', (e) => console.log(e));


// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'text.txt'));
// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n');
// }
// writableStream.end();
// writableStream.close();
// writableStream.destroy();
// writableStream.on('error');

