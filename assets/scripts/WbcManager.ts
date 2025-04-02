import { _decorator, Component, EventTarget, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WbcManager')
export default class WbcManager extends Component {
  @property(Label)
  public healthLabel: Label = null;
  @property(Label)
  public speedLabel: Label = null;
  @property(Label)
  public strengthLabel: Label = null;
  @property(Label)
  public resistanceLabel: Label = null;
  @property(Label)
  public reproductionRateLabel: Label = null;

  private _heatlhValue: number = 0;
  private _speedValue: number = 0;
  private _strengthValue: number = 0;
  private _resistanceValue: number = 0;
  private _reproductionRateValue: number = 0;

  public onVariableChangeEventTarget = new EventTarget();

  public get healthValue(): number {
    return this._heatlhValue;
  }

  public set healthValue(value: number) {
    this._heatlhValue = value;
    this.healthLabel.string = 'Saúde: ' + value.toString();
  }

  public get speedValue(): number {
    return this._speedValue;
  }

  public set speedValue(value: number) {
    this._speedValue = value;
    this.speedLabel.string = 'Velocidade: ' + value.toString();
  }

  public get strengthValue(): number {
    return this._strengthValue;
  }

  public set strengthValue(value: number) {
    this._strengthValue = value;
    this.strengthLabel.string = 'Força: ' + value.toString();
  }

  public get resistanceValue(): number {
    return this._resistanceValue;
  }

  public set resistanceValue(value: number) {
    this._resistanceValue = value;
    this.resistanceLabel.string = 'Resistência: ' + value.toString();
  }

  public get reproductionRateValue(): number {
    return this._reproductionRateValue;
  }

  public set reproductionRateValue(value: number) {
    this._reproductionRateValue = value;
    this.reproductionRateLabel.string = 'Reprodução: ' + value.toString();
    // Necessário inserir essa linha nos outros setters também
    // para que o evento seja emitido quando o valor mudar
    this.onVariableChangeEventTarget.emit('reproductionRateValue', value);
  }

  onLoad() {
    this.healthValue = 0;
    this.speedValue = 0;
    this.strengthValue = 0;
    this.resistanceValue = 0;
    this.reproductionRateValue = 1;
  }

  addPoint(
    _,
    property:
      | 'healthValue'
      | 'speedValue'
      | 'strengthValue'
      | 'resistanceValue'
      | 'reproductionRateValue'
  ) {
    this[property]++;
  }

  removePoint(
    _,
    property:
      | 'healthValue'
      | 'speedValue'
      | 'strengthValue'
      | 'resistanceValue'
      | 'reproductionRateValue'
  ) {
    this[property]--;
  }
}
