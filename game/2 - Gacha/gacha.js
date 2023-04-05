import { ItemList, SkillsList } from '../../js/db';
import { clean, draw } from '../../js/lib';

let rolling = false;

export async function gacha(e) {
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

  rolling = true;

  if (e === 'item') {
    usingDB = ItemList;
    limitDB = ItemList.length - 1;
    yName = 2;
    _y = 5;
  }

  if (e === 'skill') {
    usingDB = SkillsList;
    limitDB = 10;
    yName = 13;
    _y = 16;
  }

  do {
    await sleep(speed);

    clean({ x: M, y: yName, t: name });

    k = Math.round(Math.random() * limitDB);
    desc = usingDB[k].desc;
    name = usingDB[k].name;
    color = usingDB[k].color;
    background = usingDB[k].background;

    draw({ x: M, y: yName, t: name, f: color, b: background });

    if (!rolling) {
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

export const stopGacha = () => (rolling = false);
