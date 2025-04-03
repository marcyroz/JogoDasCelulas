import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Entity')
export abstract class Entity extends Component {
  @property
  public health: number = 0;
  @property
  public speed: number = 0;
  @property
  public resistance: number = 0;
  @property
  public reproductionRate: number = 0;

  // public abstract onDeath(): void;
}
