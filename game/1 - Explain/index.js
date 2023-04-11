import { input } from '../../js/input';
import { buildBox } from './graphics';
import { draw } from '../../js/lib';
import phase from '../phase';

export async function _1_explain() {
  await buildBox();

  draw({
    x: center,
    y: 1,
    t: ' Definicion de Abreviaturas ',
    f: F,
    b: 9,
    m: right,
    s: 10,
  });

  await draw({
    x: center,
    y: 22,
    t: 'Presiona una tecla para continuar.',
    f: C,
    m: right,
    s: 10,
  });

  input.bind(() => {
    input.unbind();
    phase.next();
  });
}
