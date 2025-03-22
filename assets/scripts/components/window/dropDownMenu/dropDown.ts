import {
  _decorator,
  Component,
  Node,
  Tween,
  UIOpacity,
  Vec3,
  Label,
  Button,
} from 'cc';
import WindowContent from '../windowContent/windowContent';
import scriptV from '../../virus/scriptV';
import scriptWBC from '../../whiteBloodCell/scriptWBC';
import scriptRDB from '../../redBloodCell/scriptRBC';

const { ccclass, property } = _decorator;

@ccclass('DropdownMenu')
export default class DropdownMenu extends Component {
  @property(Node)
  dropdownContent: Node | null = null;

  @property(Node)
  mainButton: Node | null = null;

  @property(WindowContent)
  windowContent: WindowContent | null = null;

  private isOpen: boolean = false;
  private uiOpacity: UIOpacity | null = null;
  private isAnimating: boolean = false;

  private entityData: { [key: string]: any } = {
    'glóbulo branco': new scriptWBC(),
    'glóbulo vermelho': new scriptRDB(),
    vírus: new scriptV(),
  };

  onLoad() {
    if (this.dropdownContent) {
      this.dropdownContent.active = false;
      this.uiOpacity =
        this.dropdownContent.getComponent(UIOpacity) ||
        this.dropdownContent.addComponent(UIOpacity);
      this.uiOpacity.opacity = 0;
      this.dropdownContent.setScale(new Vec3(0.8, 0.8, 0.8));

      this.dropdownContent.children.forEach((button) => {
        button.on(
          Button.EventType.CLICK,
          () => this.selectionMade(button),
          this
        );
      });
    }

    if (this.mainButton) {
      this.mainButton.on(Button.EventType.CLICK, this.toggleDropdown, this);
    }

    this.setInitialSelection();
  }

  setInitialSelection() {
    if (this.mainButton && this.windowContent) {
      const initialSelection = 'glóbulo vermelho';
      const mainLabel = this.mainButton.getComponentInChildren(Label);

      if (!mainLabel) return;

      mainLabel.string = initialSelection;

      if (this.entityData[initialSelection]) {
        this.windowContent.updateStats(
          this.entityData[initialSelection],
          initialSelection
        );
      }
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
    const duration = 0.3;

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

  selectionMade(selectedButton: Node) {
    if (!this.mainButton || !this.windowContent) return;

    const mainLabel = this.mainButton.getComponentInChildren(Label);
    const selectedLabel = selectedButton.getComponentInChildren(Label);

    if (!mainLabel || !selectedLabel) return;

    const selectedEntityName = selectedLabel.string;

    const tempText = mainLabel.string;
    mainLabel.string = selectedEntityName;
    selectedLabel.string = tempText;

    if (this.entityData[selectedEntityName]) {
      this.windowContent.updateStats(
        this.entityData[selectedEntityName],
        selectedEntityName
      );
    }

    this.closeDropdown();
  }
}
