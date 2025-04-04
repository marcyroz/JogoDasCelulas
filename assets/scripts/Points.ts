import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Points')
export class Points extends Component {
  @property({ type: Label, tooltip: 'Label para exibir os pontos' })
  public pointsLabel: Label = null;

  private _points: number = 0;

  protected start(): void {
    this.points = 10;
  }

  public get points(): number {
    return this._points;
  }

  public set points(value: number) {
    this._points = value;
    this.pointsLabel.string = 'Pontos: ' + value.toString();
  }

  public addPoints(value: number) {
    this.points = this._points + value;
  }

  public subtractPoints(value: number): boolean {
    if (this._points >= value) {
      this.points = this._points - value;
      return true;
    }
    return false;
  }

  public canSpendPoint(): boolean {
    return this._points > 0;
  }
}
