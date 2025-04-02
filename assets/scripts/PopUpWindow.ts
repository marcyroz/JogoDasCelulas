import { _decorator, Component, Vec3, UIOpacity, Tween, Node } from 'cc';
const { ccclass } = _decorator;

@ccclass('PopUpWindow')
export default class PopUpWindow extends Component {
  private isOpen: boolean = false;
  private isAnimating: boolean = false;
  private uiOpacity: UIOpacity = null!;
  private tweenOpacity: Tween<UIOpacity> | null = null;
  private tweenScale: Tween<Node> | null = null;

  onLoad() {
    this.node.active = false;
    this.node.setScale(new Vec3(0.2, 0.2, 0.2));
    this.uiOpacity =
      this.node.getComponent(UIOpacity) || this.node.addComponent(UIOpacity);
    this.uiOpacity.opacity = 0;
    this.node.setSiblingIndex(this.node.parent.children.length - 1);
  }

  private animateWindow(open: boolean) {
    if (this.isAnimating || this.isOpen === open) return;

    this.isAnimating = true;
    this.isOpen = open;
    this.node.active = true;

    const targetOpacity = open ? 255 : 0;
    const targetScale = open ? new Vec3(1, 1, 1) : new Vec3(0.2, 0.2, 0.2);
    const duration = 0.5;

    this.tweenOpacity?.stop();
    this.tweenScale?.stop();

    this.tweenOpacity = new Tween(this.uiOpacity)
      .to(duration, { opacity: targetOpacity }, { easing: 'quartInOut' })
      .start();

    this.tweenScale = new Tween(this.node)
      .to(duration, { scale: targetScale }, { easing: 'quartInOut' })
      .call(() => {
        if (!open) this.node.active = false;
        this.isAnimating = false;
      })
      .start();
  }

  Show_Window() {
    this.animateWindow(true);
  }

  Hide_Window() {
    this.animateWindow(false);
  }

  Choice_clicked() {
    this.Hide_Window();
  }
}
