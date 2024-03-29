import { clean, draw } from '../../js/lib';
let fire_loop = true;

export async function wif_logo() {
  const sprite = [
    {
      text: [
        '__          __        _     _ ',
        '\\ \\        / /       | |   | |',
        ' \\ \\  /\\  / /__  _ __| | __| |',
        "  \\ \\/  \\/ / _ \\| '__| |/ _` |",
        '   \\  /\\  / (_) | |  | | (_| |',
        '    \\/  \\/ \\___/|_|  |_|\\__,_|',
      ],
    },
    {
      text: [
        '__          __        _     _   _       ',
        '\\ \\        / /       | |   | | (_)      ',
        ' \\ \\  /\\  / /__  _ __| | __| |  _ _ __  ',
        "  \\ \\/  \\/ / _ \\| '__| |/ _` | | | '_ \\ ",
        '   \\  /\\  / (_) | |  | | (_| | | | | | |',
        '    \\/  \\/ \\___/|_|  |_|\\__,_| |_|_| |_|',
      ],
    },
    {
      text: [
        '__          __        _     _   _         ______ _           ',
        '\\ \\        / /       | |   | | (_)       |  ____(_)          ',
        ' \\ \\  /\\  / /__  _ __| | __| |  _ _ __   | |__   _ _ __ ___  ',
        "  \\ \\/  \\/ / _ \\| '__| |/ _` | | | '_ \\  |  __| | | '__/ _ \\ ",
        '   \\  /\\  / (_) | |  | | (_| | | | | | | | |    | | | |  __/ ',
        '    \\/  \\/ \\___/|_|  |_|\\__,_| |_|_| |_| |_|    |_|_|  \\___| ',
      ],
    },
  ];

  draw({ x: 9, y: 1, o: sprite[0], f: C });
  await sleep(1000);

  draw({ x: 9, y: 1, o: sprite[1], f: C });
  await sleep(1000);

  draw({ x: 9, y: 1, o: sprite[2], f: C });
  await sleep(1000);

  await draw({
    x: 0,
    y: 8,
    t: '--------------------------------------------------------------------------------',
    f: 3,
    m: right,
    s: 10,
  });
}

export async function fire() {
  const _0 = [
    {
      text: [
        ',       ',
        " '      ",
        '  `     ',
        '   ^    ',
        '   ,.   ',
        '  ,.,.  ',
        ' ,.,.,. ',
        ' ------ ',
      ],
      color: [
        'E       ',
        ' 8      ',
        '  4     ',
        '   C    ',
        '   E6   ',
        '  E6E6  ',
        ' E6E6E6 ',
        ' 888888 ',
      ],
    },
    {
      text: [
        '        ',
        "'       ",
        ' `      ',
        '  ^,    ',
        '   .,   ',
        '  .,.,  ',
        ' .,.,., ',
        ' ------ ',
      ],
      color: [
        '        ',
        '8       ',
        ' 4      ',
        '  CE    ',
        '   6E   ',
        '  6E6E  ',
        ' 6E6E6E ',
        ' 888888 ',
      ],
    },
    {
      text: [
        '        ',
        '`       ',
        ' ^,     ',
        "   '    ",
        '   ,.   ',
        '  ,.,.  ',
        ' ,.,.,. ',
        ' ------ ',
      ],
      color: [
        '        ',
        '4       ',
        ' CE     ',
        '   8    ',
        '   E6   ',
        '  E6E6  ',
        ' E6E6E6 ',
        ' 888888 ',
      ],
    },
    {
      text: [
        '        ',
        '^,      ',
        "  '     ",
        '   `    ',
        '   .,   ',
        '  .,.,  ',
        ' .,.,., ',
        ' ------ ',
      ],
      color: [
        '        ',
        'CE      ',
        '  8     ',
        '   4    ',
        '   6E   ',
        '  6E6E  ',
        ' 6E6E6E ',
        ' 888888 ',
      ],
    },
  ];

  let k = 0;
  while (fire_loop) {
    draw({ x: 0, y: 0, o: _0[k] });
    draw({ x: 71, y: 0, o: _0[k] });

    await sleep(250);

    k++;
    if (k === 4) k = 0;
  }
}

export async function removeAll() {
  // Detener fire sprite
  fire_loop = false;

  // Limpiar Logo
  for (let k = 0; k < 8; k++) {
    clean({
      x: 0,
      y: 7 - k,
      t: '                                                                                ',
    });

    await sleep(100);
  }

  // Limpiar Barra
  await clean({
    x: 0,
    y: 8,
    t: '--------------------------------------------------------------------------------',
    m: inside,
    s: 10,
  });

  // Limpiar Menu de opciones
  clean({ x: center, y: 13, t: ' Nueva Partida ', m: right });
  await clean({ x: center, y: 14, t: '         Salir ', m: left });
}
