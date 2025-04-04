import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

import Spawner from './Spawner';

@ccclass('Game')
export default class Game extends Component {
  @property({
    type: Spawner,
    tooltip: 'Referência ao script de spawn de entidades',
  })
  public spawner: Spawner;

  protected start() {
    this.spawner.initialize();
  }
  onLoad() {}
}
