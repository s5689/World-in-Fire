async function _0_menu() {
  const bar = new Anim_0_bar();
  const wif = new Anim_0_wif();
  const fire = new Anim_0_fire();

  await wif.start();
  await bar.start();
  fire.start();

  // Teclas menu
  let opc = 0;
  $("body").keydown((e) => {
    const key = e.key;

    if (key == "ArrowUp") opc--;
    if (key == "ArrowDown") opc++;

    if (opc < 0) opc = 1;
    if (opc > 1) opc = 0;

    renderMenu();
  });

  // Opciones del Menu
  function renderMenu() {
    switch (opc) {
      case 0: {
        draw(-1, 13, " Nueva Partida ", "F", "C");
        draw(-1, 14, " Salir ", "F");

        break;
      }

      case 1: {
        draw(-1, 13, " Nueva Partida ", "F");
        draw(-1, 14, " Salir ", "F", "C");

        break;
      }
    }
  }

  renderMenu();
}
