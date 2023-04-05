import { clean, draw } from '../../js/lib';
import { input } from '../../js/input';
import { confeti, intro, lay_gacha_piedra, spr_piedra } from './graphics';
import { gacha, stopGacha } from './gacha';

export async function _2_gacha() {
  const prizes = [];

  await intro();

  // Gacha Arma
  waitKey();
  prizes.push(await gacha('item'));
  if (prizes[0] === 5) await Piedra();
  await confeti('item');

  await confirmNext();

  // Gacha Habilidad
  waitKey();
  prizes.push(await gacha('skill'));
  await confeti('skill');

  console.log(prizes);
}

function waitKey() {
  const t = ' Presiona <ENTER> para detener la ruleta...';
  draw({ x: M, y: 22, t });

  input.bind((e) => {
    if (e === 'Enter') {
      stopGacha();
      input.unbind();

      clean({ x: M, y: 22, t });
    }
  });
}

async function confirmNext() {
  const t = ' Presiona <ENTER> para continuar...';
  await draw({ x: M, y: 10, t, m: right, s: 10 });

  return new Promise((resp) => {
    input.bind(async (e) => {
      if (e === 'Enter') {
        input.unbind();
        await clean({ x: M, y: 10, t, m: right, s: 10 });

        resp(0);
      }
    });
  });
}

async function Piedra() {
  let k = 0;

  draw({ x: M, y: 2, t: 'La Piedra.', f: D });
  await sleep(1000);

  for (let y = -7; y <= 4; y++) {
    if (y <= 3) {
      clean({ x: M, y: y - 1, l: 2, o: spr_piedra });
      draw({ x: M, y, l: 2, o: spr_piedra });
    }

    if (y >= -4) {
      draw({ ol: lay_gacha_piedra[k] });
      k++;
    }

    await sleep(35);
  }

  await sleep(2000);
  draw({ x: M, y: 2, t: 'La Piedra.', f: D });
}
