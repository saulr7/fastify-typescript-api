import Fastify, { FastifyInstance } from 'fastify';
import { userRoutes } from './routes';

class App {
  private app: FastifyInstance;

  constructor() {
    this.app = Fastify({});
    this.routes();
  }

  routes() {
    this.app.get('/ping', (_, res) => {
      res.send({ ok: true, msg: 'pong' });
    });

    this.app.register(userRoutes, { prefix: 'user' });
    this.app.all('/', async () => ({ ok: true, msg: '/' }));
  }

  build() {
    return this.app;
  }
}

export default App;
