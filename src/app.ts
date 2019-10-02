import express from 'express';
import routes from './routes';

class App {
  server = express();

  constructor () {
    this.middlewares();
    this.routes();
    this.server.listen(3001);
  }

  middlewares (): void {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
  }

  routes (): void {
    this.server.use(routes);
  }

}

export default new App().server;