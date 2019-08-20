import http from 'http';
import reqFunction from './handler.mjs';

const server = new http.Server();

server.on ('request', reqFunction);

const emit = server.emit;
server.emit = (...args) => {
    console.log(args[0]);
    return emit.apply(server, args);
};

server.listen(8001);