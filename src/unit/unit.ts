import { UNIT_IMAGE_SIZE, UNIT_SPRITE_IMAGE, UNIT_TYPE } from "./constants";

interface UnitConfig {
  id: string;
  name: string;
  children?: number[];
}

export default class Unit {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly children?: number[];
  readonly src: string;
  readonly top: number;
  readonly left: number;

  constructor(config: UnitConfig) {
    this.id = config.id;
    this.name = config.name;
    config.children && (this.children = config.children);

    this.type = UNIT_TYPE[this.id.slice(0, 2)];
    this.src = UNIT_SPRITE_IMAGE[this.type];
    this.top = -UNIT_IMAGE_SIZE.HEIGHT;
    this.left = -Number(this.id.slice(2, 4)) * UNIT_IMAGE_SIZE.WIDTH;
  }
}
