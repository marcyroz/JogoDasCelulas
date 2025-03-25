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

import scriptV from '../components/virus/scriptV';
import scriptRBC from '../components/redBloodCell/scriptRBC';
import scriptWBC from '../components/whiteBloodCell/scriptWBC';

@ccclass('Spawner')
export class Spawner extends Component {
  @property({ type: Prefab, tooltip: 'Prefab da entidade vírus' })
  public virusPrefab: Prefab = null;

  @property({ type: Prefab, tooltip: 'Prefab da entidade RBC' })
  public RBCPrefab: Prefab = null;

  @property({ type: Prefab, tooltip: 'Prefab da entidade WBC' })
  public WBCPrefab: Prefab = null;

  public cellSize: number = 30;
  public cols: number;
  public rows: number;
  public occupiedPositions: Set<string> = new Set();

  private virusReproductionRate: number;
  private RBCReproductionRate: number;
  private WBCReproductionRate: number;

  private reproductionRateDivider: number = 15;

  initialize() {
    const visibleSize = view.getVisibleSize();
    this.cols = Math.floor(visibleSize.width / this.cellSize);
    this.rows = Math.floor(visibleSize.height / this.cellSize);

    // Reservar um bloco 5x5 no canto superior direito
    this.reserveTopRightBlock();

    // Configurar as taxas de reprodução para cada entidade
    this.setupEntityReproductionRate();

    // Agendar a função de spawn de cada tipo de entidade
    this.schedule(
      this.spawnVirus,
      1 / (this.virusReproductionRate / this.reproductionRateDivider)
    );
    this.schedule(
      this.spawnRBC,
      1 / (this.RBCReproductionRate / this.reproductionRateDivider)
    );
    this.schedule(
      this.spawnWBC,
      1 / (this.WBCReproductionRate / this.reproductionRateDivider)
    );
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
    const virusScript = virusEntity.getComponent(scriptV);
    if (virusScript) {
      this.virusReproductionRate = virusScript.reproductionRate;
    }

    const RBCEntity = instantiate(this.RBCPrefab);
    const RBCScript = RBCEntity.getComponent(scriptRBC);
    if (RBCScript) {
      this.RBCReproductionRate = RBCScript.reproductionRate;
    }

    const WBCEntity = instantiate(this.WBCPrefab);
    const WBCScript = WBCEntity.getComponent(scriptWBC);
    if (WBCScript) {
      this.WBCReproductionRate = WBCScript.reproductionRate;
    }
  }

  spawnVirus() {
    this.spawnEntity(this.virusPrefab);
  }

  spawnRBC() {
    this.spawnEntity(this.RBCPrefab);
  }

  spawnWBC() {
    this.spawnEntity(this.WBCPrefab);
  }

  spawnEntity(prefab: Prefab) {
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
    entity.setPosition(new Vec3(xPos, yPos, 0));
    this.node.addChild(entity);
    entity.setSiblingIndex(0);
  }
}
