import http from 'http';
import normalizePort from 'normalize-port';
import App from '../app';

const app = new App();

// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

server.listen(port);
