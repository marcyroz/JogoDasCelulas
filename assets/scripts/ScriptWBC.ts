import {
  _decorator,
  Collider2D,
  Component,
  Contact2DType,
  IPhysics2DContact,
} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScriptWBC')
export default class ScriptWBC extends Component {
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

  start() {
    // Registering callback functions for a single collider
    let collider = this.getComponent(Collider2D);
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
  }
  onBeginContact(
    selfCollider: Collider2D,
    otherCollider: Collider2D,
    contact: IPhysics2DContact | null
  ) {}
}
