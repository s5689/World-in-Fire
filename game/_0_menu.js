class Obj_0_menu {
  constructor() {
    this.opc = 0;
    this.bar = new Anim_0_bar();
    this.wif = new Anim_0_wif();
    this.fire = new Anim_0_fire();
  }

  async run() {
    await sleep(500);
    await this.wif.start();
    await this.bar.start();
    this.fire.start();

    CONTEXT = "_0_menu";
    this.renderMenu();
  }

  renderMenu() {
    switch (this.opc) {
      case 0: {
        draw(-1, 13, " Nueva Partida ", F, C);
        draw(-1, 14, " Salir ", F);

        break;
      }

      case 1: {
        draw(-1, 13, " Nueva Partida ", F);
        draw(-1, 14, " Salir ", F, C);

        break;
      }
    }
  }

  input(key) {
    if (key === "ArrowUp") this.opc--;
    if (key === "ArrowDown") this.opc++;
    if (key === "Enter") this.end();

    if (this.opc < 0) this.opc = 1;
    if (this.opc > 1) this.opc = 0;

    this.renderMenu();
  }

  async end() {
    CONTEXT = "";

    this.fire.stop();
    await this.wif.clean();
    await this.bar.clean();
    cleanMode("right", -1, 13, " Nueva Partida ");
    await cleanMode("left", -1, 14, "         Salir ");

    if (this.opc === 0) main.next();
    if (this.opc === 1) main.return();
  }
}

var _0_menu = new Obj_0_menu();
