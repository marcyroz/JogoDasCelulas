import {
  _decorator,
  Collider2D,
  Component,
  Contact2DType,
  ICollisionEvent,
  IPhysics2DContact,
  Sprite,
  SpriteFrame,
} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScriptRBC')
export default class ScriptRBC extends Component {
  @property
  health: number = 100;
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

  private inContactWithWBC: boolean = false;

  start() {
    const collider = this.getComponent(Collider2D);
    if (collider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
      collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
    }
  }

  onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D) {
    if (otherCollider.tag == 3 && !this.infected) {
      this.infected = true;
      this.getComponent(Sprite).spriteFrame = this.infectedSprite;
    }

    if (otherCollider.tag == 2) {
      this.inContactWithWBC = true;
    }
  }

  onEndContact(selfCollider: Collider2D, otherCollider: Collider2D) {
    if (otherCollider.tag == 2) {
      this.inContactWithWBC = false;
    }
  }

  update() {
    if (this.inContactWithWBC && this.infected) {
      this.infected = false;
      this.getComponent(Sprite).spriteFrame = this.normalSprite;
    }
  }
}
