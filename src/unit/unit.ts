import { UNIT_SPRITE_IMAGE, UNIT_TYPE } from "./constants";

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

  constructor(config: UnitConfig) {
    this.id = config.id;
    this.name = config.name;
    config.children && (this.children = config.children);

    this.type = UNIT_TYPE[config.id.slice(0, 2)];
    this.src = UNIT_SPRITE_IMAGE[config.id.slice(0, 2)];
  }
}
