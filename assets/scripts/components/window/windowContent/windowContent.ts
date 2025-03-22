import { _decorator, Component, Label, Node, Button } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WindowContent')
export default class WindowContent extends Component {
  @property(Node)
  WBC_Node: Node | null = null;

  @property(Node)
  RBC_Node: Node | null = null;

  @property(Node)
  V_Node: Node | null = null;

  @property(Node)
  pointsNode: Node | null = null;

  availablePoints: number = 10;

  updateStats(entity: any, entityType: string) {
    this.hideAllNodes();

    switch (entityType.toLowerCase()) {
      case 'glóbulo branco':
        if (!this.WBC_Node) return;
        this.WBC_Node.active = true;
        this.updateEntityStats(this.WBC_Node, entity);
        break;

      case 'glóbulo vermelho':
        if (!this.RBC_Node) return;
        this.RBC_Node.active = true;
        this.updateEntityStats(this.RBC_Node, entity);
        break;

      case 'vírus':
        if (!this.V_Node) return;
        this.V_Node.active = true;
        this.updateEntityStats(this.V_Node, entity);
        break;
    }

    if (this.pointsNode) {
      const pointsLabel = this.pointsNode.getComponentInChildren(Label);
      if (pointsLabel) {
        pointsLabel.string = `Pontos: ${this.availablePoints}`;
      }
    }
  }

  hideAllNodes() {
    if (this.WBC_Node) this.WBC_Node.active = false;
    if (this.RBC_Node) this.RBC_Node.active = false;
    if (this.V_Node) this.V_Node.active = false;
  }

  updateEntityStats(entityNode: Node | null, entity: any) {
    if (!entityNode) return;

    this.updatePropertyNode(entityNode, 'health', entity, 'Saúde');
    this.updatePropertyNode(entityNode, 'speed', entity, 'Velocidade');
    this.updatePropertyNode(entityNode, 'strength', entity, 'Força');
    this.updatePropertyNode(entityNode, 'resistance', entity, 'Resistência');
    this.updatePropertyNode(
      entityNode,
      'reproductionRate',
      entity,
      'Reprodução'
    );
  }

  updatePropertyNode(
    entityNode: Node,
    property: string,
    entity: any,
    labelText: string
  ) {
    const propertyNode = entityNode.getChildByName(`${property}Node`);
    if (!propertyNode) return;

    const label = propertyNode.getChildByName(property)?.getComponent(Label);
    const incrementButton = propertyNode
      .getChildByName('add')
      ?.getComponent(Button);
    const decrementButton = propertyNode
      .getChildByName('remove')
      ?.getComponent(Button);

    if (label && incrementButton && decrementButton) {
      label.string = `${labelText}: ${entity[property]}`;

      incrementButton.node.on(Button.EventType.CLICK, () => {
        if (this.availablePoints > 0) {
          entity[property] += 1;
          this.availablePoints -= 1;
          label.string = `${labelText}: ${entity[property]}`;
          this.updateAvailablePoints();
        }
      });

      decrementButton.node.on(Button.EventType.CLICK, () => {
        if (entity[property] > 0) {
          entity[property] -= 1;
          this.availablePoints += 1;
          label.string = `${labelText}: ${entity[property]}`;
          this.updateAvailablePoints();
        }
      });
    }
  }

  updateAvailablePoints() {
    if (this.pointsNode) {
      const pointsLabel = this.pointsNode.getComponentInChildren(Label);
      if (pointsLabel) {
        pointsLabel.string = `Pontos: ${this.availablePoints}`;
      }
    }
  }
}
