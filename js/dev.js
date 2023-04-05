import { g, q } from './lib';

export default function dev() {
  palette();
  chars();
  colors();
}

function palette() {
  let k = 0;

  // Border de los Layer.
  q('.game', (e) => {
    e.style.border = '1px solid rgba(255, 255, 255, 0.02)';
  });

  // Margen de los Layer.
  document.documentElement.style.setProperty('--layerMargin', '-302px');

  COLORS.forEach((value) => {
    let x = k;

    if (k === 10) x = 'A';
    if (k === 11) x = 'B';
    if (k === 12) x = 'C';
    if (k === 13) x = 'D';
    if (k === 14) x = 'E';
    if (k === 15) x = 'F';

    g('guide').innerHTML += `<span style="color: ${value}">${x}: █ </span>`;

    k++;
  });
}

function chars() {
  const list = [
    '░',
    '▒',
    '▓',
    '█',
    '▄',
    '▌',
    '▐',
    '▀',

    '│',
    '┤',
    '├',
    '┌',
    '┐',
    '└',
    '┘',
    '┴',
    '┬',
    '─',
    '┼',

    '   ',
    '╡',
    '╞',
    '╒',
    '╕',
    '╘',
    '╛',
    '╨',
    '╥',
    '   ',
    '╪',

    '   ',
    '╢',
    '╟',
    '╓',
    '╖',
    '╙',
    '╜',
    '╧',
    '╤',
    '   ',
    '╫',

    '║',
    '╣',
    '╠',
    '╔',
    '╗',
    '╚',
    '╝',
    '╩',
    '╦',
    '═',
    '╬',
  ];

  let k = 0;
  list.forEach((value) => {
    g('chars').innerHTML += `<span> ${value} </span>`;

    if (value === '▀') g('chars').innerHTML += `<br /><br/>`;
    if (value === '┼') g('chars').innerHTML += `<br /><br/>`;
    if (value === '╪') g('chars').innerHTML += `<br /><br/>`;
    if (value === '╫') g('chars').innerHTML += `<br /><br/>`;

    k++;
  });
}

function colors() {
  g('colors_btn').addEventListener('click', () => {
    const state = g('colors').style;

    if (state.display === 'none') state.display = 'block';
    else state.display = 'none';
  });

  g('colors').style.display = 'none';
  g('colors_btn').style.display = 'block';
  q('.dev_colors', (e) => {
    e.style.display = 'inline-grid';
  });

  for (let k = 0; k < COLORS.length - 1; k++) {
    for (let j = 0; j < COLORS.length - 1; j++) {
      let txt = `
        <span style="background-color: ${COLORS[k]}; color: ${COLORS[j]}">
          ¡Este es un texto de prueba!
        </span>
      `;

      g(`colors${k}`).innerHTML += txt;
    }
  }
}
