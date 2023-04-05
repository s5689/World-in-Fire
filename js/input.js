export const input = {
  set(e) {
    this.callback(e);
  },

  callback: function (e) {},
  bind: function (e) {
    this.callback = e;
  },

  unbind,
};

document.addEventListener('keydown', (e) => input.set(e.key));

function unbind() {
  input.bind(() => null);
}
