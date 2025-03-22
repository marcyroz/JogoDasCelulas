import { _decorator, Component, Node, Event } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DropDown')
export default class DropdownMenu extends Component {
  @property(Node)
  dropdownContent: Node | null = null; // O conteúdo do dropdown
  private isOpen: boolean = false;
  private isAnimating: boolean = false;
  onLoad() {
        // this.dropdownContent.active = false;

        // this.node.on(cc.Node.EventType.TOUCH_END, this.toggleDropdown, this);

        // cc.director
        // .getScene()
        // .on(cc.Node.EventType.TOUCH_START, this.onGlobalClick, this);
  }
  toggleDropdown() {
        // if (this.isAnimating) return;
        // if (this.isOpen) {
        // this.closeDropdown();
        // } else {
        // this.openDropdown();
        // }
  }
  openDropdown() {
        // this.isOpen = true;
        // this.isAnimating = true;
        // this.dropdownContent.active = true;

        // this.dropdownContent.opacity = 0;
        // this.dropdownContent.scale = 0.8;

        // cc.tween(this.dropdownContent)
        // .to(0.3, { opacity: 255, scale: 1 }, { easing: 'quartOut' })
        // .call(() => {
        // this.isAnimating = false;
        // })
        // .start();
  }
  closeDropdown() {
        // if (this.isAnimating) return;
        // this.isAnimating = true;
        // this.isOpen = false;

        // cc.tween(this.dropdownContent)
        // .to(0.2, { opacity: 0, scale: 0.8 }, { easing: 'quartIn' })
        // .call(() => {
        // this.dropdownContent.active = false;
        // this.isAnimating = false;
        // })
        // .start();
  }
  onGlobalClick(event: Event.EventTouch) {
        // let clickInside = this.node
        // .getBoundingBoxToWorld()
        // .contains(event.getLocation());
        // if (!clickInside) {
        // this.closeDropdown();
        // }
  }
  onDestroy() {
        // cc.director
        // .getScene()
        // .off(cc.Node.EventType.TOUCH_START, this.onGlobalClick, this);
  }
}


/**
 * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
 */
// const { ccclass, property } = cc._decorator;
// 
// @ccclass
// export default class DropdownMenu extends cc.Component {
//   @property(cc.Node)
//   dropdownContent: cc.Node = null; // O conteúdo do dropdown
// 
//   private isOpen: boolean = false;
//   private isAnimating: boolean = false;
// 
//   onLoad() {
//     this.dropdownContent.active = false;
// 
//     this.node.on(cc.Node.EventType.TOUCH_END, this.toggleDropdown, this);
// 
//     cc.director
//       .getScene()
//       .on(cc.Node.EventType.TOUCH_START, this.onGlobalClick, this);
//   }
// 
//   toggleDropdown() {
//     if (this.isAnimating) return;
//     if (this.isOpen) {
//       this.closeDropdown();
//     } else {
//       this.openDropdown();
//     }
//   }
// 
//   openDropdown() {
//     this.isOpen = true;
//     this.isAnimating = true;
//     this.dropdownContent.active = true;
// 
//     this.dropdownContent.opacity = 0;
//     this.dropdownContent.scale = 0.8;
// 
//     cc.tween(this.dropdownContent)
//       .to(0.3, { opacity: 255, scale: 1 }, { easing: 'quartOut' })
//       .call(() => {
//         this.isAnimating = false;
//       })
//       .start();
//   }
// 
//   closeDropdown() {
//     if (this.isAnimating) return;
//     this.isAnimating = true;
//     this.isOpen = false;
// 
//     cc.tween(this.dropdownContent)
//       .to(0.2, { opacity: 0, scale: 0.8 }, { easing: 'quartIn' })
//       .call(() => {
//         this.dropdownContent.active = false;
//         this.isAnimating = false;
//       })
//       .start();
//   }
// 
//   onGlobalClick(event: cc.Event.EventTouch) {
//     let clickInside = this.node
//       .getBoundingBoxToWorld()
//       .contains(event.getLocation());
//     if (!clickInside) {
//       this.closeDropdown();
//     }
//   }
// 
//   onDestroy() {
//     cc.director
//       .getScene()
//       .off(cc.Node.EventType.TOUCH_START, this.onGlobalClick, this);
//   }
// }
