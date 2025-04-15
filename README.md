# YR432

**YR432** é um projeto de simulação celular desenvolvido como parte da matéria de **Laboratório de Engenharia de Software** na **FATEC de Praia Grande**. O jogo simula a interação entre vírus, glóbulos vermelhos (RBC) e glóbulos brancos (WBC), utilizando colisões, reprodução automática e movimentação baseada em pathfinding.

---

## 🔧 Tecnologias

- **Engine:** [Cocos Creator v3.8.5](https://www.cocos.com/en/creator)
- **Linguagem:** TypeScript
- **Bibliotecas utilizadas:**
  - [PathFinding.js](https://github.com/qiao/PathFinding.js)
  - [Tiled Map Editor](https://www.mapeditor.org/)

---

## 📦 Instalação

### 1. Instalar o Cocos Dashboard

- Acesse: https://www.cocos.com/en/creator
- Baixe e instale o **Cocos Dashboard**
- Pelo dashboard, instale a versão **Cocos Creator v3.8.5**

### 2. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/YR432.git
cd YR432
```

### 3. Abrir o projeto

- Abra o **Cocos Dashboard**
- Navegue para a aba **Projects**
- Clique em **Add Project**
- Selecione a pasta do projeto



---

## ▶️ Executar no navegador

1. Com o projeto aberto no Cocos Creator
2. Certifique-se de que a cena principal (`Main.scene`) está carregada
3. Selecione a plataforma **Web**
4. Clique no botão **Play** ▶️ no topo da janela

---

## 🧬 Sobre

- Vírus perseguem RBCs usando **pathfinding com A\***
- WBCs curam RBCs infectadas por colisão
- Reprodução automática baseada em taxa configurável por tipo de célula
- As posições são geradas dinamicamente num grid, respeitando zonas bloqueadas do mapa

---

## 📁 Estrutura básica

```
YR432/
├── assets/
│   ├── scripts/
│   │   ├── ScriptVirus.ts
│   │   ├── ScriptRBC.ts
│   │   ├── ScriptWBC.ts
│   │   ├── Spawner.ts
│   │   └── PathFinding.ts
│   └── scenes/
│       └── Main.scene
├── project.json
└── README.md
```

---

## 🧠 Créditos

Desenvolvido como parte do curso de Engenharia de Software – 2025  
Por [Seu Nome]
