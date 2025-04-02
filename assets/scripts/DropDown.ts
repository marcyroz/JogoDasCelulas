import {
  _decorator,
  Component,
  Node,
  Label,
  Button,
  Tween,
  Vec3,
  UIOpacity,
} from 'cc';
import WindowContent from './WindowContent';

const { ccclass, property } = _decorator;

@ccclass('DropdownMenu')
export default class DropdownMenu extends Component {
  @property({ type: Label, tooltip: 'Opção selecionada' })
  mainOption: Label | null = null;

  @property({ type: Node, tooltip: 'Outras opções' })
  options: Node | null = null;

  @property(WindowContent)
  windowContent: WindowContent | null = null;

  private isOpen: boolean = false;
  private isAnimating: boolean = false;

  onLoad() {
    if (this.options) {
      this.options.active = false;

      this.options.children.forEach((option) => {
        const button = option.getComponent(Button);
        const label = option.getChildByName('Label')?.getComponent(Label);

        if (button && label) {
          button.node.on(
            Button.EventType.CLICK,
            () => this.selectionMade(label),
            this
          );
        }
      });
    }

    this.setInitialSelection();
  }

  setInitialSelection() {
    if (this.mainOption) {
      this.mainOption.string = 'glóbulo vermelho';
    }

    if (this.windowContent) {
      this.windowContent.selectionChange('glóbulo vermelho');
    }
  }

  toggleDropdown() {
    if (this.isAnimating || !this.options) return;

    this.isOpen = !this.isOpen;
    this.options.active = true;

    const targetScale = this.isOpen
      ? new Vec3(1, 1, 1)
      : new Vec3(0.9, 0.9, 0.9);
    const duration = 0.2;

    new Tween(this.options)
      .to(duration, { scale: targetScale })
      .call(() => {
        if (!this.isOpen) this.options.active = false;
        this.isAnimating = false;
      })
      .start();
  }

  closeDropdown() {
    if (this.isOpen) {
      this.toggleDropdown();
    }
  }

  selectionMade(selectedLabel: Label) {
    if (!this.mainOption || !this.windowContent) return;

    const temp = this.mainOption.string;
    this.mainOption.string = selectedLabel.string;
    selectedLabel.string = temp;

    this.windowContent.selectionChange(this.mainOption.string);

    this.toggleDropdown();
  }
}
