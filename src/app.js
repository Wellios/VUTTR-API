import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import routes from './routes';
import swaggerDocument from '../swagger.json';

import 'dotenv/config';
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
