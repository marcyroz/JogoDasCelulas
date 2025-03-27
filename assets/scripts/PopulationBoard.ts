import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PopulationBoard')
export default class PopulationBoard extends Component {
  @property({
    type: Label,
    tooltip: 'Node da contagem de vírus',
  })
  public virusLabel: Label = null;

  @property({
    type: Label,
    tooltip: 'Node da contagem de RBCs',
  })
  public rbcLabel: Label = null;

  @property({
    type: Label,
    tooltip: 'Node da contagem de WBCs',
  })
  public wbcLabel: Label = null;

  virusCount: number = 0;
  rbcCount: number = 0;
  wbcCount: number = 0;

  addCount(type: string) {
    if (type === 'virus') {
      this.virusLabel.string = (this.virusCount++).toString();
    } else if (type === 'RBC') {
      this.rbcLabel.string = (this.rbcCount++).toString();
    } else {
      this.wbcLabel.string = (this.wbcCount++).toString();
    }
  }
}
