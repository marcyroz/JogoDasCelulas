import {
  _decorator,
  CircleCollider2D,
  Collider2D,
  Component,
  Contact2DType,
  ICollisionEvent,
  IPhysics2DContact,
  ITriggerEvent,
  PhysicsSystem2D,
  Sprite,
  SpriteFrame,
} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScriptRBC')
export default class ScriptRBC extends Component {
  @property
  health: number = 0;
  @property
  speed: number = 0;
  @property
  resistance: number = 0;
  @property
  reproductionRate: number = 0;
  @property
  infected: boolean = false;

  @property(SpriteFrame)
  public infectedSprite: SpriteFrame = null;

  @property(SpriteFrame)
  public normalSprite: SpriteFrame = null;

  start() {
    let collider = this.getComponent(Collider2D);
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

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
    if (otherCollider.tag == 3) {
      this.infected = true;
      this.getComponent(Sprite).spriteFrame = this.infectedSprite;
    }
  }
}
