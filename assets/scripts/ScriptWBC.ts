import { _decorator, Collider2D, IPhysics2DContact, Contact2DType } from 'cc';
import { Entity } from './Entity';
import ScriptRBC from './ScriptRBC';
import ScriptVirus from './ScriptVirus';

const { ccclass, property } = _decorator;

@ccclass('ScriptWBC')
export default class ScriptWBC extends Entity {
  @property
  public strength: number = 0; // Força de ataque contra vírus

  // public initialHealth: number; // Vida inicial da WBC

  // onLoad() {
  //   this.initialHealth = this.health;
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

  //   const virus = otherCollider.node.getComponent(ScriptVirus);
  //   if (virus) {
  //     this.fightVirus(virus);
  //   }

  //   const rbc = otherCollider.node.getComponent(ScriptRBC);
  //   if (rbc && rbc.infected) {
  //     this.healRBC(rbc);
  //   }
  // }

  // private fightVirus(virus: ScriptVirus) {
  //   // Dano mútuo
  //   const virusDamage = virus.strength * (1 - this.resistance);
  //   const wbcDamage = this.strength * (1 - virus.resistance);

  //   this.health -= virusDamage;
  //   virus.health -= wbcDamage;

  //   console.log(
  //     `WBC tomou ${virusDamage.toFixed(2)} de dano. Vida atual: ${this.health}`
  //   );
  //   console.log(
  //     `Vírus tomou ${wbcDamage.toFixed(2)} de dano. Vida atual: ${virus.health}`
  //   );

  //   // Checa mortes
  //   if (this.health <= 0) {
  //     this.onDeath();
  //   }

  //   if (virus.health <= 0) {
  //     virus.onDeath();
  //   }
  // }

  // private healRBC(rbc: ScriptRBC) {
  //   const healAmount = this.strength;

  //   rbc.receiveHealing(healAmount);
  //   console.log(`WBC curou RBC com ${healAmount} pontos`);

  //   // WBC sofre dano mitigado pela resistência
  //   const damageToWBC = healAmount * (1 - this.resistance);

  //   this.health -= damageToWBC;

  //   console.log(`WBC sofreu ${damageToWBC.toFixed(2)} de dano ao curar RBC`);

  //   // Checa morte
  //   if (this.health <= 0) {
  //     this.onDeath();
  //   }

  //   // Se a RBC for curada além de metade da sua vida, ela deixa de estar infectada
  //   if (rbc.health > rbc.initialHealth / 2 && rbc.infected) {
  //     rbc.cure(); // Chama a função de cura
  //   }
  // }

  // public onDeath() {
  //   console.log('WBC morreu!');
  //   this.node.destroy();
  // }
}
