import { setWindowSize } from '../js/lib';
import phase from './phase';
import dev from '../js/dev';
import '../js/input';

document.addEventListener('DOMContentLoaded', () => {
  setWindowSize();
  dev();

  document.fonts.ready.then(async () => {
    await sleep(500);
    phase.next();
  });
});
