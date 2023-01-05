class Obj_1_explain {
  async run() {
    const explain = new Anim_1_explain();

    await explain.start();
    drawMode("right", -1, 1, " Definicion de Abreviaturas ", F, 9, 10);
    await drawMode("right", -1, 22, "Presiona una tecla para continuar.", C, 0, 10);

    CONTEXT = "_1_explain";
  }

  async end() {
    CONTEXT = "";
    console.log("a");
  }
}

var _1_explain = new Obj_1_explain();
