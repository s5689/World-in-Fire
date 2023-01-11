async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setWindowSize(limX = 80, limY = 25) {
  WX = limX;
  WY = limY;

  for (let k = -2; k <= 2; k++) {
    for (let y = 0; y < limY; y++) {
      let txt = "<tr id='" + k + "__y" + y + "' >";

      for (let x = 0; x < limX; x++) {
        txt += "<td ";
        txt += "id='" + k + "__" + x + "-" + y + "' ";
        txt += "class='pixel' ";
        txt += "></td>";
      }

      txt += "</tr>";

      $(`#layer_${k}`).append(txt);
    }

    LAYERS.push(k);
  }
}

/**
 * #### Draw Gigachad
 * Recibe un objeto como parametro.
 *
 * `x`: Punto X
 *
 * `y`: Punto Y
 *
 * `t`: Texto
 *
 * `f`: Color Foreground
 *
 * `b`: Color Background
 *
 * `l`: Layer seleccionado
 *
 * `m`: Modo Animacion (`right`, `left`, `inside`)
 *
 * `s`: Velocidad de Animacion
 *
 * `o`: Objeto de Grafico (Si es array se renderiza en modo multicapas)
 *
 * `ol`: Renderizado directo de layer.
 */
async function draw(props) {
  let { x, y, t, f, b, m, o, s, l, ol } = props;
  let tSize; // Tamaño del texto
  let aSize; // Tamaño del array

  vars();

  if (typeof m !== "undefined") {
    await mode();
    return true;
  }

  if (typeof o !== "undefined") {
    graph();
    return true;
  }

  if (typeof ol !== "undefined") {
    onLayer();
    return true;
  }

  normal();

  function vars() {
    // Valor tSize & aSize al ser texto
    if (typeof t !== "undefined") {
      tSize = t.length;
      aSize = 1;
    }

    // Valor tSize & aSize al ser Objeto/Array objeto
    if (Array.isArray(o)) {
      tSize = o[0].text[0].length;
      aSize = o[0].text.length;
    } else if (typeof o !== "undefined") {
      tSize = o.text[0].length;
      aSize = o.text.length;
    }

    // Otros parametros por default
    if (typeof f === "undefined" || f === " ") f = F;
    if (typeof b === "undefined" || b === " ") b = T;
    if (typeof s === "undefined") s = 20;
    if (typeof l === "undefined") l = 0;

    // Si se debe centrar
    if (x === M) x = Math.round((WX - tSize) / 2);
    if (y === M) y = Math.round((WY - aSize) / 2);
  }

  // Renderizar una linea de texto.
  function normal() {
    for (let k = 0; k < tSize; k++) {
      render(l, x + k, y, t[k], f, b);
    }
  }

  // Renderizar una linea de texto con una animacion especifica
  async function mode() {
    switch (m) {
      case "right": {
        for (let k = 0; k < tSize; k++) {
          render(l, x + k, y, t[k], f, b);
          await sleep(s);
        }

        break;
      }

      case "left": {
        for (let k = tSize - 1; k >= 0; k--) {
          render(l, x + k, y, t[k], f, b);
          await sleep(s);
        }

        break;
      }

      case "inside": {
        for (let k = 0; k < tSize; k++) {
          const j = tSize - 1 - k;

          render(l, x + k, y, t[k], f, b);
          render(l, x + j, y, t[j], f, b);
          await sleep(s);

          if (k > j) break;
        }

        break;
      }
    }
  }

  // Renderiza un sprite en formato text/color/background.
  // !!! => Renderiza un frame completo de la animacion sin pausar la ejecucion.
  // [?] => Si es recibido un array, se usara el modo de renderizado multicapas.
  // ^^^ => Renderiza cada capa de forma descendente, comenzando por la mas alta.
  // (?) => Recomendado solo usar con animaciones donde cada frame tenga un buen tamaño.
  function graph() {
    let length = 1;
    let om = o;

    if (Array.isArray(o)) {
      length = o.length;
      l++;
    }

    for (let i = 0; i < length; i++) {
      if (length !== 1) {
        o = om[i];
        l--;
      }

      const { text, color, background } = o;
      let _f = f;
      let _b = b;

      for (let k = 0; k < text.length; k++) {
        for (let j = 0; j < text[k].length; j++) {
          if (typeof color !== "undefined") _f = color[k][j];
          if (typeof background !== "undefined") _b = background[k][j];

          render(l, x + j, y + k, text[k][j], _f, _b);
        }
      }
    }
  }

  // Renderiza un sprite en formato text/color/background directamente en un layer.
  // !!! => Renderiza un frame completo reemplazando todo lo que haya en el layer.
  // (?) => SOLO usar con animaciones donde cada frame sea del tamaño completo del layer.
  function onLayer() {
    const { text, color, background } = ol;
    let build = "";

    // Descomponer ol en una cadena de texto completa
    for (let _y = 0; _y < WY; _y++) {
      let txt = "<tr id='" + l + "__y" + _y + "' >";

      for (let _x = 0; _x < WX; _x++) {
        let back = T;
        let fore = F;

        if (typeof background !== "undefined") back = background[_y][_x];
        if (typeof color !== "undefined") fore = color[_y][_x];

        txt += "<td ";
        txt += "id='" + l + "__" + _x + "-" + _y + "' ";
        txt += "class='pixel' ";
        txt += "style=' ";
        txt += "color: " + COLORS[getColorNumber(fore)] + "; ";
        txt += "background-color: " + COLORS[getColorNumber(back)];
        txt += "' >" + text[_y][_x] + "</td>";
      }

      txt += "</tr>";

      build += txt;
    }

    // Asignar la cadena en el layer seleccionado.
    $(`#layer_${l}`).html(build);
  }
}

