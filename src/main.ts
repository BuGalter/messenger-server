import { start, } from './server/index';

try {
  start();
}
catch (err) {
  console.error('Unable to run app:', err);
}
