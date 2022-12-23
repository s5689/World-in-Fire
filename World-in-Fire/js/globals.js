var WX; // X de la pantalla
var WY; // Y de la pantalla
var CONTEXT;
var COLORS = [
  "black",
  "navy",
  "darkgreen",
  "darkcyan",
  "darkred",
  "darkmagenta",
  "goldenrod",
  "silver",
  "grey",
  "blue",
  "lime",
  "turquoise",
  "red",
  "fuchsia",
  "gold",
  "white",
];

// Formato basico de animaciones
class Animation {
  constructor() {
    this.state = true;
  }

  stop() {
    this.state = false;
  }
}
