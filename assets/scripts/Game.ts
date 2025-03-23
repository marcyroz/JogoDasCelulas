import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Game')
export default class Game extends Component {
  @property(Label)
  label: Label | null = null;
  @property
  text: string = 'hello';
  //    // LIFE-CYCLE CALLBACKS:
  //    // onLoad () {}
  start() {}
  //    // update (dt) {}
}
