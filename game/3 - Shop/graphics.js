import { lay_shop, spr_nass_intro } from './sprites';
import { draw, wipeAllLayers } from '../../js/lib';

export async function intro() {
  // Fase 1
  for (let k = 0; k < 47; k++) {
    draw({ x: center, y: center, o: spr_nass_intro[k], l: 1 });
    await sleep(40);
  }

  // Parpadeo
  await sleep(150);
  draw({ x: center, y: center, o: spr_nass_intro[47], l: 1 });
  await sleep(500);

  // Cae Cadena
  for (let k = 48; k < 53; k++) {
    draw({ x: center, y: center, o: spr_nass_intro[k], l: 1 });
    await sleep(40);
  }

  await sleep(500);

  // Halar cadena
  for (let k = 53; k < 60; k++) {
    draw({ x: center, y: center, o: spr_nass_intro[k], l: 1 });
    await sleep(40);
  }

  // Ultimo Frame
  await sleep(600);
  draw({ x: center, y: center, o: spr_nass_intro[60], l: 1 });
  await sleep(150);

  wipeAllLayers();

  await sleep(1500);
}

export async function shop() {
  draw({ ol: lay_shop });
}
