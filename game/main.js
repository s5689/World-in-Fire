var main = mainCode();
$(document).ready(() => main.next());

function* mainCode() {
  setWindowSize();
  input();

  __palette();
  __chars();

  // yield _0_menu.run();
  // yield _1_explain.run();
  yield _2_gacha.run();
}
