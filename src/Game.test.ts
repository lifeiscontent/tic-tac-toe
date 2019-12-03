import { Game } from "./Game";
import { Assert } from "./Assert";

export class GameTest {
  private game!: Game;

  public SetUp(): void {
    this.game = new Game();
  }

  public TestFirstMove(): void {
    const x = 0;
    const y = 0;
    this.game.Move(x, y);
    Assert.AreEqual("X", this.game.CellAt(x, y));
  }

  public TestPlayerTurns(): void {
    this.game.Move(0, 0);
    this.game.Move(0, 1);

    Assert.AreEqual("X", this.game.CellAt(0, 0));
    Assert.AreEqual("O", this.game.CellAt(0, 1));
  }

  public TestWin(): void {
    this.game.Move(0, 0);
    this.game.Move(0, 1);
    this.game.Move(1, 1);
    this.game.Move(0, 2);
    this.game.Move(2, 2);

    Assert.AreEqual("X", this.game.CellAt(0, 0));
    Assert.AreEqual("O", this.game.CellAt(0, 1));
    Assert.AreEqual("X", this.game.CellAt(1, 1));
    Assert.AreEqual("O", this.game.CellAt(0, 2));
    Assert.AreEqual("X", this.game.CellAt(2, 2));
    Assert.AreEqual("X", this.game.Winner());
  }

  public TestGame(): void {
    this.game.Move(1, 1); // X
    this.game.Move(0, 0); // O
    this.game.Move(2, 2); // X
    this.game.Move(0, 2); // O
    this.game.Move(0, 1); // X
    this.game.Move(2, 1); // O
    this.game.Move(1, 0); // X
    this.game.Move(2, 0); // O
    this.game.Move(1, 2); // X
    Assert.AreEqual("X", this.game.Winner());
  }
}
