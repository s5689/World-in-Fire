var main = mainCode();
$(document).ready(() => main.next());

function* mainCode() {
  setWindowSize();
  input();

  __palette();

  _0_menu.run();
  yield 0;

  _1_explain.run();

  yield 0;
}
