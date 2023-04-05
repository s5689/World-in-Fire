import { wipeAllLayers } from '../js/lib';
import { _0_menu } from './0 - Menu';
import { _1_explain } from './1 - Explain';
import { _2_gacha } from './2 - Gacha';

const phase = {
  // current: 0,
  current: 2,
  list: [_0_menu, _1_explain, _2_gacha],

  next() {
    this.list[this.current]();
    this.current++;

    this.callback(this.current);
  },

  end() {
    wipeAllLayers();
  },

  callback: function (e) {},
  onChange: function (e) {
    this.callback = e;
  },
};

export default phase;
