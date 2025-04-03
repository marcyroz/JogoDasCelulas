import { _decorator, Collider2D, Contact2DType, IPhysics2DContact } from 'cc';
import { Entity } from './Entity';
import ScriptWBC from './ScriptWBC';

const { ccclass, property } = _decorator;

@ccclass('ScriptVirus')
export default class ScriptVirus extends Entity {
  @property
  public strength: number = 0; // Força do vírus

  // public initialHealth: number; // Vida inicial do vírus

  // onLoad() {
  //   this.health = this.initialHealth;

  //   const collider = this.getComponent(Collider2D);
  //   if (collider) {
  //     collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
  //   }
  // }

  // private onBeginContact(
  //   selfCollider: Collider2D,
  //   otherCollider: Collider2D,
  //   contact: IPhysics2DContact | null
  // ) {
  //   console.log('Colisão iniciada com', otherCollider.node.name);

  //   const wbc = otherCollider.node.getComponent(ScriptWBC);
  //   if (wbc) {
  //     this.fightWBC(wbc);
  //   }
  // }

  // private fightWBC(wbc: ScriptWBC) {
  //   // Dano mútuo
  //   const virusDamage = wbc.strength * (1 - this.resistance);
  //   const wbcDamage = this.strength * (1 - wbc.resistance);

  //   this.health -= virusDamage;
  //   wbc.health -= wbcDamage;

  //   console.log(
  //     `Vírus tomou ${virusDamage.toFixed(2)} de dano. Vida atual: ${
  //       this.health
  //     }`
  //   );
  //   console.log(
  //     `WBC tomou ${wbcDamage.toFixed(2)} de dano. Vida atual: ${wbc.health}`
  //   );

  //   // Checa mortes
  //   if (this.health <= 0) {
  //     this.onDeath();
  //   }

  //   if (wbc.health <= 0) {
  //     wbc.onDeath();
  //   }
  // }

  // public onDeath() {
  //   console.log('Vírus morreu!');
  //   this.node.destroy();
  // }
}
