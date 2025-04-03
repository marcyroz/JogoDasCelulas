import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScriptWBC')
export default class ScriptWBC extends Component {
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
