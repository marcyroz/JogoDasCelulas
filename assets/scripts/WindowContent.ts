import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WindowContent')
export default class WindowContent extends Component {
  @property(Node)
  virusManager: Node | null = null;

  @property(Node)
  wbcManager: Node | null = null;

  @property(Node)
  rbcManager: Node | null = null;

  onLoad() {
    this.selectionChange('glóbulo vermelho'); // Define o estado inicial
  }

  selectionChange(selected: string) {
    if (this.virusManager) this.virusManager.active = selected === 'vírus';
    if (this.wbcManager) this.wbcManager.active = selected === 'glóbulo branco';
    if (this.rbcManager)
      this.rbcManager.active = selected === 'glóbulo vermelho';
  }
}
