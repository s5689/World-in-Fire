var main = mainCode();
$(document).ready(() => main.next());

function* mainCode() {
  setWindowSize();
  input();

  // __palette();

  _0_menu.run();
  yield 0;

  console.log("aaa");
}