/**
 * #### Clean
 * 100% Dependente de `draw`.
 *
 * Recibe un objeto como parametro.
 *
 * `x`: Punto X
 *
 * `y`: Punto Y
 *
 * `t`: Longitud del texto a Limpiar
 *
 * `l`: Layer seleccionado
 *
 * `m`: Modo Animacion de Limpieza(`right`, `left`, `inside`)
 *
 * `s`: Velocidad de Animacion Limpieza
 *
 * `o`: Objeto de Grafico A Limpiar (Si es array se limpia en modo multicapas)
 */
async function clean(props) {
  let { x, y, t, f, b, o, s, l, m } = props;
  let _t;
  let _o;

  let txt = "";
  let length;
  let cleanType;

  // Determinar modo.
  if (typeof t !== "undefined") {
    length = t.length;
    cleanType = "text";
  }

  if (Array.isArray(o)) {
    length = o[0].text[0].length;
    cleanType = "arrayObject";
  } else if (typeof o !== "undefined") {
    length = o.text[0].length;
    cleanType = "object";
  }

  // Preparar texto
  for (let k = 0; k < length; k++) {
    txt += " ";
  }

  // Limpiar Variables
  switch (cleanType) {
    case "text":
      _t = txt;
      break;

    case "object":
      _o = { text: [] };

      o.text.forEach(() => {
        _o.text.push(txt);
      });

      break;

    case "arrayObject":
      _o = [];

      for (let k = 0; k < o.length; k++) {
        _o[k] = { text: [] };

        o[k].text.forEach(() => {
          _o[k].text.push(txt);
        });
      }

      break;
  }

  f = T;
  b = T;

  await draw({ x, y, t: _t, f, b, o: _o, s, l, m });
}

/**
 * #### Limpia todo el Layer.
 * Acepta un objeto como parametro.
 *
 * `l`: Layer
 *
 * `b`: Color Background. (`T` por default).
 */
function wipeLayer(props) {
  let { l, b } = props;
  if (typeof b === "undefined") b = T;

  $(`#layer_${l} td`)
    .css("color", COLORS[getColorNumber(T)])
    .css("background-color", COLORS[getColorNumber(b)])
    .text("");
}

/**
 * #### Limpia todo el buffer.
 * No acepta parametros.
 *
 * Util para asegurar un lienzo limpio.
 */
function wipeAllLayers() {
  LAYERS.forEach((value) => {
    wipeLayer({ l: value });
  });
}

function getCenterX(e) {
  return Math.round((WX - e.length) / 2);
}

// ---------------------------------
// Funciones Internas de la libreria
// ---------------------------------
function getColorNumber(e) {
  let x = e;

  if (x === "A") x = 10;
  if (x === "B") x = 11;
  if (x === "C") x = 12;
  if (x === "D") x = 13;
  if (x === "E") x = 14;
  if (x === "F") x = 15;
  if (x === "T" || x === " ") x = 16;

  return x;
}

// Renderizado principal. (Afecta todos los tipos de Renderizado estandar)
function render(_l, _x, _y, _t, _f, _b) {
  const pixel = `#${_l}__${_x}-${_y}`;

  $(pixel)
    .css("color", COLORS[getColorNumber(_f)])
    .css("background-color", COLORS[getColorNumber(_b)])
    .text(_t);
}
