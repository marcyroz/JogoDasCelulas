import {
  _decorator,
  Component,
  Collider2D,
  Contact2DType,
  IPhysics2DContact,
  Prefab,
} from 'cc';
const { ccclass, property } = _decorator;

import Spawner from './Spawner';

@ccclass('GameCtrl')
export default class GameCtrl extends Component {
  @property({ type: Spawner })
  private spawner: Spawner = null;

  onLoad() {
    this.spawner.initialize();
  }
}
