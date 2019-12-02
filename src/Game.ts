type Player = "X" | "O";

export class Game {
  private board: (Player | undefined)[][] = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => undefined)
  );
  private currentPlayer: Player = "X";

  public Move(x: number, y: number): void {
    this.board[x][y] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  }

  public CellAt(x: number, y: number) {
    return this.board[x][y];
  }

  public Winner(): Player | undefined {
    for (let i = 0; i < 2; i++) {
      const player = i === 0 ? "X" : "O";
      if (this.HasWon(player)) {
        return player;
      }
    }
  }

  private HasWon(player: Player): boolean {
    return (
      this.HasWonAtBottomLeft(player) ||
      this.HasWonAtColumn(player, 0) ||
      this.HasWonAtColumn(player, 1) ||
      this.HasWonAtColumn(player, 2) ||
      this.HasWonAtRow(player, 0) ||
      this.HasWonAtRow(player, 1) ||
      this.HasWonAtRow(player, 2) ||
      this.HasWonAtTopLeft(player)
    );
  }

  private HasWonAtColumn(player: Player, y: number): boolean {
    return this.board.every(row => row[y] === player);
  }
  private HasWonAtRow(player: Player, x: number): boolean {
    return this.board[x].every(cell => cell === player);
  }
  private HasWonAtBottomLeft(player: Player): boolean {
    return this.board.every(
      (row, index) => row[row.length - 1 - index] === player
    );
  }
  private HasWonAtTopLeft(player: Player): boolean {
    return this.board.every((row, index) => row[index] === player);
  }
}
