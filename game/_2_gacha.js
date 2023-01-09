class Obj_2_gacha {
  constructor() {
    this.intro = new Anim_2_intro();
  }

  async run() {
    // await this.intro.start();
    draw({ ol: Spr_2_gacha, l: 0 });
    // await this.intro.clean();

    /*
    await sleep(500);
    for (let y = -7; y <= 3; y++) {
      draw({ x: M, y, l: 0, o: Spr_2_piedra });
      await sleep(30);

      if (y !== 3) clean({ x: M, y, l: 0, o: Spr_2_piedra });
    }
    */

    console.log(DB_ItemList);
  }

  async end() {}
}

var _2_gacha = new Obj_2_gacha();
