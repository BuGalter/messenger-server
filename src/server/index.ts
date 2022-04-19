import * as Hapi from '@hapi/hapi';
import * as Inert from '@hapi/inert';
import config from './config/config';
import routes from './routes';
import { connectDb, } from './models';

const createServer = async (): Promise<Hapi> => {
  const server = Hapi.server({
    port: config.server.port,
    host: config.server.host,
  });

  await server.register([Inert]);

  await server.route(routes);

  return server;
};

const init = async (): Promise<Hapi> => {
  const server = await createServer();
  await server.initialize();
  return server;
};

const start = async (): Promise<Hapi> => {
  await connectDb();
  const server = await createServer();
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
  return server;
};

export { init, start, };
