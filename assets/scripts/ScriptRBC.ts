import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScriptRBC')
export default class ScriptRBC extends Component {
  @property
  health: number = 0;
  @property
  speed: number = 0;
  @property
  resistance: number = 0;
  @property
  reproductionRate: number = 1;
  @property
  infected: boolean = false;
}
