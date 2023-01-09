var WX; // X de la pantalla
var WY; // Y de la pantalla
var CONTEXT;
var COLORS = [
  "rgba(0, 0, 0, 1)",
  "rgba(0, 0, 128, 1)",
  "rgba(0, 128, 0, 1)",
  "rgba(0, 128, 128, 1)",
  "rgba(128, 0, 0, 1)",
  "rgba(128, 0, 128, 1)",
  "rgba(128, 128, 0, 1)",
  "rgba(192, 192, 192, 1)",
  "rgba(128, 128, 128, 1)",
  "rgba(0, 0, 255, 1)",
  "rgba(0, 255, 0, 1)",
  "rgba(0, 255, 255, 1)",
  "rgba(255, 0, 0, 1)",
  "rgba(255, 0, 255, 1)",
  "rgba(255, 255, 0, 1)",
  "rgba(255, 255, 255, 1)",
  "rgba(0 ,0 ,0 ,0)",
];

// Colores Hexadecimales
var A = "A";
var B = "B";
var C = "C";
var D = "D";
var E = "E";
var F = "F";
var T = "T"; // ->Transparente

// Constantes de Parametros
var right = "right";
var left = "left";
var inside = "inside";
var M = "CENTER";

// Formato basico de animaciones
class SpriteAnimated {
  constructor() {
    this.state = true;
  }

  stop() {
    this.state = false;
  }
}
