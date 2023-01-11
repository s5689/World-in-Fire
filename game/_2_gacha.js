class Obj_2_gacha {
  constructor() {
    this.intro = new Anim_2_intro();
    this.confeti = new Anim_2_confeti();
    this.phase = this.handlePhase();

    this.repeat = false;

    this.prizes = [];
    this.rolling = false;
  }

  async run() {
    await this.intro.start();
    draw({ ol: LSpr_2_gacha, l: 0 });
    await this.intro.clean();

    this.phase.next();
  }

  *handlePhase() {
    while (true) {
      if (this.repeat) {
        wipeAllLayers();
        draw({ ol: LSpr_2_gacha, l: 0 });
        this.prizes = [];
      }

      yield this.p0(0);
      yield this.gachaMiddleware();

      yield this.p1();
      yield this.p2();

      yield this.p0(1);
      yield this.gachaMiddleware();

      yield this.p1();

      this.repeat = true;
    }
  }

  async end() {}

  gachaMiddleware() {
    clean({
      x: M,
      y: 22,
      t: " Presione <ENTER> para detener la ruleta...",
    });

    this.rolling = false;
  }

  async p0(e) {
    CONTEXT = "_2_gacha";
    draw({
      x: M,
      y: 22,
      t: " Presione <ENTER> para detener la ruleta...",
    });

    this.prizes.push(await this.gacha(e));
    if (this.prizes[0] === 5 && e === 0) await this.piedra();

    await this.confeti.start(e);
    await sleep(250);

    this.phase.next();
  }

  async p1() {
    await draw({
      x: M,
      y: 10,
      t: " Presione <ENTER> para continuar...",
      m: right,
      s: 10,
    });

    CONTEXT = "_2_gacha";
  }

  async p2() {
    await clean({
      x: M,
      y: 10,
      t: " Presione <ENTER> para continuar...",
      m: right,
      s: 10,
    });

    this.phase.next();
  }

  async gacha(e) {
    let k;
    let _y;
    let yName;
    let speed = 20;
    let desc = [];
    let name;
    let color;
    let background;
    let usingDB;
    let limitDB;

    if (e === 0) {
      usingDB = DB_ItemList;
      limitDB = DB_ItemList.length - 1;
      yName = 2;
      _y = 5;
    }
    if (e === 1) {
      usingDB = DB_SkillsList;
      limitDB = 10;
      yName = 13;
      _y = 16;
    }

    this.rolling = true;

    do {
      await sleep(speed);

      clean({ x: M, y: yName, t: name });

      k = Math.round(Math.random() * limitDB);
      desc = usingDB[k].desc;
      name = usingDB[k].name;
      color = usingDB[k].color;
      background = usingDB[k].background;

      draw({ x: M, y: yName, t: name, f: color, b: background });

      if (!this.rolling) {
        if (speed < 100) speed += 5;
        else if (speed < 200) speed += 20;
        else if (speed < 500) speed += 50;
      }
    } while (speed < 500);

    if (desc.length > 2) _y--;

    desc.forEach((value) => {
      draw({ x: M, y: _y, t: value });
      _y++;
    });

    return k;
  }

  async piedra() {
    let k = 0;

    draw({ x: M, y: 2, t: "La Piedra.", f: D });
    await sleep(1000);

    for (let y = -7; y <= 4; y++) {
      if (y <= 3) {
        clean({ x: M, y: y - 1, l: 2, o: Spr_2_piedra });
        draw({ x: M, y, l: 2, o: Spr_2_piedra });
      }

      if (y >= -4) {
        draw({ ol: LSpr_2_gacha_piedra[k] });
        k++;
      }

      await sleep(35);
    }

    await sleep(2000);
    draw({ x: M, y: 2, t: "La Piedra.", f: D });
  }

  input(e) {
    if (e === "Enter") {
      CONTEXT = "";
      this.phase.next();
    }
  }
}

var _2_gacha = new Obj_2_gacha();
