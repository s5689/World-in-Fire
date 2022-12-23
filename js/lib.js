async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setWindowSize(limX = 80, limY = 25) {
  WX = limX;
  WY = limY;

  for (let y = 0; y < limY; y++) {
    let txt = "<tr>";

    for (let x = 0; x < limX; x++) {
      txt += "<td ";
      txt += "id='" + x + "-" + y + "' ";
      txt += "class='pixel' ";
      txt += "></td>";
    }

    txt += "</tr>";
    $("#game").append(txt);
  }
}

// Renderizar una linea de texto.
function draw(_x, _y, txt, foreground = "F", background = 0) {
  const txtSize = txt.length;
  let x = _x;
  let y = _y;

  if (x === -1) x = Math.round((WX - txtSize) / 2);
  if (y === -1) y = Math.round((WY - txtSize) / 2);

  for (let k = 0; k < txtSize; k++) {
    $(`#${x + k}-${y}`).css("color", COLORS[getColorNumber(foreground)]);
    $(`#${x + k}-${y}`).css(
      "background-color",
      COLORS[getColorNumber(background)]
    );
    $(`#${x + k}-${y}`).text(txt[k]);
  }
}

// Renderizar una linea de texto con una animacion especifica
async function drawMode(mode, _x, _y, txt, foreground = "F", background = 0) {
  const txtSize = txt.length;
  let x = _x;
  let y = _y;

  if (x === -1) x = Math.round((WX - txtSize) / 2);
  if (y === -1) y = Math.round((WY - txtSize) / 2);

  switch (mode) {
    case "right": {
      for (let k = 0; k < txtSize; k++) {
        $(`#${x + k}-${y}`).css("color", COLORS[getColorNumber(foreground)]);
        $(`#${x + k}-${y}`).css(
          "background-color",
          COLORS[getColorNumber(background)]
        );
        $(`#${x + k}-${y}`).text(txt[k]);

        await sleep(20);
      }

      break;
    }

    case "left": {
      for (let k = txtSize - 1; k >= 0; k--) {
        $(`#${x + k}-${y}`).css("color", COLORS[getColorNumber(foreground)]);
        $(`#${x + k}-${y}`).css(
          "background-color",
          COLORS[getColorNumber(background)]
        );
        $(`#${x + k}-${y}`).text(txt[k]);

        await sleep(20);
      }

      break;
    }

    case "inside": {
      for (let k = 0; k < txtSize; k++) {
        const j = txtSize - 1 - k;

        $(`#${x + k}-${y}`).css("color", COLORS[getColorNumber(foreground)]);
        $(`#${x + k}-${y}`).css(
          "background-color",
          COLORS[getColorNumber(background)]
        );
        $(`#${x + k}-${y}`).text(txt[k]);

        $(`#${j - x}-${y}`).css("color", COLORS[getColorNumber(foreground)]);
        $(`#${j - x}-${y}`).css(
          "background-color",
          COLORS[getColorNumber(background)]
        );
        $(`#${j - x}-${y}`).text(txt[j]);

        await sleep(20);
        if (k > j) break;
      }

      break;
    }
  }
}

// Renderizar un grafico en formato text/color/background.
// !!! => Renderiza un frame completo de la animacion sin pausar la ejecucion.
// (?) => Recomendado solo usar con animaciones donde cada frame tenga un gran tamaño.
function drawGraph(obj, _x, _y) {
  const txt = obj.text;
  const col = obj.color;
  const back = obj.background;

  let x = _x;
  let y = _y;

  if (x === -1) x = Math.round((WX - txtSize) / 2);
  if (y === -1) y = Math.round((WY - txtSize) / 2);

  for (let k = 0; k < txt.length; k++) {
    for (let j = 0; j < txt[k].length; j++) {
      if (typeof back !== "undefined")
        $(`#${x + j}-${y + k}`).css(
          "background-color",
          COLORS[getColorNumber(back[k][j])]
        );

      $(`#${x + j}-${y + k}`).css("color", COLORS[getColorNumber(col[k][j])]);
      $(`#${x + j}-${y + k}`).text(txt[k][j]);
    }
  }
}

// Limpia una linea de texto
function clean(_x, _y, txt) {
  const txtSize = txt.length;
  let x = _x;
  let y = _y;

  if (x === -1) x = Math.round((WX - txtSize) / 2);
  if (y === -1) y = Math.round((WY - txtSize) / 2);

  for (let k = 0; k < txtSize; k++) {
    $(`#${x + k}-${y}`).css("color", COLORS[0]);
    $(`#${x + k}-${y}`).css("background-color", COLORS[0]);
    $(`#${x + k}-${y}`).text("");
  }
}

// Limpia una linea de texto con una animacion especifica
async function cleanMode(mode, _x, _y, txt) {
  const txtSize = txt.length;
  let x = _x;
  let y = _y;

  if (x === -1) x = Math.round((WX - txtSize) / 2);
  if (y === -1) y = Math.round((WY - txtSize) / 2);

  switch (mode) {
    case "right": {
      for (let k = 0; k < txtSize; k++) {
        $(`#${x + k}-${y}`).css("color", COLORS[0]);
        $(`#${x + k}-${y}`).css("background-color", COLORS[0]);
        $(`#${x + k}-${y}`).text("");

        await sleep(20);
      }

      break;
    }

    case "left": {
      for (let k = txtSize - 1; k >= 0; k--) {
        $(`#${x + k}-${y}`).css("color", COLORS[0]);
        $(`#${x + k}-${y}`).css("background-color", COLORS[0]);
        $(`#${x + k}-${y}`).text("");

        await sleep(20);
      }

      break;
    }

    case "inside": {
      for (let k = 0; k < txtSize; k++) {
        const j = txtSize - 1 - k;

        $(`#${x + k}-${y}`).css("color", COLORS[0]);
        $(`#${x + k}-${y}`).css("background-color", COLORS[0]);
        $(`#${x + k}-${y}`).text("");

        $(`#${j - x}-${y}`).css("color", COLORS[0]);
        $(`#${j - x}-${y}`).css("background-color", COLORS[0]);
        $(`#${j - x}-${y}`).text("");

        await sleep(20);
        if (k > j) break;
      }

      break;
    }
  }
}

function getColorNumber(e) {
  let x = e;

  if (x == "A") x = 10;
  if (x == "B") x = 11;
  if (x == "C") x = 12;
  if (x == "D") x = 13;
  if (x == "E") x = 14;
  if (x == "F") x = 15;

  return x;
}

function getCenterX(e) {
  return Math.round((WX - e.length) / 2);
}
