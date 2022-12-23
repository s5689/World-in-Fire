class Anim_1_explain {
  async start() {
    const _0 = {
      text: [
        "╔──────────────────────────────╗",
        "│ AD: Daño de Ataque.          │",
        "│                              │",
        "│ AP: Poder de Habilidad.      │",
        "│                              │",
        "│ AR: Armadura.                │",
        "│                              │",
        "│ MR: Resistencia Magica.      │",
        "│                              │",
        "│ HP: Vida (Health Points).    │",
        "│                              │",
        "│ MP: Puntos de Mana.          │",
        "│                              │",
        "│ LS: Robo de Vida (Life Steal)│",
        "│                              │",
        "│ STATS: Estadisticas.         │",
        "╚──────────────────────────────╝",
      ],
      color: [
        "F888888888888888888888888888888F",
        "8 EEE                          8",
        "8                              8",
        "8 DDD                          8",
        "8                              8",
        "8 666                          8",
        "8                              8",
        "8 555                          8",
        "8                              8",
        "8 AAA                          8",
        "8                              8",
        "8 BBB                          8",
        "8                              8",
        "8 CCC                          8",
        "8                              8",
        "8 999999                       8",
        "F888888888888888888888888888888F",
      ],
    };

    const xSize = _0.text[0].length - 1;
    const ySize = _0.text.length - 1;

    let x = getCenterX(_0.text[0]);
    let y = 3;

    // ►►►
    for (let k = 0; k <= xSize; k++) {
      draw(x + k, y, _0.text[0][k], _0.color[0][k]);
      await sleep(12);
    }

    // ▼▼▼
    for (let k = 1; k <= ySize; k++) {
      draw(x + xSize, y + k, _0.text[k][xSize], _0.color[k][xSize]);
      await sleep(12);
    }

    // ◄◄◄
    for (let k = xSize; k >= 0; k--) {
      draw(x + k, y + ySize, _0.text[ySize][k], _0.color[ySize][k]);
      await sleep(12);
    }

    // ▲▲▲
    for (let k = ySize; k >= 0; k--) {
      draw(x, y + k, _0.text[k][0], _0.color[k][0]);
      await sleep(12);
    }
  }
}