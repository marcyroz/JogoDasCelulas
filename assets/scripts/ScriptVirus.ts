import {
  _decorator,
  Collider2D,
  Component,
  Contact2DType,
  director,
  IPhysics2DContact,
} from 'cc';
const { ccclass, property } = _decorator;

import PopulationBoard from './PopulationBoard';

@ccclass('scriptV')
export default class ScriptVirus extends Component {
  @property
  health: number = 0;
  @property
  speed: number = 0;
  @property
  strength: number = 0;
  @property
  resistance: number = 0;
  @property
  reproductionRate: number = 0;

  private populationBoard: PopulationBoard = null;

  start() {
    const populationBoardNode = director
      .getScene()
      .getChildByName('PopulationBoard');
    if (populationBoardNode) {
      this.populationBoard = populationBoardNode.getComponent(PopulationBoard);
    }

    let collider = this.getComponent(Collider2D);
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
  }

  onBeginContact(
    selfCollider: Collider2D,
    otherCollider: Collider2D,
    contact: IPhysics2DContact | null
  ) {
    // Colisão com WBC (tag 2)
    if (otherCollider.tag == 2) {
      // lógica de combate
      setTimeout(() => {
        this.node.destroy();
      }, 0);

      if (this.populationBoard) {
        this.populationBoard.removeCount('virus');
      }
    }
  }
}
