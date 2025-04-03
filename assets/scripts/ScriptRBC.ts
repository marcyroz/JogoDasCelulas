import {
  _decorator,
  SpriteFrame,
  Sprite,
  Collider2D,
  IPhysics2DContact,
  Contact2DType,
  Component,
} from 'cc';
import { Entity } from './Entity';
import ScriptVirus from './ScriptVirus';

const { ccclass, property } = _decorator;

@ccclass('ScriptRBC')
export default class ScriptRBC extends Entity {
  @property(SpriteFrame)
  public infectedSprite: SpriteFrame = null;

  @property(SpriteFrame)
  public normalSprite: SpriteFrame = null;

  public infected: boolean = false;
  // public initialHealth: number;
  // private infectionInterval: number = null; // Timer para dano contínuo

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

  //   if (!otherCollider.node || !selfCollider.node) return; // Evita bugs

  //   if (this.infected) return; // Evita aplicar dano repetidamente em RBC já infectada

  //   const virus = otherCollider.node.getComponent(ScriptVirus);
  //   if (virus && !this.infected) {
  //     this.takeDamageFromVirus(virus.strength);
  //   }
  // }

  // public takeDamageFromVirus(strength: number) {
  //   const damage = Math.max(strength * (1 - this.resistance), 0); // Evita valores negativos
  //   this.health -= damage;
  //   console.log(
  //     `RBC tomou ${damage.toFixed(2)} de dano. Vida atual: ${this.health}`
  //   );

  //   if (this.health <= 0) {
  //     this.onDeath();
  //   } else if (this.health < this.initialHealth / 2 && !this.infected) {
  //     this.infect();
  //   }
  // }

  // public receiveHealing(amount: number) {
  //   this.health = Math.min(this.health + amount, this.initialHealth);
  //   console.log(`RBC recebeu ${amount} de cura. Vida atual: ${this.health}`);

  //   if (this.health > this.initialHealth * 0.5 && this.infected) {
  //     this.cure();
  //   }
  // }

  // public infect() {
  //   this.infected = true;
  //   this.getComponent(Sprite).spriteFrame = this.infectedSprite;
  //   console.log('RBC foi infectada!');

  //   this.startContinuousDamage();
  // }

  // private startContinuousDamage() {
  //   if (this.infectionInterval) return; // Evita múltiplos timers

  //   this.infectionInterval = setInterval(() => {
  //     if (!this.infected) {
  //       clearInterval(this.infectionInterval);
  //       this.infectionInterval = null;
  //       return;
  //     }

  //     this.health -= 1;
  //     console.log(`RBC infectada perdeu 1 de vida. Vida atual: ${this.health}`);

  //     if (this.health <= 0) {
  //       this.onDeath();
  //     }
  //   }, 1000);
  // }

  // public cure() {
  //   this.infected = false;
  //   this.getComponent(Sprite).spriteFrame = this.normalSprite;
  //   console.log('RBC foi curada e não está mais infectada!');

  //   if (this.infectionInterval) {
  //     clearInterval(this.infectionInterval);
  //     this.infectionInterval = null;
  //   }
  // }

  // public onDeath() {
  //   console.log('RBC morreu!');
  //   if (this.infectionInterval) {
  //     clearInterval(this.infectionInterval);
  //   }
  //   this.node.destroy();
  // }
}
