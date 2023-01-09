class Obj_1_explain {
  constructor() {
    this.explain = new Anim_1_explain();
  }

  async run() {
    await this.explain.start();
    draw({
      x: M,
      y: 1,
      t: " Definicion de Abreviaturas ",
      f: F,
      b: 9,
      m: right,
      s: 10,
    });

    await draw({
      x: M,
      y: 22,
      t: "Presiona una tecla para continuar.",
      f: C,
      m: right,
      s: 10,
    });

    CONTEXT = "_1_explain";
  }

  async end() {
    CONTEXT = "";
    main.next();
  }
}

var _1_explain = new Obj_1_explain();
