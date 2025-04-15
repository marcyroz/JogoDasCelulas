# YR432

**YR432** é um projeto de simulação celular desenvolvido como parte da matéria de **Laboratório de Engenharia de Software** na **FATEC de Praia Grande**. O jogo simula a interação entre vírus, glóbulos vermelhos (RBC) e glóbulos brancos (WBC), utilizando colisões, reprodução automática e diferentes status de habilidades.

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
- Clique no projeto para acessá-lo

---

## ▶️ Executar no navegador

1. Com o projeto aberto no Cocos Creator
2. Certifique-se de que a cena principal (`SceneGame`) está carregada
3. Selecione **Preview in Browser**
4. Clique no botão **Play** ▶️ no topo da janela
   
![Captura de tela 2025-04-15 161215](https://github.com/user-attachments/assets/c0f483a9-da67-4be9-8337-5dda7a810635)

Obs: se o projeto estiver sendo apresentado em 3d, clicar no campo selecionado para convertê-lo para a visualização 2d

![Captura de tela 2025-04-15 161903](https://github.com/user-attachments/assets/c5f93e88-8ee1-4d9f-9a23-9a9b97d2ef1e)


---

## 🧬 Sobre

- WBCs curam RBCs infectadas por colisão
- Reprodução automática baseada em taxa configurável por tipo de célula
- As posições são geradas dinamicamente num grid, respeitando zonas bloqueadas do mapa

---

## 📁 Estrutura básica

```
YR432/
├── assets/
│   ├── gameRes/
        ├── Board
        ├── Computer
        ...
│   ├── prefabs/
        ├── rbc.ts
        ├── virus.ts
        ├── wbc.ts
│   ├── scripts/
│   │   ├── ScriptVirus.ts
│   │   ├── ScriptRBC.ts
│   │   ├── ScriptWBC.ts
│   │   ├── Spawner.ts
│   │   └── GameCtrl.ts
│   └── Scenes/
│       └── SceneGame.scene
├── package.json
└── README.md
```

---

## 🧠 Créditos

Desenvolvido como parte do curso de Análise e Desenvolvimento de Sistemas – 2025  
Por Marcelly Farias, Vinícius Cauã e Johny Richard
