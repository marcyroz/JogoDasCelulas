import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('scriptV')
export default class ScriptVirus extends Component {
  @property
  health: number = 0;
  @property
  speed: number = 0;
  @property
  strength: number = 0;
  @property
  resistance: number = 0;
  @property
  reproductionRate: number = 0;
}
