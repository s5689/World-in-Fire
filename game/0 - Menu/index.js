import { fire, wif_logo, removeAll } from './graphics';
import { input } from '../../js/input';
import { draw } from '../../js/lib';
import phase from '../phase';

let opc = 0;

export async function _0_menu() {
  await wif_logo();
  fire();

  input.bind((e) => handleInput(e));
  renderMenu();
}

function renderMenu() {
  switch (opc) {
    case 0: {
      draw({ x: M, y: 13, t: ' Nueva Partida ', b: C });
      draw({ x: M, y: 14, t: ' Salir ' });

      break;
    }

    case 1: {
      draw({ x: M, y: 13, t: ' Nueva Partida ' });
      draw({ x: M, y: 14, t: ' Salir ', b: C });

      break;
    }
  }
}

function handleInput(e) {
  if (e === 'ArrowUp') opc--;
  if (e === 'ArrowDown') opc++;
  if (e === 'Enter') handleEnter();

  if (opc < 0) opc = 1;
  if (opc > 1) opc = 0;

  renderMenu();
}

async function handleEnter() {
  input.unbind();

  await removeAll();
  if (opc === 0) phase.next();
  if (opc === 1) phase.end();
}
