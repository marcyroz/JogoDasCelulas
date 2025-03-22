import { _decorator, Component, Node, Tween, UIOpacity, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DropdownMenu')
export default class DropdownMenu extends Component {
  @property(Node)
  dropdownContent: Node | null = null;
  private isOpen: boolean = false;
  private uiOpacity: UIOpacity | null = null;
  private isAnimating: boolean = false;

  onLoad() {
    if (this.dropdownContent) {
      this.dropdownContent.active = false;
      this.uiOpacity =
        this.dropdownContent.getComponent(UIOpacity) ||
        this.dropdownContent.addComponent(UIOpacity);
      this.uiOpacity.opacity = 0;
      this.dropdownContent.setScale(new Vec3(0.8, 0.8, 0.8));
    }
  }

  toggleDropdown() {
    if (this.isAnimating || !this.dropdownContent) return;

    this.isOpen = !this.isOpen;
    this.animateDropdown(this.isOpen);
  }

  animateDropdown(open: boolean) {
    if (!this.dropdownContent || !this.uiOpacity) return;

    this.isAnimating = true;
    this.dropdownContent.active = true;

    const targetOpacity = open ? 255 : 0;
    const targetScale = open ? new Vec3(1, 1, 1) : new Vec3(0.8, 0.8, 0.8);
    const duration = 0.5;

    new Tween(this.uiOpacity)
      .to(duration, { opacity: targetOpacity }, { easing: 'quartInOut' })
      .start();

    new Tween(this.dropdownContent)
      .to(duration, { scale: targetScale }, { easing: 'quartInOut' })
      .call(() => {
        if (!open) {
          this.dropdownContent.active = false;
        }
        this.isAnimating = false;
      })
      .start();
  }

  closeDropdown() {
    if (this.isOpen) {
      this.toggleDropdown();
    }
  }

  selectionMade() {
    // Lógica para quando uma opção do dropdown é selecionada
  }
}
