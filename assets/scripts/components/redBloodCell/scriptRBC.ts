import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

import SaveSystem from '../../SaveSystem';

@ccclass('ScriptRBC')
export default class scriptRBC extends Component {
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
  public saveData(): void {}
  public loadData(): void {}

  start() {}

  update(dt: number) {}
}

/**
 * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
 */
