function __palette() {
  $(".game").css("border", "1px solid rgba(255, 255, 255, 0.02)");
  let k = 0;

  COLORS.forEach((value) => {
    let x = k;

    if (k === 10) x = "A";
    if (k === 11) x = "B";
    if (k === 12) x = "C";
    if (k === 13) x = "D";
    if (k === 14) x = "E";
    if (k === 15) x = "F";

    $("#guide").append(`<span style="color: ${value}">${x}: █ </span>`);

    k++;
  });
}

function __chars() {
  const list = [
    "░",
    "▒",
    "▓",
    "█",
    "▄",
    "▌",
    "▐",
    "▀",

    "│",
    "┤",
    "├",
    "┌",
    "┐",
    "└",
    "┘",
    "┴",
    "┬",
    "─",
    "┼",

    "   ",
    "╡",
    "╞",
    "╒",
    "╕",
    "╘",
    "╛",
    "╨",
    "╥",
    "   ",
    "╪",

    "   ",
    "╢",
    "╟",
    "╓",
    "╖",
    "╙",
    "╜",
    "╧",
    "╤",
    "   ",
    "╫",

    "║",
    "╣",
    "╠",
    "╔",
    "╗",
    "╚",
    "╝",
    "╩",
    "╦",
    "═",
    "╬",
  ];

  let k = 0;
  list.forEach((value) => {
    $("#chars").append(`<span> ${value} </span>`);

    if (value === "▀") $("#chars").append(`<br /><br/>`);
    if (value === "┼") $("#chars").append(`<br /><br/>`);
    if (value === "╪") $("#chars").append(`<br /><br/>`);
    if (value === "╫") $("#chars").append(`<br /><br/>`);

    k++;
  });
}

function __colors() {
  $("#colors").css("display", "none");
  $("#colors_btn").css("display", "block");
  $(".dev_colors").css("display", "inline-grid");

  for (let k = 0; k < COLORS.length - 1; k++) {
    for (let j = 0; j < COLORS.length - 1; j++) {
      let txt = "";

      txt += `<span style="background-color: ${COLORS[k]}; color: ${COLORS[j]}">`;
      txt += "¡Este es un texto de prueba!";
      txt += "</span>";

      // if (j !== 15) txt += "<br />";

      $(`#colors${k}`).append(txt);
    }
  }
}

function __showColors() {
  if ($("#colors").attr("style") === "display: none;")
    $("#colors").css("display", "block");
  else $("#colors").css("display", "none");
}

class CCronometro extends SpriteAnimated {
  async start() {
    let ms = 0;

    while (this.state) {
      await sleep(1);
      ms++;
    }

    console.log(`${ms}ms.`);
  }
}
var Cronometro = new CCronometro();
