function input() {
  $("body").keydown((e) => {
    const key = e.key;

    switch (CONTEXT) {
      case "_0_menu": {
        _0_menu.input(key);
        break;
      }
    }
  });
}
