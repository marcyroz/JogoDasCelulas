import {
  _decorator,
  CircleCollider2D,
  Collider2D,
  Component,
  Contact2DType,
  ICollisionEvent,
  IPhysics2DContact,
  ITriggerEvent,
  Node,
  PhysicsSystem2D,
} from 'cc';
const { ccclass, property } = _decorator;

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

  start() {
    // Registering callback functions for a single collider
    let collider = this.getComponent(Collider2D);
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    // Registering global contact callback functions
    if (PhysicsSystem2D.instance) {
      PhysicsSystem2D.instance.on(
        Contact2DType.BEGIN_CONTACT,
        this.onBeginContact,
        this
      );
    }
  }
  onBeginContact(
    selfCollider: Collider2D,
    otherCollider: Collider2D,
    contact: IPhysics2DContact | null
  ) {
    // will be called once when two colliders begin to contact
    console.log('Virus onBeginContact');
  }
}
