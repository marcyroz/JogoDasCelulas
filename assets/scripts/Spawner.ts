import {
  _decorator,
  Component,
  Prefab,
  instantiate,
  Vec3,
  Node,
  view,
} from 'cc';

const { ccclass, property } = _decorator;

import ScriptVirus from './ScriptVirus';
import ScriptRBC from './ScriptRBC';
import ScriptWBC from './ScriptWBC';

import VirusManager from './VirusManager';
import WbcManager from './WbcManager';
import RbcManager from './RbcManager';
import PopulationBoard from './PopulationBoard';

@ccclass('Spawner')
export class Spawner extends Component {
  @property({ type: Prefab, tooltip: 'Prefab da entidade vírus' })
  public virusPrefab: Prefab = null;

  @property({ type: Prefab, tooltip: 'Prefab da entidade RBC' })
  public RBCPrefab: Prefab = null;

  @property({ type: Prefab, tooltip: 'Prefab da entidade WBC' })
  public WBCPrefab: Prefab = null;

  @property({ type: VirusManager, tooltip: 'Node do Virus manager' })
  public virusManager: VirusManager = null;

  @property({ type: WbcManager, tooltip: 'Node do Wbc manager' })
  public wbcManager: WbcManager = null;

  @property({ type: RbcManager, tooltip: 'Node do Rbc manager' })
  public rbcManager: RbcManager = null;

  @property({ type: PopulationBoard, tooltip: 'Node do Rbc manager' })
  public populationBoard: PopulationBoard = null;

  public cellSize: number = 30;
  public cols: number;
  public rows: number;
  public occupiedPositions: Set<string> = new Set();

  private reproductionRateDivider: number = 10;

  initialize() {
    const visibleSize = view.getVisibleSize();
    this.cols = Math.floor(visibleSize.width / this.cellSize);
    this.rows = Math.floor(visibleSize.height / this.cellSize);

    // Reservar um bloco 5x5 no canto superior direito
    this.reserveTopRightBlock();

    // Configurar as taxas de reprodução para cada entidade
    this.setupEntityReproductionRate();

    this.registerSchedulers();

    this.virusManager.onVariableChangeEventTarget.on(
      'reproductionRateValue',
      () => {
        this.unregisterSchedulers();
        this.registerSchedulers();
      },
      this
    );

    this.wbcManager.onVariableChangeEventTarget.on(
      'reproductionRateValue',
      () => {
        this.unregisterSchedulers();
        this.registerSchedulers();
      },
      this
    );

    this.rbcManager.onVariableChangeEventTarget.on(
      'reproductionRateValue',
      () => {
        this.unregisterSchedulers();
        this.registerSchedulers();
      },
      this
    );
  }

  // Agendar a função de spawn de cada tipo de entidade
  private registerSchedulers() {
    this.schedule(
      this.spawnVirus,
      1 /
        (this.virusManager.reproductionRateValue / this.reproductionRateDivider)
    );
    this.schedule(
      this.spawnRBC,
      1 / (this.rbcManager.reproductionRateValue / this.reproductionRateDivider)
    );
    this.schedule(
      this.spawnWBC,
      1 / (this.wbcManager.reproductionRateValue / this.reproductionRateDivider)
    );
  }

  private unregisterSchedulers() {
    this.unschedule(this.spawnVirus);
    this.unschedule(this.spawnWBC);
    this.unschedule(this.spawnRBC);
  }

  reserveTopRightBlock() {
    const blockSize = 5; // Tamanho do bloco 5x5
    const startCol = this.cols - blockSize; // Começar a reservar a partir de cols-5
    const startRow = this.rows - blockSize; // Começar a reservar a partir de rows-5

    // Marcar as 25 células como ocupadas (5x5)
    for (let col = startCol; col < this.cols; col++) {
      for (let row = startRow; row < this.rows; row++) {
        const positionKey = `${col},${row}`;
        this.occupiedPositions.add(positionKey);
      }
    }
  }

  setupEntityReproductionRate() {
    // Obter a taxa de reprodução de cada tipo de entidade
    const virusEntity = instantiate(this.virusPrefab);
    const virusScript = virusEntity.getComponent(ScriptVirus);
    if (virusScript) {
      this.virusManager.reproductionRateValue = virusScript.reproductionRate;
    }

    const RBCEntity = instantiate(this.RBCPrefab);
    const RBCScript = RBCEntity.getComponent(ScriptRBC);
    if (RBCScript) {
      this.rbcManager.reproductionRateValue = RBCScript.reproductionRate;
    }

    const WBCEntity = instantiate(this.WBCPrefab);
    const WBCScript = WBCEntity.getComponent(ScriptWBC);
    if (WBCScript) {
      this.wbcManager.reproductionRateValue = WBCScript.reproductionRate;
    }
  }

  spawnVirus() {
    this.spawnEntity(this.virusPrefab, 'virus');
  }

  spawnRBC() {
    this.spawnEntity(this.RBCPrefab, 'RBC');
  }

  spawnWBC() {
    this.spawnEntity(this.WBCPrefab, 'WBC');
  }

  spawnEntity(prefab: Prefab, type: 'virus' | 'RBC' | 'WBC') {
    if (this.occupiedPositions.size >= this.cols * this.rows) {
      this.unschedule(this.spawnEntity);
      console.log('Todos os espaços foram preenchidos.');
      return;
    }

    let randomCol: number;
    let randomRow: number;
    let positionKey: string;

    do {
      randomCol = Math.floor(Math.random() * this.cols);
      randomRow = Math.floor(Math.random() * this.rows);
      positionKey = `${randomCol},${randomRow}`;
    } while (
      this.occupiedPositions.has(positionKey) ||
      (randomCol === this.cols - 1 && randomRow === this.rows - 1)
    );

    this.occupiedPositions.add(positionKey);

    const xPos =
      randomCol * this.cellSize -
      (this.cols * this.cellSize) / 2 +
      this.cellSize / 2;
    const yPos =
      randomRow * this.cellSize -
      (this.rows * this.cellSize) / 2 +
      this.cellSize / 2;

    // Instanciar a entidade com base no prefab
    const entity = instantiate(prefab);

    if (type === 'virus') {
      const virusProps = entity.getComponent(ScriptVirus);
      virusProps.health = this.virusManager.healthValue;
      virusProps.speed = this.virusManager.speedValue;
      virusProps.strength = this.virusManager.strengthValue;
      virusProps.resistance = this.virusManager.resistanceValue;
      virusProps.reproductionRate = this.virusManager.reproductionRateValue;
    } else if (type === 'RBC') {
      const RBCProps = entity.getComponent(ScriptRBC);
      RBCProps.health = this.rbcManager.healthValue;
      RBCProps.speed = this.rbcManager.speedValue;
      RBCProps.resistance = this.rbcManager.resistanceValue;
      RBCProps.reproductionRate = this.rbcManager.reproductionRateValue;
    } else if (type === 'WBC') {
      const WBCProps = entity.getComponent(ScriptWBC);
      WBCProps.health = this.wbcManager.healthValue;
      WBCProps.speed = this.wbcManager.speedValue;
      WBCProps.strength = this.wbcManager.strengthValue;
      WBCProps.resistance = this.wbcManager.resistanceValue;
      WBCProps.reproductionRate = this.wbcManager.reproductionRateValue;
    }

    entity.setPosition(new Vec3(xPos, yPos, 0));
    this.node.addChild(entity);
    entity.setSiblingIndex(0);
  }
}
