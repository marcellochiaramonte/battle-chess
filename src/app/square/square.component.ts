import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Board, Piece } from '../board/board.component';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-12 h-12 grid place-content-center" [ngClass]="color">
      <img
        *ngIf="piece !== undefined"
        class="w-full h-full"
        src="pieces/{{ piece }}.svg"
        alt=""
      />

      <!-- {{ board.get(position) }} -->
    </div>
  `,
})
export class SquareComponent implements OnInit {
  @Input() position: string = '';
  @Input() board: Board = new Map();

  lightSquare = 'bg-white';
  darkSquare = 'bg-lime-700 text-white';

  piece: Piece | undefined;
  color: string = this.lightSquare;

  ngOnInit() {
    this.piece = this.getSquarePiece(this.position);
    this.color = this.getSquareColor(this.position);
  }

  getSquareColor(position: string): string {
    if (this.position.charCodeAt(0) % 2) {
      return parseInt(this.position.charAt(1)) % 2
        ? this.darkSquare
        : this.lightSquare;
    }
    return parseInt(position.charAt(1)) % 2
      ? this.lightSquare
      : this.darkSquare;
  }

  getSquarePiece(position: string) {
    return this.board.get(position);
  }
}
