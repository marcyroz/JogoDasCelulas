import {
  _decorator,
  Component,
  Collider2D,
  Contact2DType,
  IPhysics2DContact,
} from 'cc';
// import ScriptRBC from './ScriptRBC';
// import ScriptVirus from './ScriptVirus';
// import ScriptWBC from './ScriptWBC';

const { ccclass, property } = _decorator;

@ccclass('CollisionHandler')
export default class CollisionHandler extends Component {
  //   private collider: Collider2D = null;
  //   onLoad() {
  //     this.collider = this.getComponent(Collider2D);
  //     if (this.collider) {
  //       this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
  //     }
  //   }
  //   private onBeginContact(
  //     selfCollider: Collider2D,
  //     otherCollider: Collider2D,
  //     contact: IPhysics2DContact | null
  //   ) {
  //     // Obtenha as entidades envolvidas na colisão
  //     const selfEntity = this.getEntityFromCollider(selfCollider);
  //     const otherEntity = this.getEntityFromCollider(otherCollider);
  //     // Se ambas as entidades existirem, trate a colisão
  //     if (selfEntity && otherEntity) {
  //       this.handleCollision(selfEntity, otherEntity);
  //       console.log(
  //         'Colisão detectada entre',
  //         selfEntity.constructor.name,
  //         'e',
  //         otherEntity.constructor.name
  //       );
  //     }
  //   }
  //   // Função que verifica qual componente está anexado ao collider
  //   private getEntityFromCollider(collider: Collider2D): Component | null {
  //     return (
  //       collider.node.getComponent(ScriptRBC) ||
  //       collider.node.getComponent(ScriptVirus) ||
  //       collider.node.getComponent(ScriptWBC)
  //     );
  //   }
  //   // Função principal para tratamento das colisões
  //   private handleCollision(entityA: Component, entityB: Component) {
  //     if (entityA instanceof ScriptRBC && entityB instanceof ScriptVirus) {
  //       this.handleRBCInfection(entityA, entityB);
  //     } else if (entityA instanceof ScriptVirus && entityB instanceof ScriptRBC) {
  //       this.handleRBCInfection(entityB, entityA);
  //     } else if (entityA instanceof ScriptWBC && entityB instanceof ScriptVirus) {
  //       this.handleWBCVirusCombat(entityA, entityB);
  //     } else if (entityA instanceof ScriptVirus && entityB instanceof ScriptWBC) {
  //       this.handleWBCVirusCombat(entityB, entityA);
  //     } else if (entityA instanceof ScriptWBC && entityB instanceof ScriptRBC) {
  //       this.handleWBCHealing(entityA, entityB);
  //     } else if (entityA instanceof ScriptRBC && entityB instanceof ScriptWBC) {
  //       this.handleWBCHealing(entityB, entityA);
  //     }
  //   }
  //   // Tratar infecção do RBC
  //   private handleRBCInfection(rbc: ScriptRBC, virus: ScriptVirus) {
  //     rbc.takeDamage(virus.strength);
  //     console.log('Infectando RBC');
  //     if (rbc.health <= rbc.initialHealth * 0.5 && !rbc.infected) {
  //       rbc.infect();
  //     }
  //     if (rbc.health <= 0 && !rbc.infected) {
  //       console.log('RBC transformado em vírus!');
  //       rbc.onDeath();
  //     }
  //   }
  //   // Combate entre WBC e Virus
  //   private handleWBCVirusCombat(wbc: ScriptWBC, virus: ScriptVirus) {
  //     virus.takeDamage(wbc.strength);
  //     wbc.takeDamage(virus.strength);
  //     console.log('WBC e Virus trocando dano');
  //   }
  //   // Cura do RBC pelo WBC
  //   private handleWBCHealing(wbc: ScriptWBC, rbc: ScriptRBC) {
  //     if (rbc.infected) {
  //       const healingAmount = wbc.heal(rbc);
  //       console.log(`WBC cura RBC com ${healingAmount}`);
  //       rbc.receiveHealing(healingAmount);
  //       if (rbc.health > rbc.initialHealth * 0.5) {
  //         rbc.infected = false;
  //         console.log('RBC curado da infecção!');
  //       }
  //     } else {
  //       const healingAmount = wbc.heal(rbc);
  //       rbc.receiveHealing(healingAmount);
  //       console.log('WBC cura RBC');
  //     }
  //   }
}
