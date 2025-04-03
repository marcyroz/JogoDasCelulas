import { _decorator, Component, Node, Label, EventTarget } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('VirusManager')
export default class VirusManager extends Component {
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

  private _healthValue: number = 0;
  private _speedValue: number = 0;
  private _strengthValue: number = 0;
  private _resistanceValue: number = 0;
  private _reproductionRateValue: number = 0;

  public onVariableChangeEventTarget = new EventTarget();

  public get healthValue(): number {
    return this._healthValue;
  }

  public set healthValue(value: number) {
    this._healthValue = value;
    this.healthLabel.string = 'Saúde: ' + value.toString();
    this.onVariableChangeEventTarget.emit('onPropertyChange', value);
  }

  public get speedValue(): number {
    return this._speedValue;
  }

  public set speedValue(value: number) {
    this._speedValue = value;
    this.speedLabel.string = 'Velocidade: ' + value.toString();
    this.onVariableChangeEventTarget.emit('onPropertyChange', value);
  }

  public get strengthValue(): number {
    return this._strengthValue;
  }

  public set strengthValue(value: number) {
    this._strengthValue = value;
    this.strengthLabel.string = 'Força: ' + value.toString();
    this.onVariableChangeEventTarget.emit('onPropertyChange', value);
  }

  public get resistanceValue(): number {
    return this._resistanceValue;
  }

  public set resistanceValue(value: number) {
    this._resistanceValue = value;
    this.resistanceLabel.string = 'Resistência: ' + value.toString();
    this.onVariableChangeEventTarget.emit('onPropertyChange', value);
  }

  public get reproductionRateValue(): number {
    return this._reproductionRateValue;
  }

  public set reproductionRateValue(value: number) {
    this._reproductionRateValue = value;
    this.reproductionRateLabel.string = 'Reprodução: ' + value.toString();
    // Necessário inserir essa linha nos outros setters também
    // para que o evento seja emitido quando o valor mudar
    this.onVariableChangeEventTarget.emit('onPropertyChange', value);
  }

  onLoad() {
    this.healthValue = 5;
    this.speedValue = 10;
    this.strengthValue = 5;
    this.resistanceValue = 2;
    this.reproductionRateValue = 2;
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
