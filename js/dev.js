function __palette() {
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
