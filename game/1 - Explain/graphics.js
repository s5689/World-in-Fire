import { draw, getCenterX } from '../../js/lib';

export async function buildBox() {
  const _0 = {
    text: [
      '╔──────────────────────────────╗',
      '│ AD: Daño de Ataque.          │',
      '│                              │',
      '│ AP: Poder de Habilidad.      │',
      '│                              │',
      '│ AR: Armadura.                │',
      '│                              │',
      '│ MR: Resistencia Magica.      │',
      '│                              │',
      '│ HP: Vida (Health Points).    │',
      '│                              │',
      '│ MP: Puntos de Mana.          │',
      '│                              │',
      '│ LS: Robo de Vida (Life Steal)│',
      '│                              │',
      '│ STATS: Estadisticas.         │',
      '╚──────────────────────────────╝',
    ],
    color: [
      'F888888888888888888888888888888F',
      '8 EEE                          8',
      '8                              8',
      '8 DDD                          8',
      '8                              8',
      '8 666                          8',
      '8                              8',
      '8 555                          8',
      '8                              8',
      '8 AAA                          8',
      '8                              8',
      '8 BBB                          8',
      '8                              8',
      '8 CCC                          8',
      '8                              8',
      '8 999999                       8',
      'F888888888888888888888888888888F',
    ],
  };

  const xSize = _0.text[0].length - 1;
  const ySize = _0.text.length - 1;

  let x = getCenterX(_0.text[0]);
  let y = 3;

  // form
  // ►►►
  for (let k = 0; k <= xSize; k++) {
    draw({ x: x + k, y, t: _0.text[0][k], f: _0.color[0][k] });
    await sleep(12);
  }

  // ▼▼▼
  for (let k = 1; k <= ySize; k++) {
    draw({
      x: x + xSize,
      y: y + k,
      t: _0.text[k][xSize],
      f: _0.color[k][xSize],
    });
    await sleep(12);
  }

  // ◄◄◄
  for (let k = xSize; k >= 0; k--) {
    draw({
      x: x + k,
      y: y + ySize,
      t: _0.text[ySize][k],
      f: _0.color[ySize][k],
    });
    await sleep(12);
  }

  // ▲▲▲
  for (let k = ySize; k >= 0; k--) {
    draw({ x, y: y + k, t: _0.text[k][0], f: _0.color[k][0] });
    await sleep(12);
  }

  // txt
  for (let k = 2; k <= xSize - 1; k++) {
    for (let j = 1; j <= ySize - 1; j++) {
      draw({ x: x + k, y: y + j, t: _0.text[j][k], f: _0.color[j][k] });
      await sleep(1);
    }
  }
}
